import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


// This component consists of the like button, edit and delete blog buttons
// in the Blog page.
function LikeEditDeleteBlog() {
    return (
        <Row>
            <Col>
                <h6>Like</h6>
            </Col>
            <Col>
                <button>Edit Blog</button>
                <button>Delete Blog</button>
            </Col>
        </Row>
    )
}

export default LikeEditDeleteBlog;