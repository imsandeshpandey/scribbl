import * as React from 'react'

import { cn } from '@/utils/cn'
import * as SliderPrimitive from '@radix-ui/react-slider'

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn('group relative flex w-full cursor-pointer touch-none select-none items-center', className)}
    {...props}
  >
    <SliderPrimitive.Track className='relative h-1 w-full grow overflow-hidden rounded-full bg-foreground/10'>
      <SliderPrimitive.Range className='absolute h-full rounded-full border border-foreground bg-primary' />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className='block h-4 w-4 scale-0 rounded-full border-2 border-foreground bg-primary shadow-3d-active ring-offset-background transition-transform focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 group-hover:scale-100' />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
