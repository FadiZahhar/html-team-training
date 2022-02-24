export const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const newpeople = [...state.people, action.payload]
    return {
      ...state,
      people: newpeople,
      isModelOpen: true,
      modelContent: 'person added',
    }
  }
  if (action.type == 'NO_VALUE') {
    return { ...state, isModelOpen: true, modelContent: 'no entry is found' }
  }
  if (action.type == 'CLOSE_MODEL') {
    return { ...state, isModelOpen: false }
  }
  if (action.type == 'REMOVE_ITEM') {
    const newpeople = state.people.filter((person) => {
      return person.id !== action.payload
    })
    return {
      ...state,
      isModelOpen: true,
      modelContent: 'person removed',
      people: newpeople,
    }
  }

  throw new Error('no matching')
}
