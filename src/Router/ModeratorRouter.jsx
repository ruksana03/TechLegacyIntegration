import { Navigate } from 'react-router-dom'
import Loader from '../components/Shared/Loader'
import useUserRole from '../Hooks/useUserRole'

const ModeratorRouter = ({ children }) => {
  const [role, isLoading] = useUserRole()

  if (isLoading) return <Loader />
  if (role === 'Moderator') return children
  return <Navigate to='/dashboard' />
}

export default ModeratorRouter