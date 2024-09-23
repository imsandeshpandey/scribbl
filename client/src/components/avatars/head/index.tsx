import Beanie from './beanie'
import Mohawk from './mohawk'
import Normal from './normal'
import Thick from './thick'
import Turban from './turban'
import WomanLong from './womanLong'
import WomanShort from './womanShort'

export enum HeadStyle {
  MOHAWK = 'mohawk',
  NORMAL = 'normal',
  THICK = 'thick',
  WOMAN_LONG = 'womanLong',
  WOMAN_SHORT = 'womanShort',
  BEANIE = 'beanie',
  TURBAN = 'turban'
}
export const HAIR_STYLE_TO_LABEL = {
  [HeadStyle.MOHAWK]: 'Mohawk',
  [HeadStyle.NORMAL]: 'Normal',
  [HeadStyle.THICK]: 'Thick',
  [HeadStyle.WOMAN_LONG]: 'Woman Long',
  [HeadStyle.WOMAN_SHORT]: 'Woman Short'
}
const STYLE_TO_COMPONENT = {
  [HeadStyle.MOHAWK]: Mohawk,
  [HeadStyle.NORMAL]: Normal,
  [HeadStyle.THICK]: Thick,
  [HeadStyle.WOMAN_LONG]: WomanLong,
  [HeadStyle.WOMAN_SHORT]: WomanShort,
  [HeadStyle.BEANIE]: Beanie,
  [HeadStyle.TURBAN]: Turban
}

type HeadProps = {
  variant: HeadStyle
  color: string
}

export default function hair(props: HeadProps) {
  const { variant, color } = props
  const Comp = STYLE_TO_COMPONENT[variant]
  return <Comp color={color} />
}
