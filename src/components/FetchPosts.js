import React, { useState, useEffect } from 'react';
import StudentPosts from '../views/Posts';

export default function FetchPosts(props) { 
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://kekambas-bs.herokuapp.com/posts')
        .then(res => res.json())
        .then(data => {
            setPosts(data)
        })
    }, [])
}