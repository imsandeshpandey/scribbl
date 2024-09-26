import { EarBig } from './big'
import { EarSmall } from './small'

const SIZE_TO_COMPONENT = {
  small: EarSmall,
  big: EarBig
}
export enum EarStyle {
  SMALL = 'small',
  BIG = 'big'
}

export const EAR_STYLE_TO_LABEL = {
  [EarStyle.SMALL]: 'Small',
  [EarStyle.BIG]: 'Big'
}

type EarProps = {
  color: string
  variant: EarStyle
}

export default function Ear(props: EarProps) {
  const Comp = SIZE_TO_COMPONENT[props.variant]
  return <Comp color={props.color} />
}

export { EarBig, EarSmall }
