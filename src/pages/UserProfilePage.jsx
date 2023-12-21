import Card from 'react-bootstrap/Card';
import UserProfileForm from '../components/UserProfileForm';
import '../styling/UserProfilePage.css';
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../context/ApiContext";
import { AuthContext } from "../context/AuthContext";

function UserProfile() {

        // search results 
	const [user, setUser] = useState(null);

    // api URL 
	const {api} = useContext(ApiContext);

    // jwt token 
	const {jwt} = useContext(AuthContext);

    useEffect(() => {
		console.log("Card search component has mounted! Making a fetch request now...");

		async function apiRequest() {
			try {
				let response = await fetch(api + '/users/update', {
                    method: "PATCH",
                    headers: {
                      "Authorization": jwt
                    }
                });
				let responseData = await response.json();
		
				setUser(responseData.user);
				console.log(responseData.user);
			} catch (error) {
				console.error("Error fetching user:", error);
			}
		}

		apiRequest();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

    return (
        <div className="userprofile-container">
            
        {user && 
            <>
            <h3>User Profile - {user.username}</h3>
            <UserProfileForm
                firstName={user.firstName}
                lastName={user.lastName}
                username={user.username}
                email={user.email}
                regionsOfInterest={user.regionsOfInterest}
                countriesOfInterest={user.countriesOfInterest}
            />
            </>
        }    
        </div>
    )
}

export default UserProfile;