import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children, isLoggedIn }) {
  if (!isLoggedIn) {
    return <Navigate to="/prediction/login" replace />
  }

  return children
}

export default ProtectedRoute
