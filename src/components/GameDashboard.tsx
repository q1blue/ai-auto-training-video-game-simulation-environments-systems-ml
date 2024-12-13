import React from 'react';
import { AdvancedGameIntegration } from './AdvancedGameIntegration';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function GameDashboard() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold">The Alchemist's Transformational Journey</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AdvancedGameIntegration />
        
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <button className="p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
              Create New Realm
            </button>
            <button className="p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
              Manage NPCs
            </button>
            <button className="p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
              Edit Quest Lines
            </button>
            <button className="p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
              View Analytics
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}