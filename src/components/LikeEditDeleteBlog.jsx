import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router";
import { useState, useContext } from 'react';
import { ApiContext } from "../context/ApiContext";
import { AuthContext } from "../context/AuthContext";
import { useParams } from 'react-router-dom';

// This component consists of the like button, edit and delete blog buttons
// in the Blog page.
function LikeEditDeleteBlog(props) {

    const [activate, setActivate] = useState(false);

    // // search results 
	// const [blog, setBlog] = useState(null);

    // Retrieve the blog ID from the URL
    const { id } = useParams();

      // api URL 
	const {api} = useContext(ApiContext);

    // jwt token 
      const {jwt} = useContext(AuthContext);

    const navigate = useNavigate();

    const editSubmit = (event) => {
        navigate("/editblog/" + props.blogId)
    }

    const deleteSubmit = () => {
        setActivate(true);
    }

    const deleteSubmitConfirm = async (event) => {
        // event.preventDefault();

        setActivate(false);

        try {
            // Log the complete URL and JWT token for debugging
            console.log('Delete URL:', api + `/blog/` + id);
            console.log('JWT Token:', jwt);
    
            // Send a DELETE request to the server
            const response = await fetch(api + `/blog/delete/` + id, {
                method: 'DELETE',
                headers: {
                    "Authorization": jwt,
                },
            });
    
            // Log the response for debugging
            console.log('Delete Response:', response);
    
            if (response.ok) {
                console.log("Blog deleted successfully");
                // Additional logic if needed
            } else {
                console.error('Failed to delete blog:', response.statusText);
                // Handle error
            }
        } catch (error) {
            console.error('Error:', error);
        }
        
        navigate("/bloglist");

        
    }

    const resetSubmit = () => {
        setActivate(false);
    }
    
    return (
        <Row>
            <Col>
                <h6>Like</h6>
            </Col>
            {activate ? (
                <Col>
                    <h6>Are you sure you want to delete blog?</h6>
                    <button onClick={deleteSubmitConfirm}>Yes</button>
                    <button onClick={resetSubmit}>No</button>
                </Col>
            )
            :
            <Col>
                <button onClick={editSubmit}>Edit Blog</button>
                <button onClick={deleteSubmit}>Delete Blog</button>
            </Col>
            } 
        </Row>
    )
}

export default LikeEditDeleteBlog;