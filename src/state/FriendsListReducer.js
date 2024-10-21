import Alla from '../images/Alla.jpg';
import Leha from '../images/Leha.jpg';
import Valera from '../images/Valera.jpg';
import Sveta from '../images/Sveta.jpg';
import Katya from '../images/Katya.jpg';
import Pasha from '../images/Pasha.jpg';
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

export const set3RandomFriends = () => {
  return { type: SET_3_RANDOM_FRIENDS };
};
