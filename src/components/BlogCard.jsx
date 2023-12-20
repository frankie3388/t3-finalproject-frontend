import Card from 'react-bootstrap/Card';
import '../styling/components/BlogCard.css';
import { Link } from 'react-router-dom';


function BlogCard(props) {
  // console.log("Username:", props.username);

  return (
      <Link to={`/blog/${props.id}`}>
        <Card className="blog-card">
          <Card.Img className="image" src={props.image} />
          <Card.Body className="card-titles">
            <Card.Text className="card-title">{props.username}</Card.Text>
            <Card.Text className="card-title">{props.locationcity}</Card.Text>
            <Card.Text className="card-title">{props.title}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
  )
}

export default BlogCard;