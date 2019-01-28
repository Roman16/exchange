import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import ShortInformation from './ShortInformation';
import TwoFactorAuthentication from './TwoFactorAuthentication';
import UserInformation from './UserInformation';

import icon from '../../../assets/img/padlock.svg';
import './Profile.scss'

class Profile extends Component {
    state = {
        user: {
            name: 'tt'
        }
    };

    render() {
        const {user} = this.state;

        return (
            <div className="profile-page">
                <ShortInformation
                    user={user}
                />

                <TwoFactorAuthentication/>

                <div className='change-password-page section'>
                    <img src={icon} alt=""/>
                    <span>Змінити пароль</span>
                    <button className='btn'>
                        <NavLink to='/change_password'>
                            Змінити пароль
                        </NavLink>
                    </button>
                </div>

                <UserInformation
                    user={user}
                />
            </div>
        )
    }
}

export default Profile;