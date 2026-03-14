"use client";
import React, { useEffect, useState } from "react";

const symbols = ["₹", "Dr", "Cr", "A/c", "P&L", "B/S", "GST", "ROI", "📈", "📊"];

interface SymbolItem {
  id: number;
  char: string;
  left: number;
  delay: number;
  duration: number;
  size: number;
  driftX: number;
  rotation: number;
  opacity: number;
}

export default function CommerceBackground() {
  const [items, setItems] = useState<SymbolItem[]>([]);

  useEffect(() => {
    // Increased to 35 items for a richer background
    const newItems = Array.from({ length: 35 }).map((_, i) => {
      // 1. Calculate Size (between 12px and 48px)
      const size = 12 + Math.random() * 36; 
      
      // 2. Determine Depth (0.0 to 1.0 based on size)
      // Larger size = closer to 1.0 = closer to the camera
      const depthFactor = size / 48; 

      return {
        id: i,
        char: symbols[Math.floor(Math.random() * symbols.length)],
        left: Math.random() * 100, // Start anywhere on X axis (0-100%)
        
        // NEGATIVE delay means the animation is already in progress when the page loads
        delay: Math.random() * -40, 
        
        // Closer (larger) items move faster (20s). Further (smaller) move slower (up to 55s)
        duration: 20 + (1 - depthFactor) * 35, 
        size: size,
        
        // Randomly drift left or right by up to 30vw
        driftX: (Math.random() - 0.5) * 60, 
        
        // Randomly spin up to 180 degrees in either direction
        rotation: (Math.random() - 0.5) * 360, 
        
        // Closer items are slightly more opaque, further items fade into the background
        opacity: 0.02 + (depthFactor * 0.08), 
      };
    });
    setItems(newItems);
  }, []);

  return (
    <div className="bg-container">
      {items.map((item) => (
        <span
          key={item.id}
          className="floating-symbol"
          style={{
            left: `${item.left}%`,
            fontSize: `${item.size}px`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
            // Passing our custom calculated values to CSS via CSS Variables
            "--drift-x": `${item.driftX}vw`,
            "--rotation": `${item.rotation}deg`,
            "--max-opacity": item.opacity,
          } as React.CSSProperties} // Cast required to allow CSS variables in TS
        >
          {item.char}
        </span>
      ))}
    </div>
  );
}