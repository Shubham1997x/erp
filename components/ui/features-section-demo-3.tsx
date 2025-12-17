import createGlobe from "cobe";

import { useEffect, useRef, useState } from "react";

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let phi = 0;
    let globe: ReturnType<typeof createGlobe> | null = null;

    if (!canvasRef.current) return;

    try {
      globe = createGlobe(canvasRef.current, {
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
    } catch (error) {
      console.error("Error initializing globe:", error);
      setHasError(true);
    }

    return () => {
      try {
        if (globe) {
          globe.destroy();
        }
      } catch (error) {
        console.error("Error destroying globe:", error);
      }
    };
  }, []);

  if (hasError) {
    return (
      <div
        style={{ width: 400, height: 400, maxWidth: "100%", aspectRatio: 1 }}
        className={`flex items-center justify-center bg-muted/50 rounded-lg ${className || ""}`}
      >
        <div className="text-center text-muted-foreground text-sm">
          <p>Globe unavailable</p>
        </div>
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 400, height: 400, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
