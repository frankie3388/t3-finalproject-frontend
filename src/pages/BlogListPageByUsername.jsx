import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../styling/BlogListPage.css';
import SmallBlogCard from '../components/SmallBlogCard';
import BlogCard from '../components/BlogCard';
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../context/ApiContext";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


// This functional component is responsible for making a fetch request to the
// server based on the username provided in the searchbar
// and displaying all the blogs in the database with that username.
function BlogListByUsername() {
    // State to hold search results and loading state 
	const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

	// api URL 
	const {api} = useContext(ApiContext);

    // jwt token 
	const {jwt} = useContext(AuthContext);

	// route param for the username 
	const {username} = useParams();

    // Effect hook to fetch blogs based on the username
	useEffect(() => {
		console.log("Card search component has mounted! Making a fetch request now...");

		async function apiRequest() {
			try {
                // Construct query parameters for the API request
                let queryParams = new URLSearchParams({
                    q: username
                  });

                  // Fetch blogs from the server based on the username
				let response = await fetch(api + '/blog/multiple/username?' + queryParams, {
                    method: "GET",
                    // make sure user is authenticated with jwt
                    headers: {
                      "Authorization": jwt
                    }
                });
				let responseData = await response.json();
		
				setSearchResults(responseData.data);
                setLoading(false); // Set loading state to false after receiving blogs
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
            {/* Conditional rendering based on loading state */}
            {loading ? (
                <h2>Loading...</h2>
            ) : (
                <>
                    {searchResults && searchResults.length > 0 ? (
                        <Row className="large-cards">
                            {searchResults.slice(0, 2).map(result => (
                                <Col key={result._id} xs={11} sm={5} lg={5} className="cards">
                                    <BlogCard
                                        id={result._id}
                                        username={result.user.username}
                                        title={result.title}
                                        locationcity={result.locationcity}
                                        image={result.imageUrl}
                                    />
                                </Col>
                            ))}
                        </Row>
                    ) : (
                        <Row className="no-blogs-found">
                            <Col>
                                <p>No blogs found for the specified username.</p>
                            </Col>
                        </Row>
                    )}
                    {searchResults && searchResults.length > 0 && (
                        <Row xs={2} md={4} className="small-cards-container">
                            {searchResults.slice(2).map(result => (
                                <Col key={result._id}>
                                    <SmallBlogCard
                                        id={result._id}
                                        username={result.user.username}
                                        title={result.title}
                                        locationcity={result.locationcity}
                                        image={result.imageUrl}
                                    />
                                </Col>
                            ))}
                        </Row>
                    )}
                </>
            )}
        </Container>
    );
}

export default BlogListByUsername;