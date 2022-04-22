import { v4 as uuidv4 } from 'uuid'

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADDBOOK':
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          id: uuidv4(),
        },
      ]
    case 'REMOVEBOOK':
      return state.filter((book) => book.id !== action.id)
    default:
      return state
  }
}
