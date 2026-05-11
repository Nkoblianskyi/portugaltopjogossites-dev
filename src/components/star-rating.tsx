"use client"

import { Star } from "lucide-react"
import { useState } from "react"

interface StarRatingProps {
  rating: number // Rating from 0 to 5 (e.g., 4.6)
  size?: "xs" | "sm" | "md" | "lg"
  showHover?: boolean
  className?: string
}

export function StarRating({ rating, size = "md", showHover = false, className = "" }: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState<number | null>(null)

  const sizeClasses = {
    xs: "w-3.5 h-3.5",
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-8 h-8",
  }

  const roundedRating = Math.round(rating * 5) / 5
  const displayRating = hoverRating !== null ? hoverRating : roundedRating

  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {[1, 2, 3, 4, 5].map((starIndex) => {
        const fillPercentage = Math.min(Math.max((displayRating - (starIndex - 1)) * 100, 0), 100)

        return (
          <div
            key={starIndex}
            className="relative"
            onMouseEnter={() => showHover && setHoverRating(starIndex)}
            onMouseLeave={() => showHover && setHoverRating(null)}
          >
            {/* Empty star outline */}
            <Star className={`${sizeClasses[size]} fill-none`} style={{ color: "#D4AF37", stroke: "#D4AF37" }} />

            {/* Filled star with clip-path */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: `inset(0 ${100 - fillPercentage}% 0 0)`,
              }}
            >
              <Star className={`${sizeClasses[size]}`} style={{ color: "#D4AF37", fill: "#D4AF37" }} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
