import { createContext, useReducer } from "react";
import { reducer } from './reducer'

const initialState = {
   films: [],
   loading: true,
}

export const FilmsContext = createContext()

export const ContextProvider = ({ children }) => {
   const [value, dispatch] = useReducer(reducer, initialState)

   value.setFilms = (data) => {
      dispatch({ type: 'SET_FILMS', payload: data })
   }
   return <FilmsContext.Provider value={value}>
      {children}
   </FilmsContext.Provider>
}