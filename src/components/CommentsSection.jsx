import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styling/components/CommentsSection.css'


function CommentsSection() {
    return (
        <Row className="comments-container">
            <Col sm={12}>
                <h5>Comments</h5>
                <p>Comment1</p>
                <p>Comment2</p>
            </Col>
            <Col sm={12} className="add-comments-col">
                <input placeholder="Add Comments"></input>
                <button>Add</button>
            </Col>
        </Row>
    )
}

export default CommentsSection;