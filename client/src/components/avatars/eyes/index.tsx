import Circle from './circle'
import Oval from './oval'
import Smile from './smile'

export enum EyesStyle {
  CIRCLE = 'circle',
  OVAL = 'oval',
  SMILE = 'smile'
}

export const EYES_STYLE_TO_LABEL = {
  [EyesStyle.CIRCLE]: 'Circle',
  [EyesStyle.OVAL]: 'Oval',
  [EyesStyle.SMILE]: 'Smile'
}

const STYLE_TO_COMPONENT = {
  [EyesStyle.CIRCLE]: Circle,
  [EyesStyle.OVAL]: Oval,
  [EyesStyle.SMILE]: Smile
}

type EyesProps = {
  variant: EyesStyle
}

export default function Eyes(props: EyesProps) {
  const Comp = STYLE_TO_COMPONENT[props.variant]
  return <Comp />
}
