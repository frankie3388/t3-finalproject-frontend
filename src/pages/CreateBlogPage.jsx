import CreateBlogForm from "../components/CreateBlogForm";
import '../styling/CreateBlogPage.css';


function CreateBlog() {
    return (
        <div>
            <h3 className="create-blog-heading">Create Blog</h3>
            {/* Component for the actual form to create a new blog */}
            <CreateBlogForm />
        </div>
    )
}

export default CreateBlog;