import PropTypes from "prop-types";
const Post = ({ post }) => {
      const { user, profile_image, content, image, likes } = post
      return (
            <div>
                  <div className=" flex flex-col gap-1 cursor-pointer">
                        <div>
                              <img
                                    className=" w-full h-72 object-cover rounded-xl"
                                    src={image}
                                    alt={content} />
                        </div>
                        <div className=" flex items-center justify-between gap-4">
                              <div className=" flex items-center gap-3 flex-nowrap ">
                                    <img className=" w-14 h-14 rounded-full" src={profile_image} alt="" />
                                    <div className=" ">
                                          <h1 className=" text-xl font-bold text-nowrap">{user}</h1>
                                          <p>{likes} Likes</p>
                                    </div>
                              </div>
                              <p className=" w-3/5">{content}</p>
                        </div>

                  </div>
            </div>
      );
};
Post.propTypes = {
      post: PropTypes.object.isRequired
}
export default Post;