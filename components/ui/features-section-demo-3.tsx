import createGlobe from "cobe";

import { useEffect, useRef } from "react";

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,

      width: 400 * 2,

      height: 400 * 2,

      phi: 0,

      theta: 0,

      dark: 1,

      diffuse: 1.2,

      mapSamples: 16000,

      mapBrightness: 10,

      baseColor: [0.2, 0.4, 0.8],

      markerColor: [0.3, 0.5, 1],

      glowColor: [1, 1, 1],

      markers: [
        // longitude latitude
        { location: [78.9629, 20.5937], size: 0.1 }, // India
      ],

      onRender: (state) => {
        // Called on every animation frame.

        // `state` will be an empty object, return updated params.

        state.phi = phi;

        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 400, height: 400, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
