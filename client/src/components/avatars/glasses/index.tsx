import Round from './round'
import Square from './square'

export enum GlassesStyle {
  ROUND = 'round',
  SQUARE = 'square',
  NONE = 'none'
}
export const GLASSES_STYLE_TO_LABEL = {
  [GlassesStyle.ROUND]: 'Round',
  [GlassesStyle.SQUARE]: 'Square',
  [GlassesStyle.NONE]: 'None'
}

const STYLE_TO_COMPONENT = {
  round: Round,
  square: Square,
  none: null
}
type GlassesProps = {
  variant: GlassesStyle
}
export default function glasses(props: GlassesProps) {
  const { variant } = props
  const Comp = STYLE_TO_COMPONENT[variant]
  if (!Comp) return null
  return <Comp />
}
