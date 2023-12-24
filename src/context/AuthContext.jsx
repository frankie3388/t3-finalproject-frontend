import { createContext } from 'react';
import { useState } from 'react';

// Creating a context for authentication-related data (jwt)
export const AuthContext = createContext();

// Functional component definition for AuthProvider
const AuthProvider = (props) => {
    // State to manage the JWT token
    const [jwt, setJwt] = useState("");
  
    // Function to set the JWT token when a user logs in
    const loginJwt = (newJwt) => {
      setJwt(newJwt);
    };

    // Function to clear the JWT token when a user logs out
    const logoutJwt = () => {
      setJwt(null);
    };
  
    // Return the AuthContext.Provider with the provided authentication data
    return (
      <AuthContext.Provider value={{ jwt, loginJwt, logoutJwt }}>
        {props.children}
      </AuthContext.Provider>
    );
};
  
// Exporting the AuthProvider component for use in other parts of the application
export default AuthProvider;