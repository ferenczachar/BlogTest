import style from './Post.css'

export default function Post({ post, number }) {
    return (
        <a href={`${post.url}`} target='_blank'>
            <div key={number} className="post">
                    <img src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                    <h2>{post.Name}</h2>
                    <p className='desc'>{post.Description}</p>
            </div>
        </a>
    )
}