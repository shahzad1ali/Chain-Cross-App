"use client"
import { useEffect, useRef } from "react"
import type React from "react"

interface DottedBackgroundProps {
  children?: React.ReactNode
  className?: string
  height?: string
}

export default function DottedBackground({ children, className = "", height = "200px" }: DottedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect()
      if (rect) {
        canvas.width = rect.width
        canvas.height = rect.height
      }
      drawDots()
    }

    const drawDots = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Set background color to match the image
      ctx.fillStyle = "#2D1B69"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw white dots
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
      const dotSize = 2
      const spacing = 40

      // Create a grid of dots with some randomness
      for (let x = spacing; x < canvas.width; x += spacing) {
        for (let y = spacing; y < canvas.height; y += spacing) {
          // Add some randomness to dot positions
          const offsetX = (Math.random() - 0.5) * 20
          const offsetY = (Math.random() - 0.5) * 20

          // Randomly skip some dots for more natural look
          if (Math.random() > 0.15) {
            ctx.beginPath()
            ctx.arc(x + offsetX, y + offsetY, dotSize, 0, Math.PI * 2)
            ctx.fill()
          }
        }
      }
    }

    // Initial setup
    resizeCanvas()

    // Handle window resize
    const handleResize = () => {
      setTimeout(resizeCanvas, 100)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className={`relative w-full ${className}`} style={{ height }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="relative z-10 h-full flex items-center justify-center">{children}</div>
    </div>
  )
}
