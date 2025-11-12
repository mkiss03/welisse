'use client';

import { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import { Mic, MicOff } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AlexVoiceProps {
  onTranscript: (text: string) => void;
  onListeningChange?: (isListening: boolean) => void;
}

export interface AlexVoiceRef {
  speak: (text: string, onEnd?: () => void) => void;
  stopSpeaking: () => void;
}

const AlexVoice = forwardRef<AlexVoiceRef, AlexVoiceProps>(
  ({ onTranscript, onListeningChange }, ref) => {
    const [isListening, setIsListening] = useState(false);
    const recognitionRef = useRef<any>(null);

    // Speech Recognition (Voice Input)
    const startListening = () => {
      if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        alert('A hangfelismerés nem támogatott ebben a böngészőben. Próbáld Chrome-ban!');
        return;
      }

      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();

      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'hu-HU';

      recognitionRef.current.onstart = () => {
        setIsListening(true);
        onListeningChange?.(true);
      };

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        onTranscript(transcript);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
        onListeningChange?.(false);
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
        onListeningChange?.(false);
      };

      recognitionRef.current.start();
    };

    const stopListening = () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };

    // Text-to-Speech (Voice Output)
    const speak = (text: string, onEnd?: () => void) => {
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'hu-HU';
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;

      // Find Hungarian voice
      const voices = window.speechSynthesis.getVoices();
      const hungarianVoice = voices.find((v) => v.lang.startsWith('hu')) || voices[0];
      if (hungarianVoice) {
        utterance.voice = hungarianVoice;
      }

      utterance.onend = () => {
        onEnd?.();
      };

      window.speechSynthesis.speak(utterance);
    };

    const stopSpeaking = () => {
      window.speechSynthesis.cancel();
    };

    // Expose methods to parent
    useImperativeHandle(ref, () => ({
      speak,
      stopSpeaking,
    }));

    return (
      <Button
        onMouseDown={startListening}
        onMouseUp={stopListening}
        onTouchStart={startListening}
        onTouchEnd={stopListening}
        variant="outline"
        size="icon"
        className={`
          ${
            isListening
              ? 'bg-red-500 hover:bg-red-600 border-red-500'
              : 'bg-white/10 border-white/20'
          }
          transition-colors
        `}
      >
        {isListening ? (
          <MicOff className="h-4 w-4 text-white animate-pulse" />
        ) : (
          <Mic className="h-4 w-4 text-white" />
        )}
      </Button>
    );
  }
);

AlexVoice.displayName = 'AlexVoice';

export default AlexVoice;
