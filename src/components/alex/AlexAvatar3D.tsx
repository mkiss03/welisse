'use client';

import { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface AlexAvatar3DProps {
  animation: 'idle' | 'talking' | 'waving' | 'thinking' | 'pointing';
  isSpeaking?: boolean;
}

export default function AlexAvatar3D({ animation, isSpeaking }: AlexAvatar3DProps) {
  const group = useRef<THREE.Group>(null);

  // Load avatar model
  const { scene } = useGLTF('/models/alex-avatar.glb');

  // Load animations
  const { animations: idleAnim } = useGLTF('/models/animations/idle.glb');
  const { animations: talkingAnim } = useGLTF('/models/animations/talking.glb');
  const { animations: wavingAnim } = useGLTF('/models/animations/waving.glb');

  // Setup animation mixer
  const { actions } = useAnimations(
    [...idleAnim, ...talkingAnim, ...wavingAnim],
    group
  );

  // Play animation based on state
  useEffect(() => {
    // Stop all animations
    Object.values(actions).forEach(action => action?.stop());

    // Determine which animation to play
    let animationName = animation;
    if (isSpeaking) {
      animationName = 'talking';
    }

    // Play current animation
    const currentAction = actions[animationName];
    if (currentAction) {
      currentAction.reset().fadeIn(0.5).play();
    }

    return () => {
      currentAction?.fadeOut(0.5);
    };
  }, [animation, isSpeaking, actions]);

  // Subtle breathing + mouse tracking
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

  return (
    <group ref={group}>
      <primitive object={scene} scale={1.5} position={[0, -1, 0]} />
    </group>
  );
}

// Preload models for better performance
useGLTF.preload('/models/alex-avatar.glb');
useGLTF.preload('/models/animations/idle.glb');
useGLTF.preload('/models/animations/talking.glb');
useGLTF.preload('/models/animations/waving.glb');
