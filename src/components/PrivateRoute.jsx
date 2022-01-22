
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({children}) => {
    const token = ""
  if(!token){
      return <Navigate to={"/login"} />
  }
  return children
};
