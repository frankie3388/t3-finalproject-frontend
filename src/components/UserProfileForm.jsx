import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import '../styling/components/UserProfileForm.css';

function UserProfileForm() {
    return (
        <Container fluid className="userprofileform-container">
            <Row>
                <Form.Label column lg={2}>
                    First Name
                </Form.Label>
                <Col>
                    <Form.Control type="text" placeholder="First Name" />
                </Col>
            </Row>
                <br />
            <Row>
                <Form.Label column lg={2}>
                    Last Name
                </Form.Label>
                <Col>
                    <Form.Control type="text" placeholder="Last Name" />
                </Col>
            </Row>
                <br />
            <Row>
                <Form.Label column lg={2}>
                    Username
                </Form.Label>
                <Col>
                    <Form.Control type="text" placeholder="Username" />
                </Col>
            </Row>
            <Row>
                <Form.Label column lg={2}>
                    Password
                </Form.Label>
                <Col>
                    <Form.Control type="text" placeholder="Password" />
                </Col>
            </Row>
            <Row>
                <Form.Label column lg={2}>
                    Email
                </Form.Label>
                <Col>
                    <Form.Control type="text" placeholder="Email" />
                </Col>
            </Row>
            <Row>
                <Form.Label column lg={2}>
                    Locations of Interest
                </Form.Label>
                <Col>
                    <Form.Control type="text" placeholder="Locations of interest" />
                </Col>
            </Row>
            <Row>
                <Form.Label column lg={2}>
                    Followed Users
                </Form.Label>
                <Col>
                    <p></p>
                </Col>
            </Row>
        </Container>
    )
}

export default UserProfileForm;