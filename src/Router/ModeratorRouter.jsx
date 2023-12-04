import { Navigate } from 'react-router-dom'
import useUserRole from '../Hooks/useUserRole'
import Loader from '../Components/Shared/Loader'

const ModeratorRouter = ({ children }) => {
  const [role, isLoading] = useUserRole()

  if (isLoading) return <Loader />
  if (role === 'Moderator') return children
  return <Navigate to='/dashboard' />
}

export default ModeratorRouter