import { Navigate } from 'react-router-dom'
import Loader from '../components/Shared/Loader'
import useUserRole from '../Hooks/useUserRole'

const AdminRoute = ({ children }) => {
  const [role, isLoading] = useUserRole()

  if (isLoading) return <Loader />
  if (role === 'Admin') return children
  return <Navigate to='/dashboard' />
}

export default AdminRoute