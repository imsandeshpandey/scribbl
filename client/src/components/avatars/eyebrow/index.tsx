import Up from './up'
import UpWoman from './upWoman'

const STYLE_TO_COMPONENT = {
  up: Up,
  upWoman: UpWoman
}

export enum EyebrowStyle {
  UP = 'up',
  UP_WOMAN = 'upWoman'
}

export const EYEBROW_STYLE_TO_LABEL = {
  [EyebrowStyle.UP]: 'Up',
  [EyebrowStyle.UP_WOMAN]: 'Up Woman'
}

type EyebrowProps = {
  variant: EyebrowStyle
}

export default function Eyebrow(props: EyebrowProps) {
  const Comp = STYLE_TO_COMPONENT[props.variant]
  return <Comp />
}
