import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Photo {
  id: string;
  title: string;
  src: string;
  description: string;
}

const photos: Photo[] = [
  {
    id: '1',
    title: 'Crystal Formation',
    src: '/screenshots/crystal-formation.jpg',
    description: 'Witness the magical process of crystal growth in real-time'
  },
  {
    id: '2',
    title: 'Ethereal Forest',
    src: '/screenshots/ethereal-forest.jpg',
    description: 'A mystical forest filled with bioluminescent flora'
  },
  {
    id: '3',
    title: 'Quantum Laboratory',
    src: '/screenshots/quantum-lab.jpg',
    description: 'Advanced alchemical research facility'
  }
];

export function PhotoGallery() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Screenshot Gallery</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          <div className="grid grid-cols-2 gap-4">
            {photos.map((photo) => (
              <div 
                key={photo.id}
                className="group relative rounded-lg overflow-hidden"
              >
                <img 
                  src={photo.src} 
                  alt={photo.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                  <h3 className="text-white font-medium">{photo.title}</h3>
                  <p className="text-white/80 text-sm">{photo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}