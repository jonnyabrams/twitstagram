import './posts.css'
import { PostsData } from '../../data/postsData'

const Posts = () => {
  return (
   <div className="posts">
     {PostsData.map((post, id) => {
       return <Post />
     })}
   </div>
  )
}

export default Posts