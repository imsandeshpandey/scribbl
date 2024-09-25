import { AnimatePresence, motion } from 'framer-motion'
import { DicesIcon } from 'lucide-react'
import { useState } from 'react'

import { useApp } from '@/state/app.store'
import { genRandomName } from '@/utils/random-name-generator'

import { Avatar, genConfig } from './avatars'
import { Button } from './ui/button'
import { Input } from './ui/input'

export function AvatarCreator() {
  const { user } = useApp('user')
  const [name, setName] = useState(() => genRandomName())
  const [config, setConfig] = useState(user?.avatar || genConfig())

  const { registerUser } = useApp('registerUser')

  const handleSubmit = () => {
    registerUser(name, config)
  }

  return (
    <motion.div
      layout
      className='align-center flex h-full w-full max-w-[300px] flex-col gap-4 rounded-lg bg-background px-4 py-4 shadow-3d'
    >
      <div key='content' className='flex flex-col items-center justify-center gap-2'>
        <div className='relative'>
          <Button
            onClick={() => setConfig(genConfig())}
            size='icon'
            variant='ghost'
            className='absolute right-0 top-0 z-10 cursor-pointer rounded-full bg-background/40 text-foreground'
          >
            <DicesIcon />
          </Button>
          <Avatar className='h-40 w-40' config={config} />
        </div>
        <AnimatePresence initial={false} mode='popLayout'>
          {name && <motion.p className='text-lg font-bold'>{name}</motion.p>}
        </AnimatePresence>
      </div>
      <div className='flex h-full flex-col gap-2'>
        <div className='relative flex items-center justify-between gap-2'>
          <p className='text-sm font-bold'>Enter your name</p>
          <Button
            onClick={() => setName(genRandomName())}
            className='hover absolute right-0 top-1/2 h-fit -translate-y-1/2 rounded-full text-xs text-foreground'
            variant='ghost'
          >
            <DicesIcon className='h-4 w-4' />
          </Button>
        </div>
        <Input
          value={name}
          onChange={(e) => {
            let val = e.target.value
            if (val.length >= 32) val = val.slice(0, 32)
            setName(val)
          }}
          className='w-full'
          id='name'
          type='text'
          placeholder='Your Name'
        />
        <Button onClick={handleSubmit} variant='playful' className='mt-2 bg-emerald-500'>
          Start Playing
        </Button>
      </div>
    </motion.div>
  )
}
