'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

// Detect WebGL support safely before instantiating Three.js
function isWebGLAvailable() {
  try {
    const testCanvas = document.createElement('canvas');
    return !!(
      typeof window !== 'undefined' &&
      window.WebGLRenderingContext &&
      (testCanvas.getContext('webgl2') || testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

export default function HeroVisual3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [useFallback, setUseFallback] = useState<boolean>(false);

  useEffect(() => {
    // 0. Pre-flight check: Is WebGL available on this device/browser?
    if (!isWebGLAvailable()) {
      setUseFallback(true);
      return;
    }

    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let animationFrameId: number;
    const clock = new THREE.Clock();
    let renderer: THREE.WebGLRenderer | null = null;
    let scene: THREE.Scene | null = null;

    try {
      // 1. Scene setup
      scene = new THREE.Scene();

      // 2. Camera setup
      const width = container.clientWidth || window.innerWidth || 1200;
      const height = container.clientHeight || window.innerHeight || 800;
      const aspect = width / height;
      const camera = new THREE.PerspectiveCamera(42, aspect, 0.1, 100);
      
      // Adaptive camera distance based on aspect ratio
      if (aspect < 0.65) {
        camera.position.set(0, 0, 7.8);
      } else if (aspect < 1.0) {
        camera.position.set(0, 0, 7.2);
      } else {
        camera.position.set(0, 0, 6.6);
      }

      // 3. Renderer setup with safe context creation
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.35;
      renderer.outputColorSpace = THREE.SRGBColorSpace;

    // 4. Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x7b8cff, 2.6);
    keyLight.position.set(5, 6, 4);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x00e5ff, 2.2);
    rimLight.position.set(-5, -4, -3);
    scene.add(rimLight);

    const deepPurpleLight = new THREE.PointLight(0xa855f7, 2.4, 18);
    deepPurpleLight.position.set(0, -3, 3);
    scene.add(deepPurpleLight);

    // Dynamic mouse-following spotlight
    const mouseLight = new THREE.PointLight(0x00f0ff, 3.5, 12);
    mouseLight.position.set(0, 0, 4);
    scene.add(mouseLight);

    // 5. Main 3D Container Group
    const mainGroup = new THREE.Group();
    if (aspect < 0.65) {
      mainGroup.scale.setScalar(0.72);
    } else if (aspect < 1.0) {
      mainGroup.scale.setScalar(0.85);
    }
    scene.add(mainGroup);

    // --- A. CENTRAL CORE ---
    const coreGroup = new THREE.Group();
    mainGroup.add(coreGroup);

    // Faceted Crystal Jewel
    const jewelGeo = new THREE.IcosahedronGeometry(1.02, 0);
    const jewelMat = new THREE.MeshPhysicalMaterial({
      color: 0x14182b,
      metalness: 0.95,
      roughness: 0.12,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      flatShading: true,
      reflectivity: 0.9,
    });
    const jewelMesh = new THREE.Mesh(jewelGeo, jewelMat);
    coreGroup.add(jewelMesh);

    // Neon Wireframe Cage around Jewel
    const wireGeo = new THREE.IcosahedronGeometry(1.05, 0);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.75,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    coreGroup.add(wireMesh);

    // Inner Pulsing Octahedron Core
    const innerGeo = new THREE.OctahedronGeometry(0.55, 1);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x00e5ff,
      emissive: 0x3b82f6,
      emissiveIntensity: 1.6,
      roughness: 0.2,
      metalness: 0.8,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // --- B. ORBITAL GYROSCOPIC RINGS ("THE AXES") ---
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0x7b8cff,
      metalness: 0.9,
      roughness: 0.15,
      wireframe: false,
    });
    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.92,
      roughness: 0.18,
    });
    const ringMat3 = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      metalness: 0.9,
      roughness: 0.2,
    });

    // Ring 1 (Inner Axis)
    const ringGeo1 = new THREE.TorusGeometry(1.6, 0.022, 16, 100);
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    mainGroup.add(ring1);

    // Ring 2 (Middle Axis)
    const ringGeo2 = new THREE.TorusGeometry(2.05, 0.02, 16, 120);
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = Math.PI / 3;
    mainGroup.add(ring2);

    // Ring 3 (Outer Axis)
    const ringGeo3 = new THREE.TorusGeometry(2.45, 0.018, 16, 140);
    const ring3 = new THREE.Mesh(ringGeo3, ringMat3);
    ring3.rotation.y = Math.PI / 4;
    mainGroup.add(ring3);

    // Glowing Satellite Beacons on Rings
    const beaconGeo = new THREE.SphereGeometry(0.055, 16, 16);
    const beaconMat1 = new THREE.MeshBasicMaterial({ color: 0x00f5ff });
    const beaconMat2 = new THREE.MeshBasicMaterial({ color: 0xa855f7 });
    const beaconMat3 = new THREE.MeshBasicMaterial({ color: 0xffffff });

    const beacon1 = new THREE.Mesh(beaconGeo, beaconMat1);
    ring1.add(beacon1);

    const beacon2 = new THREE.Mesh(beaconGeo, beaconMat2);
    ring2.add(beacon2);

    const beacon3 = new THREE.Mesh(beaconGeo, beaconMat3);
    ring3.add(beacon3);

    // --- C. NEURAL PARTICLE FIELD ---
    const particleCount = 650;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x4f6ef7); // Brand indigo
    const color2 = new THREE.Color(0x00f5ff); // Cyber cyan
    const color3 = new THREE.Color(0xa855f7); // Purple

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.3 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = z;

      // Random color blend
      const t = Math.random();
      const pColor = t < 0.4 ? color1 : t < 0.8 ? color2 : color3;
      particleColors[i * 3] = pColor.r;
      particleColors[i * 3 + 1] = pColor.g;
      particleColors[i * 3 + 2] = pColor.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    // Circle texture for soft glowing dots
    const createCircleTexture = () => {
      const size = 64;
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.7)');
        gradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.15)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, size, size);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const particleTexture = createCircleTexture();
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.065,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    mainGroup.add(particles);

    // --- D. REAL-TIME MOUSE TRACKING ---
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const rawX = (e.clientX - rect.left) / rect.width;
      const rawY = (e.clientY - rect.top) / rect.height;

      // Normalized coordinates [-1, 1] relative to the 3D container
      mouse.targetX = (rawX - 0.5) * 2;
      mouse.targetY = -(rawY - 0.5) * 2;
    };

    // Also track window mouse for smoother global interaction
    const handleWindowMouseMove = (e: MouseEvent) => {
      const rawX = e.clientX / window.innerWidth;
      const rawY = e.clientY / window.innerHeight;
      mouse.targetX = (rawX - 0.5) * 1.8;
      mouse.targetY = -(rawY - 0.5) * 1.8;
    };

    window.addEventListener('mousemove', handleWindowMouseMove);
    container.addEventListener('mousemove', handleMouseMove);

    // Touch support for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        const rawX = (touch.clientX - rect.left) / rect.width;
        const rawY = (touch.clientY - rect.top) / rect.height;
        mouse.targetX = (rawX - 0.5) * 2;
        mouse.targetY = -(rawY - 0.5) * 2;
      }
    };
    container.addEventListener('touchmove', handleTouchMove, { passive: true });

    // --- E. RESIZE OBSERVER ---
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;

      const newAspect = w / h;
      camera.aspect = newAspect;
      if (newAspect < 0.65) {
        mainGroup.scale.setScalar(0.72);
        camera.position.z = 7.8;
      } else if (newAspect < 1.0) {
        mainGroup.scale.setScalar(0.85);
        camera.position.z = 7.2;
      } else {
        mainGroup.scale.setScalar(1.0);
        camera.position.z = 6.6;
      }
      camera.updateProjectionMatrix();
      if (renderer) renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // --- F. ANIMATION LOOP ---
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();

      // Smooth mouse interpolation (spring lerp)
      mouse.x += (mouse.targetX - mouse.x) * 0.055;
      mouse.y += (mouse.targetY - mouse.y) * 0.055;

      // 1. Dynamic Mouse Tracking: Rotate entire assembly toward pointer
      mainGroup.rotation.y = elapsed * 0.12 + mouse.x * 0.85;
      mainGroup.rotation.x = mouse.y * 0.65;

      // 2. Dynamic light follows mouse for real-time glistening reflections
      mouseLight.position.x = mouse.x * 5;
      mouseLight.position.y = mouse.y * 5;
      mouseLight.position.z = 4 + Math.sin(elapsed * 2) * 0.5;

      // 3. Independent Gyroscopic Ring Rotations ("The Known Axes")
      ring1.rotation.z = elapsed * 0.45;
      ring1.rotation.x = Math.sin(elapsed * 0.3) * 0.25;

      ring2.rotation.y = -elapsed * 0.35;
      ring2.rotation.z = Math.cos(elapsed * 0.25) * 0.3;

      ring3.rotation.x = elapsed * 0.25;
      ring3.rotation.y = elapsed * 0.3;

      // 4. Satellite Beacons orbiting along their torus perimeters
      beacon1.position.x = Math.cos(elapsed * 1.8) * 1.6;
      beacon1.position.y = Math.sin(elapsed * 1.8) * 1.6;

      beacon2.position.x = Math.cos(-elapsed * 1.4) * 2.05;
      beacon2.position.z = Math.sin(-elapsed * 1.4) * 2.05;

      beacon3.position.y = Math.cos(elapsed * 1.1) * 2.45;
      beacon3.position.z = Math.sin(elapsed * 1.1) * 2.45;

      // 5. Core Animations: Faceted crystal counter-rotation & pulsing breathing
      coreGroup.rotation.y = -elapsed * 0.25;
      coreGroup.rotation.x = Math.sin(elapsed * 0.4) * 0.15;
      const breath = 1 + Math.sin(elapsed * 2.2) * 0.04;
      coreGroup.scale.set(breath, breath, breath);

      innerMesh.rotation.y = elapsed * 0.8;
      innerMesh.rotation.z = elapsed * 0.6;

      // 6. Particle cloud gentle swirl
      particles.rotation.y = elapsed * 0.06;
      particles.rotation.x = Math.sin(elapsed * 0.04) * 0.05;

      // 7. Organic floating vertical wave
      mainGroup.position.y = Math.sin(elapsed * 1.4) * 0.12;

      if (renderer && scene) {
        renderer.render(scene, camera);
      }
    };

    // 8. Safe context loss handling
    const handleContextLost = (e: Event) => {
      e.preventDefault();
      cancelAnimationFrame(animationFrameId);
      setUseFallback(true);
    };
    canvas.addEventListener('webglcontextlost', handleContextLost, false);

    animate();

    // --- G. CLEANUP ---
    return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('mousemove', handleWindowMouseMove);
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('touchmove', handleTouchMove);
        canvas.removeEventListener('webglcontextlost', handleContextLost);
        resizeObserver.disconnect();

        // Deep resource disposal
        if (scene) {
          scene.traverse((object) => {
            if ((object as THREE.Mesh).isMesh) {
              const mesh = object as THREE.Mesh;
              mesh.geometry?.dispose();
              if (mesh.material) {
                if (Array.isArray(mesh.material)) {
                  mesh.material.forEach((mat) => mat.dispose());
                } else {
                  mesh.material.dispose();
                }
              }
            }
          });
        }

        particleGeometry.dispose();
        particleMaterial.dispose();
        particleTexture.dispose();
        renderer?.dispose();
      };
    } catch (err) {
      console.warn('WebGL initialization failed, falling back to CSS 3D art:', err);
      setUseFallback(true);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 h-full w-full overflow-hidden"
    >
      {/* Dynamic Background Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-brand/20 blur-[130px] md:h-[700px] md:w-[700px]" />
        <div className="absolute h-[350px] w-[350px] rounded-full bg-[#00f5ff]/15 blur-[100px]" />
        <div className="absolute h-[280px] w-[280px] rounded-full bg-[#a855f7]/15 blur-[100px]" />
      </div>

      {useFallback ? (
        /* Pure CSS Gyroscopic Visual Fallback for devices without GPU / WebGL */
        <div className="relative flex h-full w-full items-center justify-center pointer-events-none" style={{ perspective: 1000 }}>
          <div className="relative flex h-64 w-64 sm:h-80 sm:w-80 items-center justify-center">
            {/* Outer Orbital Ring */}
            <div
              className="absolute inset-0 rounded-full border-2 border-indigo-500/30 shadow-[0_0_25px_rgba(99,102,241,0.25)]"
              style={{
                transform: 'rotateX(60deg) rotateY(20deg)',
                animation: 'spin 18s linear infinite',
              }}
            />
            {/* Middle Orbital Ring */}
            <div
              className="absolute inset-4 rounded-full border-2 border-cyan-400/40 shadow-[0_0_20px_rgba(0,245,255,0.3)]"
              style={{
                transform: 'rotateX(40deg) rotateY(70deg)',
                animation: 'spin 12s linear infinite reverse',
              }}
            />
            {/* Inner Orbital Ring */}
            <div
              className="absolute inset-8 rounded-full border-2 border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.3)]"
              style={{
                transform: 'rotateX(75deg) rotateY(-30deg)',
                animation: 'spin 8s linear infinite',
              }}
            />
            {/* Central Glowing Core Jewel */}
            <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-tr from-brand via-cyan-400 to-purple-500 p-[2px] shadow-2xl shadow-brand/40 animate-pulse">
              <div className="flex h-full w-full items-center justify-center rounded-3xl bg-[#0b0c10]/80 backdrop-blur-md">
                <div className="h-6 w-6 rotate-45 rounded-lg bg-gradient-to-tr from-brand to-cyan-300 shadow-lg shadow-cyan-400/50" />
              </div>
            </div>
            {/* Orbiting Satellite Light Beacons */}
            <div
              className="absolute h-full w-full"
              style={{ animation: 'spin 10s linear infinite' }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#00f5ff]" />
            </div>
          </div>
        </div>
      ) : (
        /* WebGL Three.js Interactive Canvas */
        <canvas
          ref={canvasRef}
          className="h-full w-full cursor-pointer"
          style={{ touchAction: 'pan-y' }}
        />
      )}
    </div>
  );
}
