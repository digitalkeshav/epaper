import {
  TAG_SELECTED,
  SHOW_LOGIN_SCREEN,
  SHOW_MESSAGES_SCREEN,
  NEW_MESSAGE_ADDED,
  SHOW_CONTACT_SCREEN,
  NEW_CONTACT_ADDED,
  CONTACT_SELECTED,
} from "./ActionType";

export const tagSelected = (category) => ({
  type: TAG_SELECTED,
  payload: category,
});

export const showLoginScreen = (shouldShow) => ({
  type: SHOW_LOGIN_SCREEN,
  payload: shouldShow,
});

export const showContactScreen = (shouldShow) => ({
  type: SHOW_CONTACT_SCREEN,
  payload: shouldShow,
});

export const showMessagesScreen = (shouldShow) => ({
  type: SHOW_MESSAGES_SCREEN,
  payload: shouldShow,
});

export const newMessageAdded = (message) => ({
  type: NEW_MESSAGE_ADDED,
  payload: message,
});

export const newContactAdded = (newContact) => ({
  type: NEW_CONTACT_ADDED,
  payload: newContact,
});

export const contactSelected = (contact) => ({
  type: CONTACT_SELECTED,
  payload: contact,
});
