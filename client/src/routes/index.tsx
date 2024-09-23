import { AvatarCreator } from '@/components/avatar-creator'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomeComponent
})

function HomeComponent() {
  return (
    <div className='grid place-items-center p-2'>
      <AvatarCreator />
    </div>
  )
}
