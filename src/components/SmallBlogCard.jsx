import Card from 'react-bootstrap/Card';
import '../styling/components/SmallBlogCard.css';

function SmallBlogCard(props) {
    return (
        <Card className="small-blog-card">
            <Card.Img className="image" src="https://images.unsplash.com/photo-1682695795255-b236b1f1267d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Card.Body className="small-card-titles">
                <Card.Text className="small-card-title">{props.username}</Card.Text>
                <Card.Text className="small-card-title">{props.locationcity}</Card.Text>
                <Card.Text className="small-card-title">{props.title}</Card.Text>
            </Card.Body>
        </Card>    
    )
}

export default SmallBlogCard;