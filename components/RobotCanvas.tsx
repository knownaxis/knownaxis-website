'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default function RobotCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let animationFrameId: number;
    let mixer: THREE.AnimationMixer | null = null;
    const clock = new THREE.Clock();

    // 1. Scene setup
    const scene = new THREE.Scene();

    // 2. Camera setup
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 450;
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    camera.position.set(0, 0.5, 5);

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    // 4. Lighting setup (blends with brand aesthetic)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x7b8cff, 1.8);
    fillLight.position.set(-4, 2, -2);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0x00e5ff, 2.0, 15);
    rimLight.position.set(0, 3, -3);
    scene.add(rimLight);

    const bottomGlow = new THREE.PointLight(0x6366f1, 1.5, 10);
    bottomGlow.position.set(0, -3, 2);
    scene.add(bottomGlow);

    // 5. Controls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false; // allow page scrolling
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.2;
    controls.minPolarAngle = Math.PI / 3;
    controls.maxPolarAngle = Math.PI / 1.8;

    // 6. Model Loading
    const modelGroup = new THREE.Group();
    scene.add(modelGroup);

    const loader = new GLTFLoader();
    loader.load(
      '/robot.glb',
      (gltf) => {
        const model = gltf.scene;

        // Hide ground plane mesh if present so the robot floats freely
        model.traverse((child) => {
          if (
            child.name &&
            (child.name.toLowerCase().includes('suelo') ||
              child.name.toLowerCase().includes('ground') ||
              child.name.toLowerCase().includes('floor'))
          ) {
            child.visible = false;
          }
        });

        // Compute bounding box and center the model
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        model.position.set(-center.x, -center.y, -center.z);
        modelGroup.add(model);

        // Adjust camera position according to model bounds
        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = camera.fov * (Math.PI / 180);
        let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
        cameraZ *= 1.3; // framing cushion
        camera.position.set(0, 0.2, cameraZ);
        controls.target.set(0, 0, 0);
        controls.update();

        // Play embedded animation
        if (gltf.animations && gltf.animations.length > 0) {
          mixer = new THREE.AnimationMixer(model);
          const clip = gltf.animations[0];
          const action = mixer.clipAction(clip);
          action.play();
        }

        setLoading(false);
      },
      undefined,
      (error) => {
        console.error('Error loading 3D model:', error);
        setLoadError('Failed to load 3D model');
        setLoading(false);
      }
    );

    // 7. Resize handling
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      if (newWidth === 0 || newHeight === 0) return;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // 8. Animation loop
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Play GLTF animation
      if (mixer) {
        mixer.update(delta);
      }

      // Gentle floating bob
      modelGroup.position.y = Math.sin(elapsed * 1.6) * 0.08;

      // Update orbit controls
      controls.update();

      renderer.render(scene, camera);
    };

    animate();

    // 9. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      controls.dispose();

      // Dispose scene resources
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

      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex h-[460px] w-full items-center justify-center overflow-hidden md:h-[520px] lg:h-[560px]"
    >
      {/* Background glow matching theme */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-72 w-72 rounded-full bg-brand/30 blur-[90px] md:h-96 md:w-96" />
        <div className="absolute h-48 w-48 rounded-full bg-[#7b8cff]/20 blur-[80px]" />
      </div>

      {/* Loading state indicator */}
      {loading && !loadError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-brand border-t-transparent shadow-lg" />
          <span className="text-xs font-medium tracking-wider text-grey uppercase">
            Loading 3D Robot...
          </span>
        </div>
      )}

      {/* Error state fallback */}
      {loadError && (
        <div className="text-center text-sm text-grey">
          <p>{loadError}</p>
        </div>
      )}

      {/* Three.js Canvas */}
      <canvas
        ref={canvasRef}
        className={`h-full w-full cursor-grab active:cursor-grabbing transition-opacity duration-700 ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ touchAction: 'pan-y' }}
      />

      {/* Interactive hint badge */}
      {!loading && !loadError && (
        <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/40 px-3.5 py-1 backdrop-blur-md">
          <span className="flex items-center gap-1.5 text-[11px] font-medium tracking-wide text-white/70">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
            Drag to rotate · 3D Interactive
          </span>
        </div>
      )}
    </div>
  );
}
