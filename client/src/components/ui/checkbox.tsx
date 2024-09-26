import { Check } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/utils/cn'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'data-[state=checked]:x-[shadow-none,text-primary-foreground,bg-primary]',
      'peer h-4 w-4 shrink-0 rounded-sm border border-foreground ring-offset-background focus-visible:x-[outline-none,ring-ring,ring-offset-2] disabled:cursor-not-allowed disabled:opacity-50',
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn('flex items-center justify-center text-current')}>
      <Check className='h-3.5 w-3.5 animate-in zoom-in-50' />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
