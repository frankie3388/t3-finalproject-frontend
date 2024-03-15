import Form from 'react-bootstrap/Form';
import '../styling/components/CreateBlogForm.css';
import Button from 'react-bootstrap/Button';
import { useState, useContext } from 'react';
import { ApiContext } from "../context/ApiContext";
import { AuthContext } from "../context/AuthContext";

// Functional component for creating blog form. This component is responsible for
// creating blogs.
function CreateBlogForm() {
  // useState for the imagedata
  const [photos, setPhotos] = useState(null);
  const [caption, setCaption] = useState("")

  // Contexts for accessing API URL and JWT token
  // api URL 
	const {api} = useContext(ApiContext);
  // jwt token 
	const {jwt} = useContext(AuthContext);

  // This handleSubmit function Posts the form data to the server to create the blog
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Create blog data from form input
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

    // Append caption and other data
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
      const response = await fetch(api + "/blog/image", {
        method: 'POST',
        body: formData,
        headers: {
          "Authorization": jwt,
        },
      });
  
      if (response.ok) {
        console.log("Image and blog data posted successfully");
      } else {
        console.error('Failed to post image and blog data:', response.statusText);
        // Handle error
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Function to handle changes in the selected photo
  const handlePhotoChange = (event) => {
      setPhotos(event.target.files); // Set the selected image file
  };

    return (
        <Form className="create-blog-form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3 create-blog-input" controlId="title">
              <Form.Label data-testid="title-test">Title of Blog</Form.Label>
              <Form.Control type="text" name="title" placeholder="Enter title of blog" />
            </Form.Group>
            <Form.Group className="mb-3 create-blog-input" controlId="locationname">
              <Form.Label data-testid="locationName-test">Name of Location</Form.Label>
              <Form.Control type="text" name="locationname" placeholder="Enter name of location" />
            </Form.Group>
            <Form.Group className="mb-3 create-blog-input" controlId="locationaddress">
              <Form.Label data-testid="locationAddress-test">Address</Form.Label>
              <Form.Control type="text" name="locationaddress" placeholder="Enter address" />
            </Form.Group>
            <Form.Group className="mb-3 create-blog-input" controlId="locationcity">
              <Form.Label data-testid="locationCity-test">City</Form.Label>
              <Form.Control type="text" name="locationcity" placeholder="Enter city" />
            </Form.Group>
            <Form.Group className="mb-3 create-blog-input" controlId="locationcountry">
              <Form.Label data-testid="locationCountry-test">Country</Form.Label>
              <Form.Control type="text" name="locationcountry" placeholder="Enter country" />
            </Form.Group>
            <Form.Group className="mb-3 create-blog-input" controlId="body">
              <Form.Label data-testid="description-test">Description</Form.Label>
              <Form.Control type="text" name="body" placeholder="Enter description" />
            </Form.Group>
            <Form.Group className="mb-3 create-blog-input" controlId="imagedata">
                <Form.Label data-testid="photo-test">Photo</Form.Label>
                <Form.Control type="file" name="images" multiple onChange={handlePhotoChange} />
                <Form.Control type="text" name="imagedata" className="caption-create-blog" value={caption} onChange={e => setCaption(e.target.value)} />
            </Form.Group>
            <div className="position-create-blog-button">
              <Button className="create-blog-button" variant="primary" type="submit">
                Post
              </Button>
            </div>
        </Form>
    )
}

export default CreateBlogForm;