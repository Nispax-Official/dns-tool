"use client";
import { useEffect } from "react";

export default function Background() {
  useEffect(() => {
    const c = document.getElementById("bg") as HTMLCanvasElement;
    const ctx = c.getContext("2d")!;
    const resize = () => { c.width = innerWidth; c.height = innerHeight; };
    resize(); window.onresize = resize;

    const pts = Array.from({ length: 90 }, () => ({
      x: Math.random()*c.width,
      y: Math.random()*c.height,
      vx: (Math.random()-.5)*.3,
      vy: (Math.random()-.5)*.3
    }));

    function draw() {
      ctx.clearRect(0,0,c.width,c.height);
      pts.forEach(a=>{
        a.x+=a.vx; a.y+=a.vy;
        if(a.x<0||a.x>c.width) a.vx*=-1;
        if(a.y<0||a.y>c.height) a.vy*=-1;
        pts.forEach(b=>{
          const d=Math.hypot(a.x-b.x,a.y-b.y);
          if(d<120){
            ctx.strokeStyle=`rgba(168,85,247,${1-d/120})`;
            ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
          }
        });
        ctx.fillStyle="#a855f7";
        ctx.fillRect(a.x,a.y,2,2);
      });
      requestAnimationFrame(draw);
    }
    draw();
  }, []);

  return (
    <canvas
      id="bg"
      style={{ position: "fixed", inset: 0, zIndex: -1, opacity: 0.6 }}
    />
  );
}