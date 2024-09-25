import logo from '@/assets/logo.png'
import { AvatarCreator } from '@/components/avatar-creator'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomeComponent
})

function HomeComponent() {
  return (
    <div className='flex flex-col place-items-center items-center justify-center gap-4 p-2'>
      <img key='logo' src={logo} className='h-16' />
      <AvatarCreator />
    </div>
  )
}
