import Container from 'react-bootstrap/Container';
import BlogCard from '../components/BlogCard';
import SmallBlogCard from '../components/SmallBlogCard';

function Dashboard() {
    return (
        <Container>
            <h2>User's Dashboard</h2>
            <h4>User's Blogs</h4>
            <BlogCard />
            <h4>Suggested Blogs</h4>
            <SmallBlogCard />
            <h4>Suggested Blogs</h4>
            <SmallBlogCard />
        </Container>
    )
}

export default Dashboard;