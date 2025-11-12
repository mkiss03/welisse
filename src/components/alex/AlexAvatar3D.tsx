'use client';

import { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface AlexAvatar3DProps {
  animation: 'idle' | 'talking' | 'waving' | 'thinking' | 'pointing';
  isSpeaking?: boolean;
}

export default function AlexAvatar3D({ animation, isSpeaking }: AlexAvatar3DProps) {
  const group = useRef<THREE.Group>(null);
  const [error, setError] = useState<string | null>(null);

  // Subtle breathing + mouse tracking (works without model)
  useFrame((state) => {
    if (!group.current) return;

    // Breathing effect
    const breathingOffset = Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
    group.current.position.y = breathingOffset;

    // Head follows mouse (subtle)
    const mouse = state.mouse;
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      mouse.x * 0.1,
      0.05
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -mouse.y * 0.05,
      0.05
    );
  });

  if (error) {
    return (
      <group ref={group}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1, 2, 0.5]} />
          <meshStandardMaterial color="#8b5cf6" />
        </mesh>
      </group>
    );
  }

  // Placeholder cube until models are loaded
  return (
    <group ref={group}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 2, 0.5]} />
        <meshStandardMaterial
          color={isSpeaking ? '#10b981' : '#8b5cf6'}
          emissive={isSpeaking ? '#10b981' : '#8b5cf6'}
          emissiveIntensity={0.2}
        />
      </mesh>
      {/* Head */}
      <mesh position={[0, 1.2, 0]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial
          color="#fbbf24"
          emissive="#fbbf24"
          emissiveIntensity={0.1}
        />
      </mesh>
    </group>
  );
}

// NOTE: Preload removed to avoid 404 errors when models don't exist
// Add back when models are uploaded:
// useGLTF.preload('/models/alex-avatar.glb');
// useGLTF.preload('/models/animations/idle.glb');
// useGLTF.preload('/models/animations/talking.glb');
// useGLTF.preload('/models/animations/waving.glb');
