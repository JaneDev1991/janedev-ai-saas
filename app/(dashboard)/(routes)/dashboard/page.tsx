import { UserButton } from "@clerk/nextjs"

const DashboardPage = () => {
  return (
    <div>
      <div>DashboardPage (Protected)</div>
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}

export default DashboardPage