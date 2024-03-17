import Form from 'react-bootstrap/Form';
// The edit blog form will use the same css file as the 'CreateBlogForm' to style it.
import '../styling/components/CreateBlogForm.css';
import Button from 'react-bootstrap/Button';
import { useState, useContext } from 'react';
import { ApiContext } from "../context/ApiContext";
import { AuthContext } from "../context/AuthContext";
import { useParams } from 'react-router-dom'; // React Router hook for accessing URL parameters

// Functional component for EditBlogForm. This component is responsible for
// editing the blog. Only the user who created the blog and admin is allowed 
// to edit the blog.
function EditBlogForm(props) {
  // useState for success or fail message
  const [message, setMessage] = useState("")

  // useState for the imagedata
  const [photos, setPhotos] = useState(0);
  const [caption, setCaption] = useState("")

  // api URL 
	const {api} = useContext(ApiContext);

  // jwt token 
	const {jwt} = useContext(AuthContext);

  // Retrieve the blog ID from the URL
  const { id } = useParams();

    // This handleSubmit function Posts the form data to the server to create the blog
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        // Edit blog data from form input
        const blogData = {
          title: event.target.elements.title.value,
          locationname: event.target.elements.locationname.value,
          locationaddress: event.target.elements.locationaddress.value,
          locationcity: event.target.elements.locationcity.value,
          locationcountry: event.target.elements.locationcountry.value,
          body: event.target.elements.body.value,
        };
    
        // Create FormData for image submission
        const formData = new FormData();
        
        formData.append("caption", caption);

        // Append each selected image to FormData
        for (let i = 0; i < photos.length; i++) {
          formData.append("images", photos[i]);
        }
    
        // Append blog data to FormData
        for (const key in blogData) {
          formData.append(key, blogData[key]);
        }
    
        // Post image data and blog data to server and S3
        const response = await fetch(api + "/blog/image/" + id, {
          method: 'PATCH',
          body: formData,
          headers: {
            "Authorization": jwt,
          },
        });
    
        if (response.ok) {
          console.log("Image and blog data edited successfully");
          setMessage("Successfully edited blog")
        } else {
          console.error('Failed to edit image and blog data:', response.statusText);
          // Handle error
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };


    const handlePhotoChange = (event) => {
      const files = event.target.files;
      if (files) {
        setPhotos(files);
      }
    };
    
    return (
        <Form className="edit-blog-form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3 edit-blog-input" controlId="">
              <Form.Label>Title of Blog - {props.title}</Form.Label>
              <Form.Control type="text" name="title" placeholder="Enter title of blog" />
            </Form.Group>
            <Form.Group className="mb-3 edit-blog-input" controlId="">
              <Form.Label>Name of Location - {props.locationName}</Form.Label>
              <Form.Control type="text" name="locationname" placeholder="Enter name of location" />
            </Form.Group>
            <Form.Group className="mb-3 edit-blog-input" controlId="">
              <Form.Label>Address - {props.address}</Form.Label>
              <Form.Control type="text" name="locationaddress" placeholder="Enter address" />
            </Form.Group>
            <Form.Group className="mb-3 edit-blog-input" controlId="">
              <Form.Label>City - {props.city}</Form.Label>
              <Form.Control type="text" name="locationcity" placeholder="Enter city" />
            </Form.Group>
            <Form.Group className="mb-3 edit-blog-input" controlId="">
              <Form.Label>Country - {props.country}</Form.Label>
              <Form.Control type="text" name="locationcountry" placeholder="Enter country" />
            </Form.Group>
            <Form.Group className="mb-3 edit-blog-input" controlId="">
              <Form.Label>Description - {props.description}</Form.Label>
              <Form.Control type="text" name="body" placeholder="Enter description" />
            </Form.Group>
            <Form.Group className="mb-3 edit-blog-input" controlId="imagedata">
                <Form.Label>Photo</Form.Label>
                <Form.Control type="file" name="imagedata" multiple onChange={handlePhotoChange} />
                <Form.Control type="text" name="imagedata" value={caption} onChange={e => setCaption(e.target.value)} />
            </Form.Group>
            <div className="position-edit-blog-button">
              <Button className="edit-blog-save-button" variant="primary" type="submit">
                Save
              </Button>
            </div>
            <Form.Label className="success-fail-blog">{message}</Form.Label>
        </Form>
    )
}

export default EditBlogForm;