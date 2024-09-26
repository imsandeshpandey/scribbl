import * as React from 'react'

import { cn } from '@/utils/cn'

export type TextareaProps = React.ComponentProps<'textarea'>

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'flex h-20 w-full rounded-md border border-foreground bg-background px-3 py-2 text-sm text-foreground shadow-3d-active ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:-translate-x-[2px] focus:-translate-y-[2px] focus:shadow-3d focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = 'Textarea'

export { Textarea }
