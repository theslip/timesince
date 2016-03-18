import moment from 'moment'

const units = ['years', 'months', 'weeks', 'days', 'hours', 'minutes']
const singularUnits = ['year', 'month', 'week', 'day', 'hour', 'minute']

const getUnit = (diff, unit, index) => diff === 1 ? singularUnits[index] : unit
const getDiff = (lhs, rhs, unit) => rhs.diff(lhs, unit)
const addDiffToRemainder = (lhs, rhs, unit, diff) => lhs.add(moment.duration(diff, unit))

function getTimeBetweenDates (lhs, rhs = moment(), diffArr = []) {
  diffArr = units.map((unit, index) => {
    const diff = getDiff(...arguments, unit)
    addDiffToRemainder(...arguments, unit, diff)
    const newUnit = getUnit(diff, unit, index)
    if (diff) { return { [newUnit]: diff } }
  }).filter((unit, index) => unit)
  console.log(diffArr)
  return diffArr
}

export class DateDiff {
  constructor (lhs, rhs = moment()) {
    this.lhs = moment(lhs)
    this.rhs = rhs
    this.date = getTimeBetweenDates(this.lhs, this.rhs)
  }
}

export default DateDiff
