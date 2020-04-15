import { onAddPost} from "../../../redux/profileReducer";
import { connect } from "react-redux";
import MyPosts from "./MyPosts";

const mapStateToProps = ({ profilePage }) => {
  const { posts } = profilePage;
  return {
    posts: posts,
  };
};

const MyPostsContainer = connect(mapStateToProps, { onAddPost })(
  MyPosts
);

export default MyPostsContainer;
