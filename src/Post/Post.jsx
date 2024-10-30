import PropTypes from "prop-types";
const Post = ({ post }) => {
      const { post_id, user, profile_image, content, image, likes, comments } = post
      return (
            <div>
                  <div className=" flex flex-col gap-1">
                        <div>
                              <img
                                    className=" w-full h-72 object-cover rounded-xl"
                                    src={image}
                                    alt={content} />
                        </div>
                        <div className=" flex items-center">
                              <div className=" flex items-center gap-3">
                                    <img className=" w-14 h-14 rounded-full" src={profile_image} alt="" />
                                    <div className=" ">
                                          <h1 className=" text-xl font-bold">{user}</h1>
                                          <p>{likes} Likes</p>
                                    </div>
                              </div>
                        </div>

                  </div>
            </div>
      );
};
Post.propTypes = {
      post: PropTypes.object.isRequired
}
export default Post;