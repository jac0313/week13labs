import React from 'react';

class Nav extends React.Component{
    render(){
        return(
            <nav className='navBar'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        )
    }
}

export default Nav;