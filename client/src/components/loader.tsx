import { ComponentProps } from 'react'
import ReactLottiePlayer from 'react-lottie-player'

import loading from '@/assets/lotties/loading.json'

export function Loader(props: ComponentProps<typeof ReactLottiePlayer>) {
  return <ReactLottiePlayer animationData={loading} play={true} {...props} />
}
