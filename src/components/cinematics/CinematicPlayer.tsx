import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface CinematicPlayerProps {
  title: string;
  source: string;
  thumbnail: string;
}

export function CinematicPlayer({ title, source, thumbnail }: CinematicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div 
          className="relative aspect-video bg-cover bg-center rounded-lg overflow-hidden"
          style={{ backgroundImage: `url(${thumbnail})` }}
        >
          {!isPlaying && (
            <Button 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              onClick={() => setIsPlaying(true)}
            >
              Play
            </Button>
          )}
          {isPlaying && (
            <video 
              src={source}
              className="w-full h-full"
              autoPlay
              controls
              onTimeUpdate={(e) => setProgress((e.currentTarget.currentTime / e.currentTarget.duration) * 100)}
            />
          )}
        </div>
        <Progress value={progress} className="w-full" />
      </CardContent>
    </Card>
  );
}