import style from './Posts.css'
import Post from './Post'
import recipesData from '../recipes.json'

export default function Posts(){
    return (
        <div id="postsContainer">
            {recipesData.map((recipe, index) => (
                <Post post={recipe} number={index} />
            ))}
        </div>
    )
}