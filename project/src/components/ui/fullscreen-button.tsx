import { Maximize2, Minimize2 } from 'lucide-react';
import { Button } from './button';
import { useState, useCallback } from 'react';

interface FullscreenButtonProps {
  elementId: string;
}

export function FullscreenButton({ elementId }: FullscreenButtonProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = useCallback(() => {
    const element = document.getElementById(elementId);
    if (!element) return;

    if (!isFullscreen) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  }, [elementId, isFullscreen]);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleFullscreen}
      className="absolute top-4 right-4 z-10"
    >
      {isFullscreen ? (
        <Minimize2 className="h-4 w-4" />
      ) : (
        <Maximize2 className="h-4 w-4" />
      )}
    </Button>
  );
}