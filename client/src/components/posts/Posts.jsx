import "./posts.css";
import Post from "../post/Post";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTimelinePosts } from "../../redux/actions/postAction";

const Posts = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);
  const params = useParams();

  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);

  if (!posts) return "Nothing to see here";
  if (params.id) posts = posts.filter((post) => post.userId === params.id);

  return (
    <div className="posts">
      {loading
        ? "Fetching posts..."
        : posts.map((post, id) => {
            return <Post key={id} data={post} id={id} />;
          })}
    </div>
  );
};

export default Posts;
