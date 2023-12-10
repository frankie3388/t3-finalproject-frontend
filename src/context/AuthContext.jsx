import { createContext } from 'react';
import { useState } from 'react';


export const AuthContext = createContext();

const AuthProvider = (props) => {
    const [jwt, setJwt] = useState("2");
  
    const updateJwt = (newJwt) => {
      setJwt(newJwt);
    };
  
    return (
      <AuthContext.Provider value={{ jwt, updateJwt }}>
        {props.children}
      </AuthContext.Provider>
    );
  };
  
export default AuthProvider;