import {
  addPostActionCreator,
  updateNewPostTextCreator
} from "../../../redux/profileReducer";
import { connect } from "react-redux";
import MyPosts from "./MyPosts";

const mapStateToProps = ({ profilePage }) => {
  const { posts, newPostText } = profilePage;
  return {
    posts: posts,
    newPostText: newPostText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPost: () => {
      dispatch(addPostActionCreator());
    },
    onPostChange: text => {
      const action = updateNewPostTextCreator(text);
      dispatch(action);
    }
  };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
