import EditBlogForm from "../components/EditBlogForm";
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../context/ApiContext";
import { AuthContext } from "../context/AuthContext";


function EditBlog() {

    // search results 
	const [blog, setBlog] = useState(null);

    // Retrieve the blog ID from the URL
    const { id } = useParams();

    // api URL 
	const {api} = useContext(ApiContext);

    // jwt token 
	const {jwt} = useContext(AuthContext);

    useEffect(() => {
		console.log("Card search component has mounted! Making a fetch request now...");

		async function apiRequest() {
			try {
				let response = await fetch(api + '/blog/image/' + id, {
                    method: "PATCH",
                    headers: {
                      "Authorization": jwt
                    }
                });
				let responseData = await response.json();
		
				setBlog(responseData.Blog);
				console.log(responseData.Blog);
			} catch (error) {
				console.error("Error fetching blogs:", error);
			}
		}

		apiRequest();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

    return (
        
        <div>
            {blog && blog.user  ? (
            <>
                <h3>Edit Blog Id - {id}</h3>
                <h5>{blog.user.username}</h5>
                <EditBlogForm 
                    title={blog.title}
                    locationName={blog.locationname}
                    address={blog.locationaddress}
                    city={blog.locationcity}
                    country={blog.locationcountry}
                    description={blog.body}
                />
            </>
        ) : (
            <h1>{blog}</h1>
        )}
        </div>
    )
}

export default EditBlog;