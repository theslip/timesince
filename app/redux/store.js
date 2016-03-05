import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import dateElement from './DateElement'
import thunk from 'redux-thunk'

export function configureStore (history, initialState) {
  const reducer = combineReducers({
    dateElement,
    routing: routerReducer
  })

  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        thunk
      )
    )
  )
  return store
}
