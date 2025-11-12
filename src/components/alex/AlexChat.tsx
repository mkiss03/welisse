'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import AlexVoice, { AlexVoiceRef } from './AlexVoice';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

type AnimationType = 'idle' | 'talking' | 'waving' | 'pointing' | 'thinking';

export default function AlexChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Szia! Alex vagyok, a Welisse AI asszisztense. 👋\n\nMiben segíthetek ma?',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [animation, setAnimation] = useState<AnimationType>('waving');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const alexVoiceRef = useRef<AlexVoiceRef>(null);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Reset to idle after wave
  useEffect(() => {
    const timer = setTimeout(() => {
      if (animation === 'waving') {
        setAnimation('idle');
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [animation]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setAnimation('thinking');

    try {
      // Call OpenAI API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();

      // Add assistant message
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);

      // Speak response
      setAnimation('talking');
      setIsSpeaking(true);
      alexVoiceRef.current?.speak(data.message, () => {
        setIsSpeaking(false);
        setAnimation('idle');
      });
    } catch (error) {
      console.error('Chat error:', error);

      // Error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Elnézést, valami hiba történt. Próbáld újra!',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
      setAnimation('idle');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVoiceInput = (transcript: string) => {
    setInput(transcript);
    sendMessage(transcript);
  };

  const quickReplies = [
    'Weboldal kell',
    'Mesélj a szolgáltatásokról',
    'Mennyibe kerül?',
    'Mutasd a portfóliót',
  ];

  // Get avatar emoji based on state
  const getAvatarEmoji = () => {
    if (isListening) return '👂';
    if (isSpeaking) return '🗣️';
    if (animation === 'waving') return '👋';
    if (animation === 'thinking') return '🤔';
    if (animation === 'pointing') return '👉';
    return '👨‍💻';
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {/* Avatar Display (2D Version) */}
      <div className="relative">
        <div className="flex h-[500px] w-full items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-b from-purple-900/20 to-transparent">
          <div className="text-center">
            <motion.div
              className="mb-4 text-9xl"
              animate={{
                scale: isSpeaking ? [1, 1.1, 1] : 1,
                rotate: animation === 'waving' ? [0, 10, -10, 10, 0] : 0,
              }}
              transition={{
                duration: animation === 'waving' ? 1.5 : 0.5,
                repeat: isSpeaking ? Infinity : 0,
              }}
            >
              {getAvatarEmoji()}
            </motion.div>
            <p className="text-2xl font-bold text-white">Alex</p>
            <p className="mt-2 text-sm text-gray-400">AI Asszisztens • Welisse</p>
          </div>
        </div>

        {/* Status Badge */}
        <div className="absolute left-4 top-4">
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-md">
            <div
              className={`h-2 w-2 rounded-full ${
                isListening
                  ? 'bg-red-500 animate-pulse'
                  : isSpeaking
                    ? 'bg-green-500 animate-pulse'
                    : 'bg-purple-500'
              }`}
            />
            <span className="text-sm text-white">
              {isListening ? 'Hallgatlak...' : isSpeaking ? 'Beszélek...' : 'Online'}
            </span>
          </div>
        </div>
      </div>

      {/* Chat Interface */}
      <div className="flex h-[500px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
        {/* Header */}
        <div className="border-b border-white/10 p-4">
          <h3 className="text-lg font-semibold text-white">Beszélgess Alex-szel</h3>
          <p className="text-sm text-gray-400">AI Asszisztens • Online</p>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4" ref={scrollRef}>
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-4 flex ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/10 text-white'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                  <span className="mt-1 block text-xs opacity-50">
                    {message.timestamp.toLocaleTimeString('hu-HU', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Loading */}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 text-gray-400"
            >
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="text-sm">Alex gondolkodik...</span>
            </motion.div>
          )}
        </ScrollArea>

        {/* Quick Replies */}
        {messages.length === 1 && (
          <div className="flex flex-wrap gap-2 px-4 pb-4">
            {quickReplies.map((reply) => (
              <button
                key={reply}
                onClick={() => sendMessage(reply)}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white transition-colors hover:bg-white/10"
              >
                {reply}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="border-t border-white/10 p-4">
          <div className="flex gap-2">
            {/* Voice Input */}
            <AlexVoice
              ref={alexVoiceRef}
              onTranscript={handleVoiceInput}
              onListeningChange={setIsListening}
            />

            {/* Text Input */}
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage(input)}
              placeholder="Írj üzenetet..."
              disabled={isLoading}
              className="flex-1 border-white/20 bg-white/10 text-white placeholder:text-gray-500"
            />

            {/* Send Button */}
            <Button
              onClick={() => sendMessage(input)}
              disabled={!input.trim() || isLoading}
              className="bg-purple-600 hover:bg-purple-700"
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
