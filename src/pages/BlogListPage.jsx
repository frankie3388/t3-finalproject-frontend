import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../styling/BlogListPage.css';
import SmallBlogCard from '../components/SmallBlogCard';
import BlogCard from '../components/BlogCard';


function BlogList() {
    
    return (
        <Container fluid className="blog-list-container">
            <Row className="title-container">
                <Col>
                <h2 className="bloglist-title">Blog List</h2>
                </Col>
            </Row>
            <BlogCard />
            <SmallBlogCard />
        </Container>
    )
}

export default BlogList;