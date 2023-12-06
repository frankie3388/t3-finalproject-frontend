import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styling/components/SmallBlogCard.css';

function SmallBlogCard() {
    return (
        <Row xs={2} md={4} className="small-cards-container">
            <Col>
                <Card className="small-blog-card">
                    <Card.Img className="image" src="https://images.unsplash.com/photo-1682695795255-b236b1f1267d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <Card.Body className="small-card-titles">
                        <Card.Subtitle className="small-card-title">Username</Card.Subtitle>
                        <Card.Subtitle className="small-card-title">Location</Card.Subtitle>
                        <Card.Subtitle className="small-card-title">Title of Blog</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="small-blog-card">
                    <Card.Img className="image" src="https://images.unsplash.com/photo-1682695795255-b236b1f1267d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <Card.Body className="small-card-titles">
                        <Card.Subtitle className="small-card-title">Username</Card.Subtitle>
                        <Card.Subtitle className="small-card-title">Location</Card.Subtitle>
                        <Card.Subtitle className="small-card-title">Title of Blog</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="small-blog-card">
                    <Card.Img className="image" src="https://images.unsplash.com/photo-1682695795255-b236b1f1267d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <Card.Body className="small-card-titles">
                        <Card.Subtitle className="small-card-title">Username</Card.Subtitle>
                        <Card.Subtitle className="small-card-title">Location</Card.Subtitle>
                        <Card.Subtitle className="small-card-title">Title of Blog</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="small-blog-card">
                    <Card.Img className="image" src="https://images.unsplash.com/photo-1682695795255-b236b1f1267d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <Card.Body className="small-card-titles">
                        <Card.Subtitle className="small-card-title">Username</Card.Subtitle>
                        <Card.Subtitle className="small-card-title">Location</Card.Subtitle>
                        <Card.Subtitle className="small-card-title">Title of Blog</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        
    )
}

export default SmallBlogCard;