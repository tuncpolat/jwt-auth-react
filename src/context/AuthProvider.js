import React, { createContext, useState, useEffect, useContext } from "react";
import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import keys from '../config/keys'
import { useHistory } from 'react-router-dom'

export const AuthDataContext = createContext(null);

axios.defaults.withCredentials = true

// only on 401
const refreshAuthLogic = failedRequest => {
    axios.post(keys.server + '/api/refresh_token', {}, { withCredentials: true })
        .then(tokenRefreshResponse => {
            failedRequest.response.config.headers['Authorization'] = tokenRefreshResponse.headers.authorization;
            return Promise.resolve();
        }).catch(err => {
            return Promise.reject(err)
        })
};

// Instantiate the axios interceptor (you can chain it as it returns the axios instance)
createAuthRefreshInterceptor(axios, refreshAuthLogic);

const AuthDataProvider = props => {
    const [authenticated, setAuthenticated] = useState(false); // memory
    const [sendEmail, setSendEmail] = useState('')
    const [loading, setLoading] = useState(true);
    const history = useHistory(); // history

    useEffect(() => {
        checkAuth();
    }, [history]);

    const checkAuth = async () => {
        try {
            const { headers: { authorization } } = await axios.post(keys.server + '/api/refresh_token', {}, { withCredentials: true })
            let accessToken = authorization;
            if (accessToken) { setAuthenticated(accessToken) }
            setLoading(false);
        } catch (error) {
            setAuthenticated(false)
            setLoading(false);
        }
    }

    const onLogout = async () => {
        try {
            await axios.post(keys.server + '/api/logout', {}, { withCredentials: true })
            setAuthenticated(false)
            history.push('/login')
        } catch (error) {
            console.log(error)
        }
    };

    const onLogin = accessToken => {
        setAuthenticated(accessToken)
        history.push('/dashboard')
    };

    const onSignUp = (accessToken, email) => {
        setAuthenticated(accessToken)
        setSendEmail(email)
        history.push("/email-send")
    }

  

    return (
        <AuthDataContext.Provider value={{ authenticated, loading, sendEmail, onLogin, onLogout, onSignUp }} {...props} />
    );
};

export const useAuthDataContext = () => useContext(AuthDataContext);

export default AuthDataProvider;