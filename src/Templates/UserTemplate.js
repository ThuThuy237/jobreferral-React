// import React from 'react';
// import { Route } from 'react-router';
// import UserLayout from '../Layouts/UserLayout';
// import { useSelector } from 'react-redux';
// import Unauthorized from '../Components/Unauthorized';

// export default function UserTemplate({ Component, ...props }) {
//   const { userLogin } = useSelector(state => state.LoginReducer);

//   const renderPage = React.useCallback(() => {
//     return <>
//       {userLogin !== null ? <>
//         <Route {...props}
//           render={(propsComponent) => (
//             <UserLayout>
//               <Component {...propsComponent} />
//             </UserLayout>
//           )}
//         /></> : <Unauthorized/>
//       }</>
//     }, [userLogin, props]);
//       return (
//       <>{renderPage()}</>
//       )
// }
import React, { useEffect } from 'react';
import { Route } from 'react-router';
import UserLayout from '../Layouts/UserLayout';
import { getUserLogin } from '../reducers/Login/action';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import Unauthorized from '../Components/Unauthorized';
import Loading from '../Components/Loading';

export default function UserTemplate({ Component, ...props }) {
  let history = useHistory();
  const dispatch = useDispatch();
  const { loading, userLogin, err } = useSelector(state => state.LoginReducer);

  useEffect(() => {
    dispatch(getUserLogin(history));
  }, [dispatch, history]);

  const renderPage = React.useCallback(() => {
    if (loading) { return <Loading /> }
    if (err) { return <Unauthorized /> }
    if (userLogin !== null) {
      return <>
        <Route {...props}
          render={(propsComponent) => (
            <UserLayout>
              <Component {...propsComponent} />
            </UserLayout>
          )}
        />
      </>
    }
  }, [userLogin, loading, err, props]);
  return (
    <>{renderPage()}</>
  )
}
