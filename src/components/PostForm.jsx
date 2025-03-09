import './PostForm.css'
const PostForm = () => {
    return (
        <>
        <div className="container">
        <div className='inputContainer' >
            <label htmlFor="image-inp">Input your image here:</label>
            <input type="text" name="image-inp" />
            <label htmlFor="image-inp">Input your title here:</label>
            <input type="text" name="title-inp" />
            <label htmlFor="image-inp">Input your description here:</label>
            <input type="text" name="desc-inp" />
            <label htmlFor="date-inp">Input your date here</label>
            <input type="date" />
        </div>
        </div>
        </>
    )
}

export default PostForm