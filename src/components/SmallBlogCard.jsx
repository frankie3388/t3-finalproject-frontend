import Card from 'react-bootstrap/Card';
import '../styling/components/SmallBlogCard.css';

function SmallBlogCard(props) {
    return (
        <Card className="small-blog-card">
            <Card.Img className="image" src={props.image} />
            <Card.Body className="small-card-titles">
                <Card.Text className="small-card-title">{props.username}</Card.Text>
                <Card.Text className="small-card-title">{props.locationcity}</Card.Text>
                <Card.Text className="small-card-title">{props.title}</Card.Text>
            </Card.Body>
        </Card>    
    )
}

export default SmallBlogCard;