import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../styling/components/Blogdetails.css';

// The Blog details will display the title of the blog, username,
// location, description, and the images for the blog in the BlogPage file

function BlogDetails(props) {

    return (
        <Row className="blogdetails-content">
            <Col xs={12} lg={6}>
                <h6><span className="blogdetails-bold">Username:</span> {props.username}</h6>
                <h6><span className="blogdetails-bold">Title of Blog:</span> {props.title}</h6>
                <h6><span className="blogdetails-bold">Location:</span> {props.location}</h6>
                <p className="blogdetails-description"><span className="blogdetails-bold">Description:</span> {props.description}</p>
            </Col>
            <Col xs={12} lg={6} >
                <Carousel>
                    {props.images.map((image, index) => (
                        <div key={index} className="carousel-image-container">
                            <img src={image} alt={`Image ${index + 1}`} className="carousel-image" />
                        </div>
                    ))}
                </Carousel>
            </Col>
        </Row>
    );
        
}

export default BlogDetails;