import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router";
import { useState, useContext } from 'react';
import { ApiContext } from "../context/ApiContext";
import { AuthContext } from "../context/AuthContext";
import { useParams } from 'react-router-dom';
import '../styling/components/LikeEditDeleteBlog.css'

// This component consists of the edit and delete blog buttons
// in the Blog page.
function LikeEditDeleteBlog(props) {
    // State variable to control the activation of delete confirmation
    const [activate, setActivate] = useState(false);

    // Retrieve the blog ID from the URL
    const { id } = useParams();

      // api URL 
	const {api} = useContext(ApiContext);

    // jwt token 
      const {jwt} = useContext(AuthContext);

    const navigate = useNavigate();

    // Function to handle the edit button click
    const editSubmit = (event) => {
        navigate("/editblog/" + props.blogId)
    }

    // Function to handle the delete button click
    const deleteSubmit = () => {
        setActivate(true);
    }

    // Function to handle the confirmation of blog deletion
    const deleteSubmitConfirm = async (event) => {

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
            } else {
                console.error('Failed to delete blog:', response.statusText);
                // Handle error
            }
        } catch (error) {
            console.error('Error:', error);
        }
        
        // Navigate to the blog list page after deletion
        navigate("/bloglist");
    }

    // Function to handle the cancellation of blog deletion
    const resetSubmit = () => {
        setActivate(false);
    }
    
    return (
        <Row className="edit-delete-buttons">
            {/* Conditional rendering based on the activation state */}
            {activate ? (
                <Col className="edit-delete-position">
                    <h6>Are you sure you want to delete blog?</h6>
                    <button className="delete-button" onClick={deleteSubmitConfirm}>Yes</button>
                    <button className="delete-button" onClick={resetSubmit}>No</button>
                </Col>
            )
            :
            <Col className="edit-delete-position">
                <button className="edit-button" onClick={editSubmit}>Edit Blog</button>
                <button className="edit-button" onClick={deleteSubmit}>Delete Blog</button>
            </Col>
            } 
        </Row>
    )
}

export default LikeEditDeleteBlog;