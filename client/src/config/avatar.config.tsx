import { EarBig, EarSmall } from '@/components/avatars/ear'

export const SEX = {
  man: 'Male',
  woman: 'Female'
}

export const EAR_SIZE = {
  small: (color: string) => <EarSmall color={color} />,
  big: (color: string) => <EarBig color={color} />
}

export const HAIR_STYLE = {
  normal: 'Normal',
  thick: 'Thick',
  mohawk: 'Mohawk',
  womanLong: 'Woman Long',
  womanShort: 'Woman Short'
}

export const HAIR_STYLE_MAN = {
  normal: 'Normal',
  thick: 'Thick',
  mohawk: 'Mohawk'
}

export const HAIR_STYLE_WOMAN = {
  normal: 'Normal',
  womanLong: 'Woman Long',
  womanShort: 'Woman Short'
}

export const HAT_STYLE = {
  beanie: 'Beanie',
  turban: 'Turban',
  none: 'None'
}

export const EYE_STYLE = {
  circle: 'Circle',
  oval: 'Oval',
  smile: 'Smile'
}

export const GLASSES_STYLE = {
  round: 'Round',
  square: 'Square',
  none: 'None'
}

export const NOSE_STYLE = {
  short: 'Short',
  long: 'Long',
  round: 'Round'
}

export const MOUTH_STYLE = {
  laugh: 'Laugh',
  smile: 'Smile',
  peace: 'Peace'
}

export const SHIRT_STYLE = {
  hoody: 'Hoody',
  short: 'Short',
  polo: 'Polo'
}

export const EYEBROW_STYLE = {
  up: 'Up',
  upWoman: 'Up Woman'
}

export const CHARACTER_STYLES = [
  {
    name: 'earSize',
    label: 'Ear Size',
    obj: EAR_SIZE,
    icon: ''
  },
  {
    name: 'hairStyle',
    label: 'Hair Style',
    obj: HAIR_STYLE,
    icon: ''
  },
  {
    name: 'hatStyle',
    label: 'Hat Style',
    obj: HAT_STYLE,
    icon: ''
  },
  {
    name: 'eyeStyle',
    label: 'Eye Style',
    obj: EYE_STYLE,
    icon: ''
  },
  {
    name: 'glassesStyle',
    label: 'Glasses Style',
    obj: GLASSES_STYLE,
    icon: ''
  },
  {
    name: 'noseStyle',
    label: 'Nose Style',
    obj: NOSE_STYLE,
    icon: ''
  },
  {
    name: 'mouthStyle',
    label: 'Mouth Style',
    obj: MOUTH_STYLE,
    icon: ''
  },
  {
    name: 'shirtStyle',
    label: 'Shirt Style',
    obj: SHIRT_STYLE,
    icon: ''
  },
  {
    name: 'eyeBrowStyle',
    label: 'Eye Brow Style',
    obj: EYEBROW_STYLE,
    icon: ''
  }
]
