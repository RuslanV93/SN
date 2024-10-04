import {
  addPostActionCreator,
  textAreaChangeActionCreator,
} from '../../state/ProfilePageReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.POSTS_DATA,
    newPostText: state.profilePage.newPostText,
    friendsList: state.friendsList.FRIENDS_DATA,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(textAreaChangeActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
