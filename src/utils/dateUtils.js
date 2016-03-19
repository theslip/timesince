import moment from 'moment'

const units = ['years', 'months', 'weeks', 'days', 'hours', 'minutes']
const singularUnits = ['year', 'month', 'week', 'day', 'hour', 'minute']

const getUnit = (diff, unit, index) => diff === 1 ? singularUnits[index] : unit
const getDiff = (lhs, rhs, unit) => rhs.diff(lhs, unit)
const addDiffToRemainder = (lhs, rhs, unit, diff) => lhs.add(diff, unit)

function getTimeBetweenDates (lhs, rhs) {
  const diffArr = units.map((unit, index) => {
    const diff = getDiff(...arguments, unit)
    addDiffToRemainder(...arguments, unit, diff)
    const newUnit = getUnit(diff, unit, index)
    if (diff) { return { [newUnit]: Math.abs(diff) } }
  }).filter((unit, index) => unit)
  return diffArr
}

export class DateDiff {
  constructor (lhs, rhs = moment(new Date())) {
    this.lhs = moment(lhs)
    this.rhs = rhs
    this.date = getTimeBetweenDates(this.lhs, this.rhs)
  }
}

export default DateDiff
