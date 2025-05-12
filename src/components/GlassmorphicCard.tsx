
import React from 'react';
import { cn } from "@/lib/utils";

interface GlassmorphicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  intensity?: 'light' | 'medium' | 'strong';
  hoverEffect?: boolean;
  animate?: boolean;
}

const GlassmorphicCard: React.FC<GlassmorphicCardProps> = ({
  className,
  children,
  intensity = 'medium',
  hoverEffect = true,
  animate = false,
  ...props
}) => {
  const intensityClasses = {
    light: 'bg-white/5 border-white/5',
    medium: 'bg-white/10 border-white/10',
    strong: 'bg-white/15 border-white/15',
  };

  return (
    <div
      className={cn(
        'rounded-xl backdrop-blur-md border shadow-lg',
        intensityClasses[intensity],
        hoverEffect && 'transition-all duration-300 hover:shadow-xl hover:border-white/20',
        animate && 'animate-float',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassmorphicCard;
