import React, { useReducer, createContext } from 'react'
import PropTypes from 'prop-types'
import { SET_STATE } from './actions'

const initialState = {
  singers: [],
  singer: '',
  isVote: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case SET_STATE:
      return {
        ...state,
        singers: action.singers,
        singer: action.singer,
        isVote: action.isVote,
      }
    default:
      return state
  }
}

export const Context = createContext()

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
}
