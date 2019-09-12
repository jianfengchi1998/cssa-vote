import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import { createContext } from 'react'
import { SET_SINGERS, CLEAN, SET_SINGER } from './actions'

const initialState = {
    singers: [],
    singer: '',
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_SINGERS:
            return {
                ...state,
                singers: action.singers,
                singer: action.singers[0],
            }
        case CLEAN:
            return {
                ...state,
                singers: [],
                singer: '',
            }
        case SET_SINGER:
            return { ...state, singer: action.singer }
        default:
            return state
    }
}

export const Context = createContext()

export const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <Context.Provider value={{ state, dispatch}}>
            {children}
        </Context.Provider>
    )
}

Provider.propTypes = {
    children: PropTypes.element.isRequired
}