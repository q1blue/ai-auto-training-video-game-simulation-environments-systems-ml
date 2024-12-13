import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Trailer {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
}

const trailers: Trailer[] = [
  {
    id: '1',
    title: 'Crystal Caves Exploration',
    thumbnail: '/trailers/crystal-caves.jpg',
    duration: '2:15'
  },
  {
    id: '2',
    title: 'Quantum Realm Journey',
    thumbnail: '/trailers/quantum-realm.jpg',
    duration: '3:45'
  },
  {
    id: '3',
    title: 'Alchemist\'s Transformation',
    thumbnail: '/trailers/transformation.jpg',
    duration: '1:30'
  }
];

export function TrailerGallery() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Featured Trailers</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {trailers.map((trailer) => (
              <div 
                key={trailer.id}
                className="relative aspect-video rounded-lg overflow-hidden hover:scale-[1.02] transition-transform"
              >
                <img 
                  src={trailer.thumbnail} 
                  alt={trailer.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white font-medium">{trailer.title}</h3>
                  <p className="text-white/80 text-sm">{trailer.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}