import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../styling/BlogListPage.css';
import SmallBlogCard from '../components/SmallBlogCard';
import BlogCard from '../components/BlogCard';
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../context/ApiContext";
import { useParams } from "react-router-dom";



function BlogListByUsername() {
    // search results 
	const [searchResults, setSearchResults] = useState([]);

	// api URL 
	const {api} = useContext(ApiContext);

	// route param for the username 
	const {username} = useParams();

	useEffect(() => {
		console.log("Card search component has mounted! Making a fetch request now...");

		async function apiRequest() {
			try {
                let queryParams = new URLSearchParams({
                    q: username
                  });

				let response = await fetch(api + '/blog/multiple/username?' + queryParams);
				let responseData = await response.json();
		
				setSearchResults(responseData.data);
				// console.log(searchResults);
			} catch (error) {
				console.error("Error fetching blogs:", error);
			}
		}

		apiRequest();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [username]);

    return (
        <Container fluid className="blog-list-container">
            <Row className="title-container">
                <Col>
                <h2 className="bloglist-title">Blog List - {username}</h2>
                </Col>
            </Row>
            {searchResults && searchResults.length > 0 && 
            <Row className="large-cards">
                {/* display only the first two blog records */}
                {searchResults.slice(0, 2).map(result => {
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
            {searchResults && searchResults.length > 0 && 
            <Row xs={2} md={4} className="small-cards-container">
                {/* display all searchResults after the first two */}
                {searchResults.slice(2).map(result => {
                    return <Col>
                    <SmallBlogCard 
                        id={result._id}
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

export default BlogListByUsername;