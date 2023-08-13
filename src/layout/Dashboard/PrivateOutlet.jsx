import { Navigate, Outlet,Route } from "react-router-dom";

const PrivateLayout=()=>{
    let userName=true;
    return userName?<Outlet />:<Navigate to="/dashboard/login" replace />
}
export default PrivateLayout;