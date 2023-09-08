import React from 'react';
//imports react file

class Input extends React.Component {
    render() {
        return(
            <form className = 'inputForm'>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username"></input>
                <br></br>
                <label for="lname">Password:</label>
                <input type="password" id="password" name="password"></input>
                <br></br>
                <button type="submit">submit</button>
            </form>
        )    
   } 
}
//class based component with method to render html for input forms

export default Input;
//exports input component file