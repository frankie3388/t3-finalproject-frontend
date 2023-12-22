import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

// The Blog details will display the title of the blog, username,
// location, description, and the images for the blog in the BlogPage file

function BlogDetails(props) {

    return (
        <Row>
            <Col xs={12} lg={6}>
                <h6>{props.username}</h6>
                <h6>{props.title}</h6>
                <h6>{props.location}</h6>
                <p>{props.description}</p>
            </Col>
            <Col xs={12} lg={6}>
                <Card.Img
                    className="image"
                    src={props.image}
                    />
                    <Row>
                        <Col>
                            <Card.Img
                            className="image"
                            src={props.image}
                            />
                        </Col>
                        <Col>
                            <Card.Img
                            className="image"
                            src={props.image}
                            />
                        </Col>
                    </Row>
            </Col>
        </Row>
    );
        
}

export default BlogDetails;