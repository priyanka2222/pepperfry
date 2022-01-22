
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({children}) => {
    const {user} = useSelector((state)=>({
        user : state.userState.user
    }))
  if(!user){
      return <Navigate to={"/login"} />
  }
  return children
};
