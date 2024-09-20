import { AnimatePresence, motion } from 'framer-motion'
import { Eye } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/utils/cn'

import { Button } from './button'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'border-foreground text-foreground bg-background focus:shadow-3d shadow-3d-active ring-offset-background placeholder:text-muted-foreground flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:-translate-x-[2px] focus:-translate-y-[2px] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = 'Input'

export const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  const [passwordVisible, setPasswordVisible] = React.useState(false)
  return (
    <div className='relative'>
      <Input
        type={passwordVisible ? 'text' : 'password'}
        className={cn(
          'border-foreground bg-background focus:shadow-3d shadow-3d-active ring-offset-background placeholder:text-muted-foreground flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:-translate-x-[2px] focus:-translate-y-[2px] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
      <ShowPasswordButton
        type='button'
        className='text-foreground absolute right-0 top-1/2 -translate-y-1/2'
        passwordVisible={passwordVisible}
        onValueChange={setPasswordVisible}
      />
    </div>
  )
})

type ShowPasswordButtonProps = React.ComponentProps<typeof Button> & {
  passwordVisible: boolean
  onValueChange: (passwordVisible: boolean) => void
}

function ShowPasswordButton({ passwordVisible, onValueChange, ...props }: ShowPasswordButtonProps) {
  return (
    <Button
      {...props}
      className={cn('hover:bg-transparent', props.className)}
      variant='ghost'
      onClick={() => onValueChange(!passwordVisible)}
    >
      <div className='relative'>
        <AnimatePresence>
          <Eye key='eye' className='h-5 w-5' />
          {!passwordVisible && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='absolute top-0 h-5 w-5'
            >
              <motion.path
                d='m2 2 20 20'
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                exit={{ pathLength: 0 }}
                transition={{
                  duration: 0.1
                }}
              />
            </svg>
          )}
        </AnimatePresence>
      </div>
    </Button>
  )
}

export { Input }
