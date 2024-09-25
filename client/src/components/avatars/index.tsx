/*
 This code belongs to the creator of the amazing library
 "react-nice-avatar". I just made a small change to the code to make it
 work with my project.
 
GitHub: https://github.com/dapi-labs/react-nice-avatar
NPM: https://www.npmjs.com/package/react-nice-avatar
 */

import { HTMLProps } from 'react';

import { cn } from '@/utils/cn';

import { AvatarConfig } from './config';
import Ear from './ear';
import Eyebrow from './eyebrow';
import Eye from './eyes';
import Face from './face';
import Glasses from './glasses';
import Head from './head';
import Mouth from './mouth';
import Nose from './nose';
import Shirt from './shirt';
import { genConfig } from './utils';

type AvatarProps = HTMLProps<HTMLDivElement> & {
  config: Partial<AvatarConfig>
}

export function Avatar({ config, ...props }: AvatarProps) {
  const fullConfig = genConfig(config)
  return (
    <div {...props} className={cn('overflow-hidden', props.className)}>
      <div className='relative h-full w-full'>
        <div className='absolute bottom-0 h-[90%] w-full'>
          <Face color={fullConfig.faceColor} />
          <Head color={fullConfig.headColor} variant={fullConfig.headStyle} />
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
            <Eyebrow variant={fullConfig.eyeBrowStyle} />
            <Eye variant={fullConfig.eyeStyle} />
            <Glasses variant={fullConfig.glassesStyle} />
            <Ear color={fullConfig.faceColor} variant={fullConfig.earSize} />
            <Nose variant={fullConfig.noseStyle} />
            <Mouth variant={fullConfig.mouthStyle} />
          </div>

          <Shirt color={fullConfig.shirtColor} variant={fullConfig.shirtStyle} />
        </div>
      </div>
    </div>
  )
}

export { genConfig } from './utils'
