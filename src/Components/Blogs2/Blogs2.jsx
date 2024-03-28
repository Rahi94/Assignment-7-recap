import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'; 

const Blogs2 = ({handleAddToCook}) => {
    const[ blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-2/3  flex gap-4 grid grid-cols-2">
            
            {
                blogs.map(blog => <Blog
                     key={blog.time} 
                     blog={blog}
                    handleAddToCook={handleAddToCook}>

                     </Blog>)
            }
        </div>
    );
};
Blogs2.propTypes = {
    handleAddToCook: PropTypes.func
}

export default Blogs2;