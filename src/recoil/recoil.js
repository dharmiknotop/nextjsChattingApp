import { atom } from 'recoil'
import { AUTH_ATOM_KEY, THE_OTHER_USER, THE_SPECIFIC_MESSAGE } from './constant'

export const authUserAtom = atom({
  key: AUTH_ATOM_KEY,
  default: {
    id: '',
    name: '',
    email: '',
    logoUrl: '',
    isLoggedIn: '',
  },
})
export const theOtherUser = atom({
  key: THE_OTHER_USER,
  default: {
    id: '',
    name: '',
    chatRoomId: '',
  },
})

export const messageId = atom({
  key: THE_SPECIFIC_MESSAGE,
  default: {
    id: '',
  },
})
