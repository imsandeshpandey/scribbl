/*
 This code belongs to the creator of the amazing library
 "react-nice-avatar". I just made a small change to the code to make it
 work with my project.
 
GitHub: https://github.com/dapi-labs/react-nice-avatar
NPM: https://www.npmjs.com/package/react-nice-avatar
 */

import { AvatarConfig } from './'
import { EarStyle } from './ear'
import { EyebrowStyle } from './eyebrow'
import { EyesStyle } from './eyes'
import { GlassesStyle } from './glasses'
import { HeadStyle } from './head'
import { MouthStyle } from './mouth'
import { NoseStyle } from './nose'
import { ShirtStyle } from './shirt'

/**
 * Pick random one from the list
 */

export const pickRandomFromList = <T>(data: T[]): T => {
  const randomIdx = Math.floor(Math.random() * data.length)
  return data[randomIdx]
}

export const AVATAR_OPTIONS = {
  faceColor: ['#F9C9B6', '#AC6651'],
  earSize: Object.values(EarStyle),
  headColor: ['#000', '#fff', '#77311D', '#FC909F', '#D2EFF3', '#506AF4', '#F48150'],
  headStyle: Object.values(HeadStyle),
  hatColor: ['#000', '#fff', '#77311D', '#FC909F', '#D2EFF3', '#506AF4', '#F48150'],
  eyeBrowStyle: Object.values(EyebrowStyle),
  eyeStyle: Object.values(EyesStyle),
  glassesStyle: Object.values(GlassesStyle),
  noseStyle: Object.values(NoseStyle),
  mouthStyle: Object.values(MouthStyle),
  shirtStyle: Object.values(ShirtStyle),

  shirtColor: ['#9287FF', '#6BD9E9', '#FC909F', '#F4D150', '#77311D']
}
type AvatarOptions = typeof AVATAR_OPTIONS

const stringToHashCode = (str: string): number => {
  if (str.length === 0) return 0
  let hash = 0
  let char
  for (let i = 0; i < str.length; i++) {
    char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash |= 0 // Convert to 32bit integer
  }
  return Math.abs(hash)
}

const pickByHashCode = <K extends keyof AvatarOptions>(code: number, type: K): AvatarOptions[K][number] => {
  const index = code % AVATAR_OPTIONS[type].length
  return AVATAR_OPTIONS[type][index]
}

export const genConfig = (userConfig: string | Partial<AvatarConfig> = {}): Required<AvatarConfig> => {
  const isSeedConfig = typeof userConfig === 'string'
  const hashCode = (isSeedConfig && stringToHashCode(userConfig)) || 0

  const pick = <K extends keyof AvatarOptions>(key: K): AvatarOptions[K][number] => {
    return isSeedConfig ? pickByHashCode(hashCode, key) : userConfig[key] || pickRandomFromList(AVATAR_OPTIONS[key])
  }
  const res = {
    faceColor: pick('faceColor'),

    headStyle: pick('headStyle'),
    headColor: pick('headColor'),

    eyeBrowStyle: pick('eyeBrowStyle'),
    eyeStyle: pick('eyeStyle'),
    glassesStyle: pick('glassesStyle'),
    earSize: pick('earSize'),

    noseStyle: pick('noseStyle'),
    mouthStyle: pick('mouthStyle'),

    shirtStyle: pick('shirtStyle'),
    shirtColor: pick('shirtColor')
  }
  return res as Required<AvatarConfig>
}

export function configToHash(config: AvatarConfig) {
  const hashArr = []
  for (const key in config) {
    const idx = AVATAR_OPTIONS[key as keyof AvatarOptions].findIndex((val) => val === config[key as keyof AvatarConfig])
    hashArr.push(idx)
  }
  return hashArr.join('#')
}
