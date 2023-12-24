import Card from 'react-bootstrap/Card'; // Bootstrap Card component
import '../styling/components/BlogCard.css'; // Stylesheet for the BlogCard component
import { Link } from 'react-router-dom'; // React Router Link component for navigation


// This BlogCard component displays the information fetched from the BlogList
// component via props
function BlogCard(props) {
  return (
    // Creating a link to the dynamic blog route based on the id prop
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