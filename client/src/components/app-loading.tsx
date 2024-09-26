import { motion } from 'framer-motion'

import logo from '@/assets/logo.png'

import { Loader } from './loader'

export function AppLoading() {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -400 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: -400 }}
      className='fixed inset-0 grid place-items-center'
    >
      <div className='rounded-lg px-3 py-2'>
        <span className='font-heading flex items-center gap-2'>
          <Loader className='h-16' />

          <img src={logo} alt='scribbl' className='h-14' />
        </span>
      </div>
    </motion.div>
  )
}
