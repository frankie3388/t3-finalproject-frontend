import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import '../styling/components/BlogCard.css';


function BlogCard(props) {

  return (
        <Card className="blog-card">
          <Card.Img className="image" src="https://images.unsplash.com/photo-1682695795255-b236b1f1267d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Card.Body className="card-titles">
            <Card.Text className="card-title">{props.username}</Card.Text>
            <Card.Text className="card-title">{props.locationcity}</Card.Text>
            <Card.Text className="card-title">{props.title}</Card.Text>
          </Card.Body>
        </Card>
  )
}

export default BlogCard;