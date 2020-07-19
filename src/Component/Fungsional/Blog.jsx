import React from 'react'
import './CSS/Blog.css';

const Blog = (props) => {
    return <div className="blog-wrap">
        <img src="https://placeimg.com/640/480/tech" alt=""/>
        <p>{props.tanggal}</p>
        <h2>{props.judul}</h2>
        <p>{props.summary}</p>
       
    </div>
}

export default Blog;