import Form from 'react-bootstrap/Form';
import '../styling/components/CreateBlogForm.css';
import Button from 'react-bootstrap/Button';
import { useState, useContext } from 'react';
import { ApiContext } from "../context/ApiContext";

function CreateBlogForm() {
  // useState for the imagedata
  const [photo, setPhoto] = useState(null);
  const [caption, setCaption] = useState("")

  // api URL 
	const {api} = useContext(ApiContext);

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
        tags: event.target.elements.tags.value,
      };

      // Create FormData for image submission
      const formData = new FormData();
      formData.append("image", photo);
      formData.append("caption", caption);

      // Post image data to server and S3
      await fetch(api + "/blog/image", {
        method: 'POST',
        body: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      // Post blog data to server
      const response = await fetch(api + "/blog", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...blogData,
          imagedata: photo.name, // Assuming photo.name is a unique identifier for the image
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
            <Form.Group className="mb-3" controlId="locationaddress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" name="locationaddress" placeholder="Enter address" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="locationcity">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" name="locationcity" placeholder="Enter city" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="locationcountry">
              <Form.Label>Country</Form.Label>
              <Form.Control type="text" name="locationcountry" placeholder="Enter country" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="tags">
              <Form.Label>Tags</Form.Label>
              <Form.Control type="text" name="tags" placeholder="Enter region" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="body">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" name="body" placeholder="Enter description" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="imagedata">
                <Form.Label>Photo</Form.Label>
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