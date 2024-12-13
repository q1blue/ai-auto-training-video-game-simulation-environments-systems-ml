# Physics Engine Demo

A modular physics engine implementation with 3D visualization.

## Project Structure

```
src/
├── engine/
│   ├── math/
│   │   ├── Matrix.ts       # Matrix operations
│   │   └── Vector3.ts      # 3D vector operations
│   └── physics/
│       ├── RigidBody.ts    # Physical body implementation
│       └── World.ts        # Physics world simulation
├── visualization/
│   └── Renderer.ts         # Three.js visualization
└── main.ts                 # Application entry point
```

## Features

- Matrix and Vector mathematics
- Rigid body physics simulation
- 3D visualization using Three.js
- Performance monitoring with Stats.js
- TypeScript for type safety
- Modular architecture

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

The demo shows a basic physics simulation with a sphere affected by gravity. The visualization includes:
- Real-time 3D rendering
- Performance statistics
- Physics-based movement

## Development

- Use `npm run dev` for development
- Use `npm run build` for production build
- Use `npm run test` for testing

## Best Practices

This project follows these coding best practices:
- Modular file structure
- Single responsibility principle
- Clear separation of concerns
- Type safety with TypeScript
- Comprehensive documentation
- Reusable components
- Clean and maintainable code