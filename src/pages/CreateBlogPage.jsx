import CreateBlogForm from "../components/CreateBlogForm";


function CreateBlog() {
    return (
        <div>
            <h3>Create Blog</h3>
            <h5>Username</h5>
            {/* Component for the actual form to create a new blog */}
            <CreateBlogForm />
        </div>
    )
}

export default CreateBlog;