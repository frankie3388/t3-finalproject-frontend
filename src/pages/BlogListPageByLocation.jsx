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
// server based on the location provided in the searchbar
// and displaying all the blogs in the database with that location.
function BlogListByLocation() {
    // State to hold search results and loading state
	const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

	// api URL 
	const {api} = useContext(ApiContext);

    // jwt token 
	const {jwt} = useContext(AuthContext);

	// route param for the location name 
	const {location} = useParams();

    // Effect hook to fetch blogs based on the location
	useEffect(() => {
		console.log("Card search component has mounted! Making a fetch request now...");

		async function apiRequest() {
			try {
                // Construct query parameters for the API request
				let queryParams = new URLSearchParams({
					locationToFilterBy: location,
				});
		
                // Fetch blogs from the server based on the location
				let response = await fetch(api + '/blog/multiple/location?' + queryParams, {
                    method: "GET",
                    headers: {
                      "Authorization": jwt
                    }
                });
				let responseData = await response.json();
                // console.log(responseData)
		
				setSearchResults(responseData.data);
                setLoading(false); // Set loading state to false after receiving blogs
				console.log(searchResults);
			} catch (error) {
				console.error("Error fetching blogs:", error);
			}
		}

		apiRequest();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location]);

    return (
        <Container fluid className="blog-list-container">
            <Row className="title-container">
                <Col>
                    <h2 className="bloglist-title">Blog List - {location}</h2>
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
                                <p>No blogs found for the specified location.</p>
                            </Col>
                        </Row>
                    )}
                    {searchResults && searchResults.length > 0 && (
                        <Row xs={2} md={4} className="small-cards-container">
                            {searchResults.slice(2).map(result => (
                                <Col key={result._id}>
                                    <SmallBlogCard
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

export default BlogListByLocation;