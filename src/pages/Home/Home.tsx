import { InvitationForm } from '@/components/InvitationForm'
import { StatusTable } from '@/components/StatusTable'

function Home() {
  return (
    <div className="h-screen mx-10 flex flex-col items-center">
      <InvitationForm />
      <StatusTable />
    </div>
  )
}

export default Home
