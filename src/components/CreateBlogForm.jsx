import Form from 'react-bootstrap/Form';
import '../styling/components/CreateBlogForm.css';
import Button from 'react-bootstrap/Button';
import { useState, useContext } from 'react';
import { ApiContext } from "../context/ApiContext";
import { AuthContext } from "../context/AuthContext";

function CreateBlogForm() {
  // useState for the imagedata
  const [photo, setPhoto] = useState(null);
  const [caption, setCaption] = useState("")

  // api URL 
	const {api} = useContext(ApiContext);

  // jwt token 
	const {jwt} = useContext(AuthContext);

  // This handleSubmit function Posts the form data to the server to create the blog
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Create blog data
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
      formData.append("image", photo);
      formData.append("caption", caption);
  
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
          // Do not set Content-Type header explicitly, let the browser handle it
        },
      });
  
      if (response.ok) {
        console.log("Image and blog data posted successfully");
        // Additional logic if needed
      } else {
        console.error('Failed to post image and blog data:', response.statusText);
        // Handle error
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handlePhotoChange = (event) => {
      setPhoto(event.target.files[0]);
  };

    return (
        <Form className="create-blog-form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label data-testid="title-test">Title of Blog</Form.Label>
              <Form.Control type="text" name="title" placeholder="Enter title of blog" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="locationname">
              <Form.Label data-testid="locationName-test">Name of Location</Form.Label>
              <Form.Control type="text" name="locationname" placeholder="Enter name of location" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="locationaddress">
              <Form.Label data-testid="locationAddress-test">Address</Form.Label>
              <Form.Control type="text" name="locationaddress" placeholder="Enter address" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="locationcity">
              <Form.Label data-testid="locationCity-test">City</Form.Label>
              <Form.Control type="text" name="locationcity" placeholder="Enter city" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="locationcountry">
              <Form.Label data-testid="locationCountry-test">Country</Form.Label>
              <Form.Control type="text" name="locationcountry" placeholder="Enter country" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="body">
              <Form.Label data-testid="description-test">Description</Form.Label>
              <Form.Control type="text" name="body" placeholder="Enter description" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="imagedata">
                <Form.Label data-testid="photo-test">Photo</Form.Label>
                <Form.Control type="file" name="imagedata" onChange={handlePhotoChange} />
                <Form.Control type="text" name="imagedata" value={caption} onChange={e => setCaption(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Post
            </Button>
        </Form>
    )
}

export default CreateBlogForm;