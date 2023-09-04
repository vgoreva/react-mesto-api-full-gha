import { Navigate } from 'react-router-dom';

function ProtectedRoute ({ element: Componеnt, loggedIn, ...props}) {


return (
    loggedIn ? 
    <Componеnt {...props} /> 
    : <Navigate to={'/signin'} replace/>
)
}

export default ProtectedRoute