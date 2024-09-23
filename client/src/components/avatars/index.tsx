/*
 This code belongs to the creator of the amazing library
 "react-nice-avatar". I just made a small change to the code to make it
 work with my project.
 
GitHub: https://github.com/dapi-labs/react-nice-avatar
NPM: https://www.npmjs.com/package/react-nice-avatar
 */

import { HTMLProps } from 'react'

import { cn } from '@/utils/cn'

import Ear, { EarStyle } from './ear'
import Eyebrow, { EyebrowStyle } from './eyebrow'
import Eye, { EyesStyle } from './eyes'
import Face from './face'
import Glasses, { GlassesStyle } from './glasses'
import Head, { HeadStyle } from './head'
import Mouth, { MouthStyle } from './mouth'
import Nose, { NoseStyle } from './nose'
import Shirt, { ShirtStyle } from './shirt'
import { genConfig } from './utils'

export interface AvatarConfig {
  faceColor?: string
  earSize?: EarStyle
  headColor?: string
  headStyle?: HeadStyle
  eyeBrowStyle?: EyebrowStyle
  hairColorRandom?: boolean
  hatColor?: string
  eyeStyle?: EyesStyle
  glassesStyle?: GlassesStyle
  noseStyle?: NoseStyle
  mouthStyle?: MouthStyle
  shirtStyle?: ShirtStyle
  shirtColor?: string
  bgColor?: string
  isGradient?: boolean
}

type AvatarProps = HTMLProps<HTMLDivElement> & AvatarConfig

export function Avatar(props: AvatarProps) {
  const config = genConfig(props)

  return (
    <div
      {...props}
      className={cn('overflow-hidden', props.className)}
      style={{
        background: config.bgColor,
        ...props.style
      }}
    >
      <div className='relative h-full w-full'>
        <div className='absolute bottom-0 h-[90%] w-full'>
          <Face color={config.faceColor} />
          <Head color={config.headColor} variant={config.headStyle} />

          {/* Face detail */}
          <div
            style={{
              position: 'absolute',
              right: '-3%',
              top: '30%',
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Eyebrow variant={config.eyeBrowStyle} />
            <Eye variant={config.eyeStyle} />
            <Glasses variant={config.glassesStyle} />
            <Ear color={config.faceColor} variant={config.earSize} />
            <Nose variant={config.noseStyle} />
            <Mouth variant={config.mouthStyle} />
          </div>

          <Shirt color={config.shirtColor} variant={config.shirtStyle} />
        </div>
      </div>
    </div>
  )
}

export { genConfig } from './utils'
