'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Disable SSR for Three.js components
const Canvas = dynamic(
  () => import('@react-three/fiber').then((mod) => mod.Canvas),
  { ssr: false }
);

const Environment = dynamic(
  () => import('@react-three/drei').then((mod) => mod.Environment),
  { ssr: false }
);

const ContactShadows = dynamic(
  () => import('@react-three/drei').then((mod) => mod.ContactShadows),
  { ssr: false }
);

const AlexAvatar3D = dynamic(() => import('./AlexAvatar3D'), {
  ssr: false,
});

interface AlexCanvas3DProps {
  animation: 'idle' | 'talking' | 'waving' | 'thinking' | 'pointing';
  isSpeaking?: boolean;
}

export default function AlexCanvas3D({ animation, isSpeaking }: AlexCanvas3DProps) {
  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-3xl bg-gradient-to-b from-purple-900/20 to-transparent">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        {/* Environment */}
        <Suspense fallback={null}>
          <Environment preset="city" />
        </Suspense>

        {/* Avatar */}
        <Suspense fallback={null}>
          <AlexAvatar3D animation={animation} isSpeaking={isSpeaking} />
        </Suspense>

        {/* Shadow */}
        <Suspense fallback={null}>
          <ContactShadows
            position={[0, -1, 0]}
            opacity={0.4}
            scale={10}
            blur={2}
            far={4}
          />
        </Suspense>
      </Canvas>

      {/* Loading Overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20">
        <div className="text-sm text-white/50">Loading 3D Alex...</div>
      </div>

      {/* Status Badge */}
      <div className="absolute left-4 top-4">
        <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-md">
          <div
            className={`h-2 w-2 rounded-full ${
              isSpeaking ? 'animate-pulse bg-green-500' : 'bg-purple-500'
            }`}
          />
          <span className="text-sm text-white">
            {isSpeaking ? 'Beszélek...' : '3D Mode'}
          </span>
        </div>
      </div>
    </div>
  );
}
