import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import '../styling/components/UserProfileForm.css';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { ApiContext } from "../context/ApiContext";
import { AuthContext } from "../context/AuthContext";

// Functional component for UserProfileForm. It is responsible for
// editing the user profile.
function UserProfileForm(props) {

    // api URL 
	const {api} = useContext(ApiContext);

    // jwt token 
      const {jwt} = useContext(AuthContext);

    // This handleSubmit function Posts the form data to the server to edit the user
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          // Edit blog data
          const userData = {
            firstName: event.target.elements.firstName.value,
            lastName: event.target.elements.lastName.value,
            username: event.target.elements.username.value,
            password: event.target.elements.password.value,
            email: event.target.elements.email.value,
            regionsOfInterest: event.target.elements.regionsOfInterest.value,
            countriesOfInterest: event.target.elements.countriesOfInterest.value,
          };
      
          // PATCH user account data to server route 'users/update'
          const response = await fetch(api + "/users/update", {
            method: 'PATCH',
            body: JSON.stringify(userData),
            headers: {
              "Authorization": jwt,
              "Content-Type": "application/json",
            },
          });
      
          if (response.ok) {
            console.log("User updated successfully");
            // Additional logic if needed
          } else {
            console.error('Failed to update user:', response.statusText);
            // Handle error
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

    return (
        <Container fluid className="userprofileform-container">
            <Form onSubmit={handleSubmit}>
                <Row className="user-profile-input user-profile-firstName">
                    <Form.Label column lg={2}>
                        First Name - {props.firstName}
                    </Form.Label>
                    <Col>
                        <Form.Control 
                            type="text" 
                            placeholder="First Name"
                            name="firstName"
                        />
                    </Col>
                </Row>
                <Row className="user-profile-input">
                    <Form.Label column lg={2}>
                        Last Name - {props.lastName}
                    </Form.Label>
                    <Col>
                        <Form.Control 
                            type="text" 
                            placeholder="Last Name"
                            name="lastName"
                        />
                    </Col>
                </Row>
                <Row className="user-profile-input">
                    <Form.Label column lg={2}>
                        Username - {props.username}
                    </Form.Label>
                    <Col>
                        <Form.Control 
                            type="text" 
                            placeholder="Username"
                            name="username"
                        />
                    </Col>
                </Row>
                <Row className="user-profile-input">
                    <Form.Label column lg={2}>
                        Password
                    </Form.Label>
                    <Col>
                        <Form.Control 
                            type="text" 
                            placeholder="Password"
                            name="password"
                            />
                    </Col>
                </Row>
                <Row className="user-profile-input">
                    <Form.Label column lg={2}>
                        Email - {props.email}
                    </Form.Label>
                    <Col>
                        <Form.Control 
                            type="text" 
                            placeholder="Email"
                            name="email"
                            />
                    </Col>
                </Row>
                <Row className="user-profile-input">
                    <Form.Label column lg={2}>
                        Regions of Interest - {props.regionsOfInterest}
                    </Form.Label>
                    <Col>
                        <Form.Control 
                            type="text" 
                            placeholder="Regions of interest"
                            name="regionsOfInterest"
                            />
                    </Col>
                </Row>
                <Row className="user-profile-input">
                    <Form.Label column lg={2}>
                        Countries of Interest - {props.countriesOfInterest}
                    </Form.Label>
                    <Col>
                        <Form.Control 
                            type="text" 
                            placeholder="Countries of interest"
                            name="countriesOfInterest"
                            />
                    </Col>
                </Row>
                {/* <Row>
                    <Form.Label column lg={2}>
                        Followed Users
                    </Form.Label>
                    <Col>
                        <p></p>
                    </Col>
                </Row> */}
                <Row className="user-profile-input">
                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 2, offset: 10 }}>
                        <Button 
                        variant="primary"
                        type="submit"
                        className="edit-button"
                        >
                            Edit User
                        </Button>
                        </Col>
                    </Form.Group>
                </Row>
            </Form>
        </Container>
    )
}

export default UserProfileForm;