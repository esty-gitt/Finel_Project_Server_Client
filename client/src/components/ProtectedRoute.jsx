import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const ProyectedRoute = ({ allowedRoles}) => {
    const user = useSelector((state) => state.user.userDetailes);//הלקוח מחובר
    const isUserLiggedIn= useSelector((state) => state.user.isUserLiggedIn);//הלקוח מחובר
    if(!isUserLiggedIn)//הלקוח לא מחובר
    return <Navigate to="/"  />;
    if(!allowedRoles.includes(user.permission))//  כלומר מערך ההרשאות-לא מכיל כרגע את ההרשאה שניתנה ללקוח המחובר כעת להיכנס לדף זה הלקוח לא מורשה
{
    return <Navigate to="/unauthorized" />; //הלקוח לא מורשה להיכנס לדף זה
    }
    return  <Outlet />; //הלקוח מורשה להיכנס לדף זה

}
export default ProyectedRoute;