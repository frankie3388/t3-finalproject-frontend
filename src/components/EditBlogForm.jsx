import Form from 'react-bootstrap/Form';
// The edit blog form will use the same css file as the 'CreateBlogForm' to style it.
import '../styling/components/CreateBlogForm.css';
import Button from 'react-bootstrap/Button';
import { useState, useContext } from 'react';
import { ApiContext } from "../context/ApiContext";
import { AuthContext } from "../context/AuthContext";
import { useParams } from 'react-router-dom';

function EditBlogForm(props) {

  // useState for the imagedata
  const [photo, setPhoto] = useState(null);
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
        // Edit blog data
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
        const response = await fetch(api + "/blog/image/" + id, {
          method: 'PATCH',
          body: formData,
          headers: {
            "Authorization": jwt,
            // Do not set Content-Type header explicitly, let the browser handle it
          },
        });
    
        if (response.ok) {
          console.log("Image and blog data edited successfully");
          // Additional logic if needed
        } else {
          console.error('Failed to edit image and blog data:', response.statusText);
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
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Title of Blog - {props.title}</Form.Label>
              <Form.Control type="text" name="title" placeholder="Enter title of blog" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Name of Location - {props.locationName}</Form.Label>
              <Form.Control type="text" name="locationname" placeholder="Enter name of location" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Address - {props.address}</Form.Label>
              <Form.Control type="text" name="locationaddress" placeholder="Enter address" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>City - {props.city}</Form.Label>
              <Form.Control type="text" name="locationcity" placeholder="Enter city" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Country - {props.country}</Form.Label>
              <Form.Control type="text" name="locationcountry" placeholder="Enter country" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Description - {props.description}</Form.Label>
              <Form.Control type="text" name="body" placeholder="Enter description" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="imagedata">
                <Form.Label>Photo</Form.Label>
                <Form.Control type="file" name="imagedata" onChange={handlePhotoChange} />
                <Form.Control type="text" name="imagedata" value={caption} onChange={e => setCaption(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Save
            </Button>
        </Form>
    )
}

export default EditBlogForm;