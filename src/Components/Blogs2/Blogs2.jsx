import { useEffect, useState } from "react";


const Blogs2 = () => {
    const[ blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-2/3 border-2 border-red-600">
            <h3>blogs</h3>
        </div>
    );
};

export default Blogs2;