/*
 This code belongs to the creator of the amazing library
 "react-nice-avatar". I just made a small change to the code to make it
 work with my project.
 
GitHub: https://github.com/dapi-labs/react-nice-avatar
NPM: https://www.npmjs.com/package/react-nice-avatar
 */

import { AVATAR_OPTIONS, AvatarConfig, AvatarOptions } from './config';

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

export const pickFromOptions = <T>(data: T[]) => {
  const randomIdx = Math.floor(Math.random() * data.length)
  return data[randomIdx]
}

export const genConfig = (userConfig: string | Partial<AvatarConfig> = {}): Required<AvatarConfig> => {
  const isSeedConfig = typeof userConfig === 'string'
  const hashCode = (isSeedConfig && stringToHashCode(userConfig)) || 0

  const pick = <K extends keyof AvatarOptions>(key: K): AvatarOptions[K][number] => {
    if (isSeedConfig) return pickByHashCode(hashCode, key)
    const userVal = userConfig[key]
    if (userVal) return userVal
    return pickFromOptions(AVATAR_OPTIONS[key])
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

const CONFIG_ORDER: (keyof AvatarConfig)[] = [
  'earSize',
  'headStyle',
  'eyeBrowStyle',
  'eyeStyle',
  'glassesStyle',
  'noseStyle',
  'mouthStyle',
  'shirtStyle',
  'shirtColor',
  'faceColor',
  'headColor'
]

export function configToHash(config: AvatarConfig) {
  const valArr = []
  for (const key in config) {
    type Key = keyof AvatarConfig
    const keyIdx = CONFIG_ORDER.indexOf(key as Key)
    const idx = AVATAR_OPTIONS[key as Key].findIndex((val) => val === config[key as Key])
    valArr[keyIdx] = idx
  }
  const hash = valArr.map((v, i) => String.fromCharCode((Number(v) + 30) * (i + 1))).join('')
  return hash
}

export function hashToConfig(hash: string) {
  const hashArr = hash
    .split('') // Split the hash into individual characters
    .map((char, i) => {
      const charCode = char.charCodeAt(0) // Get the character code
      const originalVal = charCode / (i + 1) - 30 // Reverse the operations
      return originalVal
    })
  const config = {} as AvatarConfig

  for (const i in hashArr) {
    const key = CONFIG_ORDER[i]
    const val = hashArr[i]
    // @ts-expect-error FIXME: Argument of type 'string' is not assignable to parameter of type 'never'.
    config[key] = AVATAR_OPTIONS[key][Number(val)]
  }

  return config
}
