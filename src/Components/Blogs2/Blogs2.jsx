import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs2 = () => {
    const[ blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-2/3  flex gap-4 grid grid-cols-2">
            
            {
                blogs.map(blog => <Blog key={blog.idx} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs2;