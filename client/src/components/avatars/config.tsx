import { z } from 'zod';

import { EarStyle } from './ear';
import { EyebrowStyle } from './eyebrow';
import { EyesStyle } from './eyes';
import { FaceColor } from './face';
import { GlassesStyle } from './glasses';
import { HeadColor, HeadStyle } from './head';
import { MouthStyle } from './mouth';
import { NoseStyle } from './nose';
import { ShirtColor, ShirtStyle } from './shirt';

export const avatarConfigSchema = z.object({
  earSize: z.nativeEnum(EarStyle).default(EarStyle.SMALL),
  headStyle: z.nativeEnum(HeadStyle).default(HeadStyle.NORMAL),
  eyeBrowStyle: z.nativeEnum(EyebrowStyle).default(EyebrowStyle.UP),
  eyeStyle: z.nativeEnum(EyesStyle).default(EyesStyle.CIRCLE),
  glassesStyle: z.nativeEnum(GlassesStyle).default(GlassesStyle.NONE),
  noseStyle: z.nativeEnum(NoseStyle).default(NoseStyle.SHORT),
  mouthStyle: z.nativeEnum(MouthStyle).default(MouthStyle.PEACE),
  shirtStyle: z.nativeEnum(ShirtStyle).default(ShirtStyle.POLO),
  faceColor: z.nativeEnum(FaceColor).default(FaceColor.LIGHT),
  headColor: z.nativeEnum(HeadColor).default(HeadColor.WHITE),
  shirtColor: z.nativeEnum(ShirtColor).default(ShirtColor.RED)
})

export type AvatarConfig = {
  earSize: EarStyle
  headStyle: HeadStyle
  eyeBrowStyle: EyebrowStyle
  eyeStyle: EyesStyle
  glassesStyle: GlassesStyle
  noseStyle: NoseStyle
  mouthStyle: MouthStyle
  shirtStyle: ShirtStyle
  shirtColor: ShirtColor
  faceColor: FaceColor
  headColor: HeadColor
}

export type AvatarOptions = {
  [K in keyof AvatarConfig]: AvatarConfig[K][]
}
export const AVATAR_OPTIONS: AvatarOptions = {
  faceColor: Object.values(FaceColor),
  headColor: Object.values(HeadColor),
  earSize: Object.values(EarStyle),
  headStyle: Object.values(HeadStyle),
  eyeBrowStyle: Object.values(EyebrowStyle),
  eyeStyle: Object.values(EyesStyle),
  glassesStyle: Object.values(GlassesStyle),
  noseStyle: Object.values(NoseStyle),
  mouthStyle: Object.values(MouthStyle),
  shirtStyle: Object.values(ShirtStyle),
  shirtColor: Object.values(ShirtColor)
}
