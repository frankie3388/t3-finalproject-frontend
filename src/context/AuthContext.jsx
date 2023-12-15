import { createContext } from 'react';
import { useState } from 'react';


export const AuthContext = createContext();

const AuthProvider = (props) => {
    const [jwt, setJwt] = useState("");
  
    const loginJwt = (newJwt) => {
      setJwt(newJwt);
    };

    const logoutJwt = () => {
      setJwt(null);
    };
  
    return (
      <AuthContext.Provider value={{ jwt, loginJwt, logoutJwt }}>
        {props.children}
      </AuthContext.Provider>
    );
};
  
export default AuthProvider;