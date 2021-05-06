import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthDataContext } from "../context/AuthProvider";
import Loading from './Loading'

export default function PrivateRoute({ component: Component, ...options }) {
    const { authenticated, loading } = useAuthDataContext();

    return (
        <>
            <Route
                {...options}
                render={props => (
                    !loading
                        ?
                        authenticated
                            ?
                            <>
                                <Component {...props} />
                            </>
                            :
                            <Redirect to='/login' />
                        :
                        <Loading />
                )
                }
            />
        </>
    )



};