import Laugh from './laugh'
import Peace from './peace'
import Smile from './smile'

export enum MouthStyle {
  LAUGH = 'laugh',
  SMILE = 'smile',
  PEACE = 'peace'
}
export const MOUTH_STYLE_TO_LABEL = {
  [MouthStyle.LAUGH]: 'Laugh',
  [MouthStyle.SMILE]: 'Smile',
  [MouthStyle.PEACE]: 'Peace'
}

export default function mouth(props: { variant: string }) {
  switch (props.variant) {
    case 'laugh':
      return <Laugh />
    case 'smile':
      return <Smile />
    case 'peace':
    default:
      return <Peace />
  }
}
