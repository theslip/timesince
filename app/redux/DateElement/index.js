import DateDiff from '../../utils/dateUtils'
import { isEmpty } from '../../utils/textUtils'

const DISABLE_INPUT = 'DISABLE_INPUT'
const ENABLE_INPUT = 'ENABLE_INPUT'
const UPDATE_DATE = 'UPDATE_DATE'

function disableInput () {
  return { type: DISABLE_INPUT }
}

function enableInput () {
  return { type: ENABLE_INPUT }
}

function updateDate (date) {
  return { type: UPDATE_DATE, date }
}

const initialState = {
  disabled: true,
  hidden: true,
  date: ''
}

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case DISABLE_INPUT:
      return {
        ...state,
        date: '',
        disabled: true
      }
    case ENABLE_INPUT:
      return {
        ...state,
        disabled: false
      }
    case UPDATE_DATE:
      return {
        ...state,
        date: action.date
      }
    default:
      return state
  }
}

export function getDate (event) {
  return (dispatch) => {
    const keyCode = event.keyCode || event.which
    if (keyCode === 13) {
      const lhs = new Date(event.target.value)
      const date = new DateDiff(lhs).toString()
      if (!isEmpty(date)) {
        dispatch(updateDate(date))
        dispatch(enableInput())
      } else {
        dispatch(disableInput())
      }
    }
  }
}
