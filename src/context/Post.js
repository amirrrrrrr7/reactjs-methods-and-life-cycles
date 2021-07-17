import { useContext, useState, useEffect } from 'react'
import { useParams , useRouteMatch } from 'react-router'
import ThemeContext from './ThemeContext'

function Post (props) {

    const [post, setPost] = useState({})
    const theme = useContext(ThemeContext)
    const {id} = useParams()
    const match = useRouteMatch("/post/:id")

    console.log(id);
    console.log(match);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(json => setPost(json))
    },[id])

    return (
        <article style={{flex: 3, border: 'solid 1px', margin: '1em', padding: '1em', ...theme}}>
            <h1>{post.title}</h1>
            <p>
                {post.body}
            </p>
        </article>
    )
}

export default Post