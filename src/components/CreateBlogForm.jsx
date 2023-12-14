import Form from 'react-bootstrap/Form';
import '../styling/components/CreateBlogForm.css';
import Button from 'react-bootstrap/Button';
import { useState, useContext } from 'react';
import { ApiContext } from "../context/ApiContext";

function CreateBlogForm() {
  const [photo, setPhoto] = useState(null);

  // api URL 
	const {api} = useContext(ApiContext);

  // This handleSubmit function Posts the form data to the server to create the blog
  const handleSubmit = async (event) => {
      event.preventDefault();
      
      try {
          const response = await fetch(api + "/blog", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                title: event.target.elements.title.value,
                locationname: event.target.elements.locationname.value,
                address: event.target.elements.address.value,
                city: event.target.elements.city.value,
                country: event.target.elements.country.value,
                region: event.target.elements.region.value,
                description: event.target.elements.description.value,
                photo: photo,
              }),
          });
          if (response.ok) {
              console.log("Blog posted successfully");
          } else {
              // Handle error
              console.error('Failed to post blog');
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
              <Form.Label>Title of Blog</Form.Label>
              <Form.Control type="text" name="title" placeholder="Enter title of blog" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="locationname">
              <Form.Label>Name of Location</Form.Label>
              <Form.Control type="text" name="locationname" placeholder="Enter name of location" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" name="address" placeholder="Enter address" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" name="city" placeholder="Enter city" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="country">
              <Form.Label>Country</Form.Label>
              <Form.Control type="text" name="country" placeholder="Enter country" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="region">
              <Form.Label>Region</Form.Label>
              <Form.Control type="text" name="region" placeholder="Enter region" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" name="description" placeholder="Enter description" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="photo">
                <Form.Label>Photo</Form.Label>
                <Form.Control type="file" name="photo" onChange={handlePhotoChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Post
            </Button>
        </Form>
    )
}

export default CreateBlogForm;