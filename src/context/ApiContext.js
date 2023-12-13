import { createContext, useState } from "react";


export const ApiContext = createContext(null)

export default function ApiProvider({children}){

    // Will have to change this URL to our API after setting up backend
	const [apiUrl, setApiUrl] = useState(process.env.BACKEND_URL_PUBLIC);

	return (
        <ApiContext.Provider value={
			{
				api: apiUrl, 
				setApi: setApiUrl
			}
		}>
            {children}
		</ApiContext.Provider>
	)

}