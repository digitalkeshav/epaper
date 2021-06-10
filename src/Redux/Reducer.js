import {
  TAG_SELECTED,
  SHOW_CONTACT_SCREEN,
  SHOW_LOGIN_SCREEN,
  SHOW_MESSAGES_SCREEN,
  NEW_MESSAGE_ADDED,
  NEW_CONTACT_ADDED,
  CONTACT_SELECTED,
} from "./ActionType";
const initialState = {
  selectedCategory: "Entertainment",
  showLoginModal: false,
  messages: [
    {
      userName: "Lucy",
      recipient: "Lucy",
      imageurl: "https://milo.bootlab.io/img/avatars/3.png",
      postdate: "8 months ago",
      content: "hi....how are you",
      isFromMe: false,
    },
    {
      userName: "David",
      recipient: "David",
      imageurl:
        "https://icons-for-free.com/iconfiles/png/512/boy+man+person+user+woman+icon-1320085967769585303.png",
      postdate: "8 months ago",
      content: "hi....how are you",
      isFromMe: false,
    },
  ],
  showContactModal: false,
  contacts: [
    {
      title: "Lucy",
      imageurl: "https://milo.bootlab.io/img/avatars/3.png",
      postdate: "8 months ago",
      isSelected: false,
    },
    {
      title: "David",
      imageurl:
        "https://icons-for-free.com/iconfiles/png/512/boy+man+person+user+woman+icon-1320085967769585303.png",
      postdate: "8 months ago",
      isSelected: true,
    },
  ],
  selectedContact: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TAG_SELECTED: {
      return { ...state, selectedCategory: action.payload };
    }
    case SHOW_LOGIN_SCREEN: {
      return { ...state, showLoginModal: action.payload };
    }
    case SHOW_MESSAGES_SCREEN: {
      return { ...state, showMessagesModal: action.payload };
    }
    case SHOW_CONTACT_SCREEN: {
      return { ...state, showContactModal: action.payload };
    }
    case NEW_MESSAGE_ADDED: {
      return { ...state, messages: [...state.messages, action.payload] };
    }
    case NEW_CONTACT_ADDED: {
      return { ...state, contacts: [...state.contacts, action.payload] };
    }
    case CONTACT_SELECTED: {
      let title = action.payload.title;
      return {
        ...state,
        contacts: state.contacts.map((contact) => {
          contact.isSelected = false;
          if (contact.title === title) {
            contact.isSelected = true;
          }
          return contact;
        }),
      };
    }
    default:
      return state;
  }
};
export default reducer;
