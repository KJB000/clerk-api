import { auth, currentUser } from '@clerk/nextjs/server'

export default async function Dashboard() {
  // auth()에서 데이터를 가져오는 부분 수정
  const { userId } = await auth()
  const user = await currentUser()

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Dashboard </h1>
      <p className="mb-5">
        Welcome to the dashboard. 사용자를 위한 페이지입니다.
      </p>

      {userId && (
        <div>
          <p>UserID: {userId}</p>
          <p>Name: {user?.fullName}</p>
          <p>Username: {user?.username}</p>
          <p>Email: {user?.primaryEmailAddress?.emailAddress}</p>
        </div>
      )}
    </div>
  )
}
