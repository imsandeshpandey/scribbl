import Hoody from './hoody'
import Polo from './polo'
import Short from './short'

export enum ShirtStyle {
  HOODY = 'hoody',
  POLO = 'polo',
  SHORT = 'short'
}
export const SHIRT_STYLE_TO_LABEL = {
  [ShirtStyle.HOODY]: 'Hoody',
  [ShirtStyle.POLO]: 'Polo',
  [ShirtStyle.SHORT]: 'Short'
}
const STYLE_TO_COMPONENT = {
  hoody: Hoody,
  polo: Polo,
  short: Short
}

type ShirtProps = {
  variant: ShirtStyle
  color: string
}

export default function shirt(props: ShirtProps) {
  const Comp = STYLE_TO_COMPONENT[props.variant]
  return <Comp color={props.color} />
}
