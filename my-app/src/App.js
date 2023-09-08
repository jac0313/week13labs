// Using Create-React-App or Vite, create a new React project. Create a LoginForm component that contains the following:
// Username and password input fields, an h3 that says Log In, with a border. Style the component using the default generated CSS file.
// Create a Navigation component that contains links styled like a navbar.
// The links don't have to go anywhere.
// Put the Navigation component at the top of the page and the LoginForm in the center of the page



import './App.css';
import Nav from './Nav'
import Input from './Input'
import Border from './Border'
// imports all the different component files

function App() {
  return (
    <div>
       <Nav/>
       <Border/>
       <Input/>
    </div>
  );
}
// function that returns the components on the page
export default App;
// exports App file