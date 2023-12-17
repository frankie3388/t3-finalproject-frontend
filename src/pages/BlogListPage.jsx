import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../styling/BlogListPage.css';
import SmallBlogCard from '../components/SmallBlogCard';
import BlogCard from '../components/BlogCard';
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../context/ApiContext";


function BlogList() {

    // store blogs in useState
    const [blogs, setBlogs] = useState(null)

    // api URL 
	const {api} = useContext(ApiContext);

    useEffect(() => {
		console.log("Card search component has mounted! Making a fetch request now...");

		async function apiRequest(){
			try {
                let response = await fetch(api + "/blog/all");
          
                if (!response.ok) {
                   throw new Error(`HTTP error! Status: ${response.status}`);
                }
          
                let responseData = await response.json();
                setBlogs(responseData.Blog);
                console.log(responseData.Blog);
             } catch (error) {
                console.error("Error fetching blogs:", error);
             }
		}

		apiRequest();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
    
    return (
        <Container fluid className="blog-list-container">
            <Row className="title-container">
                <Col>
                <h2 className="bloglist-title">Blog List</h2>
                </Col>
            </Row>
            {blogs && blogs.length > 0 && 
            <Row className="large-cards">
                {/* display only the first two blog records */}
                {blogs.slice(0, 2).map(result => {
                    return <Col xs={11} sm={5} lg={5} className="cards">
                    <BlogCard 
                        id={result._id}
                        username={result.user.username}
                        title={result.title}
                        locationcity={result.locationcity}
                    />
                    </Col>
                })}
            </Row>
            }
            {blogs && blogs.length > 0 && 
            <Row xs={2} md={4} className="small-cards-container">
                {/* display all blogs after the first two */}
                {blogs.slice(2).map(result => {
                    return <Col>
                    <SmallBlogCard 
                        key={result._id}
                        username={result.user.username}
                        title={result.title}
                        locationcity={result.locationcity}
                    />
                    </Col>
                })}
            </Row>
            }
        </Container>
    )
}

export default BlogList;