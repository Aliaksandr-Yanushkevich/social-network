import { onAddPost, onPostChange } from "../../../redux/profileReducer";
import { connect } from "react-redux";
import MyPosts from "./MyPosts";

const mapStateToProps = ({ profilePage }) => {
  const { posts, newPostText } = profilePage;
  return {
    posts: posts,
    newPostText: newPostText,
  };
};

const MyPostsContainer = connect(mapStateToProps, { onAddPost, onPostChange })(
  MyPosts
);

export default MyPostsContainer;
