import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router";

// This component consists of the like button, edit and delete blog buttons
// in the Blog page.
function LikeEditDeleteBlog(props) {

    const navigate = useNavigate();

    const editSubmit = (event) => {
        navigate("/editblog/" + props.blogId)
    }

    return (
        <Row>
            <Col>
                <h6>Like</h6>
            </Col>
            <Col>
                <button onClick={editSubmit}>Edit Blog</button>
                <button>Delete Blog</button>
            </Col>
        </Row>
    )
}

export default LikeEditDeleteBlog;