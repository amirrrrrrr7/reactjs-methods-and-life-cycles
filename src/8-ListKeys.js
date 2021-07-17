import React, {Component} from 'react'

const posts = [
    {id: 1,title: 'Post1'},
    {id: 2,title: 'Post2'},
    {id: 3,title: 'Post3'},
    {id: 4,title: 'Post4'}
]

export default class Items extends Component {
    render() {
        return (
            <div>
                <ul>
                    {posts.map(post =>
                        <div key={post.id}>
                            <Item post={post} />
                        </div>
                        )}
                </ul>
            </div>
        )
    }
}

class Item extends Component {
    render() {
        return (
            <li>
                {this.props.post.title}
            </li>
        )
    }
}