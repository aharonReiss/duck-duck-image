import React, { ReactNode, useEffect } from "react";
import  authService  from '../../services/AuthService';
import { useNavigate } from "react-router-dom";

interface Props {
    children?: ReactNode
    // any other props that come into the component, you don't have to explicitly define children.
    }
    
const  PrivateRoute:React.FC<Props> = ({ children, }) => {
    const navigate = useNavigate();
    useEffect(() => {
        if(!authService.isLoggedIn()){
            navigate('/login')
        }
    },[])
    
    if(authService.isLoggedIn()){
        return children;
    }
}
export default PrivateRoute;