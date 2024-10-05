import { addPost, textAreaChange } from '../../state/ProfilePageReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.POSTS_DATA,
    newPostText: state.profilePage.newPostText,
    friendsList: state.friendsList.FRIENDS_DATA,
  };
};

const MyPostsContainer = connect(mapStateToProps, { textAreaChange, addPost })(MyPosts);

export default MyPostsContainer;
