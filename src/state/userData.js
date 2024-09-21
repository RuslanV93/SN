import Leha from '../images/Leha.jpg';
import Pasha from '../images/Pasha.jfif';
import Alla from '../images/Alla.jfif';
import Valera from '../images/Valera.jfif';
import Sveta from '../images/Sveta.jfif';
import Katya from '../images/Katya.jfif';
import Ruslan from '../images/Ruslan.jpg';

const USERS_DATA = [
  { id: 'id1', userName: 'Alla', lastMessage: 'Ты где?', profilePicture: Alla },
  { id: 'id2', userName: 'Leha', lastMessage: 'Привет', profilePicture: Leha },
  { id: 'id3', userName: 'Valera', lastMessage: 'Hi!', profilePicture: Valera },
  { id: 'id4', userName: 'Sveta', lastMessage: 'Как дела?', profilePicture: Sveta },
  { id: 'id5', userName: 'Katya', lastMessage: 'хаха', profilePicture: Katya },
  { id: 'id6', userName: 'Pasha', lastMessage: 'нет', profilePicture: Pasha },
  { id: 'id0', userName: 'Ruslan', lastMessage: 'asss', profilePicture: Ruslan },
];

class Chat {
  constructor(id, participants, participantsNames, messages) {
    this.id = id;
    this.participants = participants;
    this.participantsNames = participantsNames;
    this.messages = messages;
  }

  lastMessageMethod() {
    return this.messages[this.messages.length - 1].text;
  }

  lastMessageTimestampMethod() {
    return this.messages[this.messages.length - 1].timestamp;
  }
}

const USERS_MESSAGES = [
  new Chat(
    USERS_DATA[5].id,
    ['Me', USERS_DATA[5].id],
    ['Me', USERS_DATA[5].userName],
    [
      {
        id: 'msg1',
        senderId: USERS_DATA[5].id,
        text: 'YA PASHA',
        timestamp: 1630455600000,
      },
      {
        id: 'msg2',
        senderId: USERS_DATA[6].id,
        text: 'da',
        timestamp: 1630455603456,
      },
    ]
  ),
  new Chat(
    USERS_DATA[0].id,
    ['Me', USERS_DATA[0].id],
    ['Me', USERS_DATA[0].userName],
    [
      {
        id: 'msg1',
        senderId: USERS_DATA[0].id,
        text: 'Привет!',
        timestamp: 1630455600000,
      },
      {
        id: 'msg2',
        senderId: USERS_DATA[6].id,
        text: 'Привет, как дела у тебя? Я сегодня сходила в магазин, потому напочту, потом в торговый центр, потом пошла домой Привет, как дела у тебя? Я сегодня сходила в магазин, потому на почту, потом в торговый центр, потом пошла домойПривет, как дела у тебя? Я сегодня сходила в магазин, потому на почту, потом в торговый центр, потом пошла домойПривет, как дела у тебя? Я сегодня сходила в магазин, потому на почту, потом в торговый центр, потом пошла домой',
        timestamp: 1630455603456,
      },
      {
        id: 'msg3',
        senderId: USERS_DATA[0].id,
        text:
          'aaaaaaaaaaaaя сходила в магазин, потому на почту,торговый центр, потом' +
          ' пошла' +
          ' домой Привет, как дела у тебя? Я сегодня сходила в магазин, потому на почту, потом в торговый центр, потом пошла домойПривет, как дела у тебя? Я сегодня сходила в магазин, потому на почту, потом в торговый центр, потом пошла домойПривет, как дела у тебя? Я сегодня сходила в магазин, потому на почту, потом в торговый центр, потом пошла домой',
        timestamp: 1630455603456,
      },
      {
        id: 'msg3',
        senderId: USERS_DATA[6].id,
        text: 'aaaasdsxzcxzcxzв магазин, потому на почту,торговый центр, потом пошладомой Привет, как дела у тебя? Я сегодня сходила в магазин, потому на почту, потом в торговый центр, потом пошла домойПривет, как дела у тебя? Я сегодня сходила в магазин, потому на почту, потом в торговый центр, потом пошла домойПривет, как дела у тебя? Я сегодня сходила в магазин, потому на почту, потом в торговый центр, потом пошла домой',
        timestamp: 1630455603456,
      },
      {
        id: 'msg4',
        senderId: USERS_DATA[6].id,
        text:
          'aasdcxzcxzв магазин, потому на почту,торговый центр,' +
          ' потомasdasdasdasdasdasdasda' +
          ' пошладомой' +
          ' Привет, как дела у тебя? Я сегодня сходила в магазин, потому на почту, потом в торговый центр, потом пошла домойПривет, как дела у тебя? Я сегодня сходила в магазин, потому на почту, потом в торговый центр, потом пошла домойПривет, как дела у тебя? Я сегодня сходила в магазин, потому на почту, потом в торговый центр, потом пошла домой',
        timestamp: 1630455603456,
      },
      {
        id: 'msg5',
        senderId: USERS_DATA[6].id,
        text:
          'aasdcxzcxzв магазин, потому на почту,торговый центр,' +
          ' потомasdasdasdasdasdasdasda' +
          ' пошладомой' +
          ' Привет, как дела у тебя? Я сегодня сходила в магазин, потому на почту, потом в торговый центр, потом пошла домойПривет, как дела у тебя? Я сегодня сходила в магазин, потому на почту, потом в торговый центр, потом пошла домойПривет, как дела у тебя? Я сегодня сходила в магазин, потому на почту, потом в торговый центр, потом пошла домой',
        timestamp: 1630455603456,
      },
      {
        id: 'msg6',
        senderId: USERS_DATA[6].id,
        text:
          'aasdcxzcxzв магазин, потому на почту,торговый центр,' +
          ' потомasdasdasdasdasdasdasda' +
          ' пошладомой' +
          ' Привет, как дела у тебя? Я сегодня сходила в магазин, потому на почту, потом в торговый центр, потом пошла домойПривет, как дела у тебя? Я сегодня сходила в магазин, потому на почту, потом в торговый центр, потом пошла домойПривет, как дела у тебя? Я сегодня сходила в магазин, потому на почту, потом в торговый центр, потом пошла домой',
        timestamp: 1630455603456,
      },
    ]
  ),

  new Chat(
    USERS_DATA[2].id,
    ['Me', USERS_DATA[2].id],
    ['Me', USERS_DATA[2].userName],
    [
      {
        id: 'msg1',
        senderId: USERS_DATA[2].id,
        text: 'Пaaaaaaaa',
        timestamp: 1630455600000,
      },
      {
        id: 'msg2',
        senderId: USERS_DATA[6].id,
        text: 'Что?',
        timestamp: 1630455603456,
      },
    ]
  ),
  new Chat(
    USERS_DATA[1].id,
    ['Me', USERS_DATA[1].id],
    ['Me', USERS_DATA[1].userName],
    [
      {
        id: 'msg1',
        senderId: USERS_DATA[1].id,
        text: 'Hey there',
        timestamp: 1630455600000,
      },
      {
        id: 'msg2',
        senderId: USERS_DATA[6].id,
        text: 'Hi!',
        timestamp: 1630455603456,
      },
    ]
  ),
  new Chat(
    USERS_DATA[3].id,
    ['Me', USERS_DATA[3].id],
    ['Me', USERS_DATA[3].userName],
    [
      {
        id: 'msg1',
        senderId: USERS_DATA[3].id,
        text: 'хахахаха',
        timestamp: 1630455600000,
      },
      {
        id: 'msg2',
        senderId: USERS_DATA[6].id,
        text: 'ыыыыыыыы',
        timestamp: 1630455603456,
      },
    ]
  ),
  new Chat(
    USERS_DATA[4].id,
    ['Me', USERS_DATA[4].id],
    ['Me', USERS_DATA[4].userName],
    [
      {
        id: 'msg1',
        senderId: USERS_DATA[4].id,
        text: 'aassssss',
        timestamp: 1630455600000,
      },
      {
        id: 'msg2',
        senderId: USERS_DATA[6].id,
        text: 'qwe',
        timestamp: 1630455603456,
      },
    ]
  ),
];

export let state = {
  profilePage: {
    POSTS_DATA: [
      { userID: 'id1', postID: 1, message: 'Hi, this is my first post', likes: 40 },
      { userID: 'id2', postID: 2, message: 'Hello', likes: 30 },
      { userID: 'id5', postID: 3, message: 'How r u?', likes: 1 },
      { userID: 'id3', postID: 4, message: 'hoho u found me', likes: 2 },
      { userID: 'id4', postID: 5, message: 'ETO YA', likes: 223 },
    ],
  },
  messagesPage: {
    USERS_DATA,
    USERS_MESSAGES,
  },
};
