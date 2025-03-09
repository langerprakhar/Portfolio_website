"use client"

import { useEffect, useState } from "react"

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX - 100, // Center the glow (200px width / 2)
        y: e.clientY - 100, // Center the glow (200px height / 2)
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      className="cursor-glow"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  )
}

