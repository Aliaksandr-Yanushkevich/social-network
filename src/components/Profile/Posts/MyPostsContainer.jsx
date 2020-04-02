import {
  addPostActionCreator,
  updateNewPostTextCreator
} from "../../../redux/profileReducer";
import { connect } from "react-redux";
import MyPosts from "./MyPosts";

// const MyPostsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {store => {
//         debugger;
//         const state = store.getState();

//         const addPost = () => {
//           store.dispatch(addPostActionCreator());
//         };

//         const updateNewPost = text => {
//           debugger;
//           store.dispatch(updateNewPostTextCreator(text));
//         };

//         return (
//           <Fragment>
//             <NewPost
//               newPostText={state.profileReducer.newPostText}
//               onAddPost={addPost}
//               onPostChange={updateNewPost}
//             />
//             <PostHistory posts={state.profileReducer.posts} />
//           </Fragment>
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };
const mapStateToProps = ({ profileReducer }) => {
  return {
    posts: profileReducer.posts,
    newPostText: profileReducer.newPostText,
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
