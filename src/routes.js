import React, {Fragment} from 'react';
import { Route, Switch} from 'react-router-dom';

import HomePage from "./components/HomePage";
import RegistrationPage from "./components/RegistrationPage";
import LoginPage from "./components/LoginPage";
import ResetPasswordPage from "./components/ResetPasswordPage";
import ChangePasswordPage from "./components/ChangePasswordPage";
import Exchange from "./containers/UserSide/Exchange/Exchange";

const Routes = () => {
    return (
        <Fragment>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/registration' component={RegistrationPage}/>
                <Route path='/login' component={LoginPage}/>
                <Route path='/reset_password' component={ResetPasswordPage}/>
                <Route path='/change_password' component={ChangePasswordPage}/>

                {/*USER SIDE*/}
                <Route path='/exchange' component={Exchange}/>
            </Switch>
        </Fragment>
    )
}

export default Routes;