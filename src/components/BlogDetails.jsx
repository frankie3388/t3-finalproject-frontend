import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import FollowButton from '../components/FollowButton';

// The Blog details will display the title of the blog, username,
// location, description, and the images for the blog.

function BlogDetails() {
    return (
        <Row>
             <Col xs={12} lg={6}>
                <h6>Username</h6>
                <FollowButton />
                <h6>Title of Blog</h6>
                <h6>Location</h6>
                <p>Description</p>
            </Col>
            <Col xs={12} lg={6}>
                <Card.Img
                className="image"
                src="https://images.unsplash.com/photo-1682695795255-b236b1f1267d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <Row>
                    <Col>
                        <Card.Img
                        className="image"
                        src="https://images.unsplash.com/photo-1682695795255-b236b1f1267d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                    </Col>
                    <Col>
                        <Card.Img
                        className="image"
                        src="https://images.unsplash.com/photo-1682695795255-b236b1f1267d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default BlogDetails;