import { adjectives, nouns } from '@/config/name.config'

/**
 *
 * @returns A random name with a random number appended to it
 */
export function genRandomName() {
  const numbers = Math.floor(Math.random() * 99)
    .toString()
    .padStart(2, '0')

  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)]
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)]

  return `${randomAdjective}${randomNoun}${numbers}`
}
