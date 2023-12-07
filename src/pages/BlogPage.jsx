import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import '../styling/BlogPage.css';
import BlogDetails from '../components/BlogDetails';
import LikeEditDeleteBlog from '../components/LikeEditDeleteBlog';
import CommentsSection from '../components/CommentsSection';
import GoogleMaps from '../components/GoogleMaps';

function Blog() {
    return (
        <Container fluid className="blogpage-container">
            <Header />
            <Row className="">
                <Col>
                <h2 className="blogpage-title">Blog Page</h2>
                </Col>
            </Row>
            <BlogDetails/>
            <LikeEditDeleteBlog />
            <CommentsSection />
            <GoogleMaps />
            <NavBar />
        </Container>
    )
}

export default Blog;