import EditBlogForm from "../components/EditBlogForm";
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../context/ApiContext";
import { AuthContext } from "../context/AuthContext";
import '../styling/EditBlogPage.css'

// This component is responsible for fetching data from a blog id, so that
// the user who created the blog can edit it.
function EditBlog() {

    // State to store the fetched blog data
	const [blog, setBlog] = useState(null);

    const [loading, setLoading] = useState(true); // Add loading state

    // Retrieve the blog ID from the URL
    const { id } = useParams();

    // api URL 
	const {api} = useContext(ApiContext);

    // jwt token 
	const {jwt} = useContext(AuthContext);

    // Fetch the blog data when the component mounts
    useEffect(() => {
		console.log("Card search component has mounted! Making a fetch request now...");

		async function apiRequest() {
			try {
                // Fetch blog data using the blog ID
				let response = await fetch(api + '/blog/image/' + id, {
                    method: "PATCH",
                    headers: {
                      "Authorization": jwt
                    }
                });
				let responseData = await response.json();
		
				setBlog(responseData.Blog);
                setLoading(false); // Set loading state to false after receiving blogs
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
             <h3 className="edit-blog-title">Edit Blog Id - {id}</h3>
            
            {loading ? (
                // Display a loading message while data is being fetched
                <h2>Loading...</h2>
            ) : (
                <>
                    {blog && blog.user && (
                        <h5 className="edit-blog-username">{blog.user.username}</h5>
                    )}
                    {blog && blog.user  ? (
                        <EditBlogForm 
                            title={blog.title}
                            locationName={blog.locationname}
                            address={blog.locationaddress}
                            city={blog.locationcity}
                            country={blog.locationcountry}
                            description={blog.body}
                        />
                    ) : (
                        <h1>{blog}</h1>
                    )}
                </>
            )}
        </div>
    )
}

export default EditBlog;