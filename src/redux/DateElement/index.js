import DateDiff from '../../utils/dateUtils'
import { isEmpty } from '../../utils/textUtils'

const UPDATE_DATE = 'UPDATE_DATE'

function updateDate (date) {
  return { type: UPDATE_DATE, date }
}

const initialState = {
  date: []
}

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
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
      const date = new DateDiff(lhs).date
      if (!isEmpty(date)) {
        dispatch(updateDate(date))
      }
    }
  }
}
