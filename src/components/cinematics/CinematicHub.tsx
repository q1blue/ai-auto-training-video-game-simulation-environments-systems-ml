import React from 'react';
import { CinematicPlayer } from './CinematicPlayer';
import { TrailerGallery } from './TrailerGallery';
import { PhotoGallery } from './PhotoGallery';

export function CinematicHub() {
  return (
    <div className="space-y-6">
      <CinematicPlayer 
        title="The Alchemist's Journey - Official Trailer"
        source="/trailers/main-trailer.mp4"
        thumbnail="/trailers/main-thumbnail.jpg"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TrailerGallery />
        <PhotoGallery />
      </div>
    </div>
  );
}