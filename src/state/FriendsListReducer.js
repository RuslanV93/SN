import Alla from '../images/Alla.jfif';
import Leha from '../images/Leha.jpg';
import Valera from '../images/Valera.jfif';
import Sveta from '../images/Sveta.jfif';
import Katya from '../images/Katya.jfif';
import Pasha from '../images/Pasha.jfif';
import Ruslan from '../images/Ruslan.jpg';

const SET_3_RANDOM_FRIENDS = 'SET-3-RANDOM-FRIENDS';

const initialState = {
  FRIENDS_DATA: [
    { id: 'id1', userName: 'Alla', lastMessage: 'Ты где?', profilePicture: Alla },
    { id: 'id2', userName: 'Leha', lastMessage: 'Привет', profilePicture: Leha },
    { id: 'id3', userName: 'Valera', lastMessage: 'Hi!', profilePicture: Valera },
    {
      id: 'id4',
      userName: 'Sveta',
      lastMessage: 'Как дела?',
      profilePicture: Sveta,
    },
    { id: 'id5', userName: 'Katya', lastMessage: 'хаха', profilePicture: Katya },
    { id: 'id6', userName: 'Pasha', lastMessage: 'нет', profilePicture: Pasha },
    { id: 'id0', userName: 'Ruslan', lastMessage: 'asss', profilePicture: Ruslan },
  ],
  randomFriends: [],
};
const FriendsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_3_RANDOM_FRIENDS:
      const randomFriends = [...state.FRIENDS_DATA]
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
      return { ...state, randomFriends };
    default:
      return state;
  }
};
export default FriendsListReducer;

export const set3RandomFriendsActionCreator = () => {
  return { type: SET_3_RANDOM_FRIENDS };
};
