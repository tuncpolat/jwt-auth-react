import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// HOC
import PrivateRoute from '../components/PrivateRoute';

// components
import Header from '../components/Header'

//import screens for app
import Landing from './Landing';
import Signup from './Signup';
import Login from './Login';
import Confirmation from './Confirmation';
import EmailSend from './EmailSend';
import Dashboard from './Dashboard';
import PasswordForget from './PasswordForget'
import PasswordChange from './PasswordChange'



// context
import AuthDataProvider from "../context/AuthProvider";


import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/app.css";


class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <AuthDataProvider>
                            <Header />
                            <Route path="/" exact component={Landing} />
                            <Route path="/signup" exact component={Signup} />
                            <Route path="/login" exact component={Login} />
                            <Route path="/email-send" exact component={EmailSend} />
                            <Route path="/confirmation/:emailtoken" exact component={Confirmation} />
                            <Route path="/password-forget" exact component={PasswordForget} />
                            <Route path="/password-change/:passwordtoken" exact component={PasswordChange} />
                            <PrivateRoute path="/dashboard" exact component={Dashboard} />
                    </AuthDataProvider>
                </BrowserRouter>
            </div>
        )
    }
}


export default App;