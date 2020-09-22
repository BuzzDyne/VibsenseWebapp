import React from 'react'
import './Header.css'
import {auth} from '../firebase'


function Header() {

    const logoutHandle = e => {
        e.preventDefault();
        auth.signOut()
            .then((auth) => {
                //Logged out
            })
            .catch((e) => alert(e.message));
    };

    return (
        <nav>
            <div>
                <h2 id="LogoName">Navbar</h2>
            </div>

            <div id="navRight">
                {/* <h6>Welcome, {props.email}</h6> */}
                <h6>Welcome</h6>
                <button onClick={logoutHandle}>Log out</button>
            </div>
        </nav>
    )
}

export default Header