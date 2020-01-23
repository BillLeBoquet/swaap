import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import {useSelector} from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const {user} = useSelector(state => state.auth);
    console.log('rest')
    console.log(rest)
    return (
        <Route {...rest} render={(props) => (
                user !== null ? (
                    <Component/>
                ) : (
                    <Redirect to={{ pathname: '/public/login', state: { from: props.location }}} />
                )
        )}/>
    )
}

export default PrivateRoute