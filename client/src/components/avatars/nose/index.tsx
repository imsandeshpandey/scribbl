import NoseLong from './long'
import NoseRound from './round'
import NoseShort from './short'

export enum NoseStyle {
  ROUND = 'round',
  SHORT = 'short',
  LONG = 'long'
}
export const NOSE_STYLE_TO_LABEL = {
  [NoseStyle.ROUND]: 'Round',
  [NoseStyle.SHORT]: 'Short',
  [NoseStyle.LONG]: 'Long'
}

const STYLE_TO_COMPONENT = {
  round: NoseRound,
  short: NoseShort,
  long: NoseLong
}

type NoseProps = {
  variant: NoseStyle
}

export default function Nose({ variant }: NoseProps) {
  const Comp = STYLE_TO_COMPONENT[variant]
  return <Comp />
}
