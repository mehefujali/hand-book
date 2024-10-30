import { useLoaderData } from "react-router-dom";
import Post from '../Post/Post'

const Posts = () => {
      const data = useLoaderData()
      console.log(data)
      return (
            <div className=" mt-20" >
                  <div className=" grid grid-cols-3 w-full h-full gap-6">
                        {
                              data.map(post => <Post key={post.post_id} post={post}></Post>)
                        }
                  </div>
            </div>
      );
};

export default Posts;