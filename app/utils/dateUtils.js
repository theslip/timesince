import moment from 'moment'

const singularUnits = ['year', 'month', 'week', 'day', 'hour', 'minute']

function isSingular (diff, value, index) {
  if (diff === 1) {
    return singularUnits[index]
  } else {
    return value
  }
}

class DateDiff {
  constructor (lhs, rhs = moment(), unit = ['years', 'months', 'weeks', 'days', 'hours', 'minutes']) {
    this.lhs = moment(lhs)
    this.rhs = rhs
    this.unit = unit
    this.result = this.result || this.getDifference()
    this.output = ''
  }
  getDifference () {
    const _result = new Map()
    this.unit.forEach((value, index) => {
      const diff = this.rhs.diff(this.lhs, value)
      const newUnit = isSingular(diff, value, index)
      this.lhs.add(moment.duration(diff, value))
      if (diff) { _result.set(newUnit, diff) }
    })
    return _result
  }
  toString () {
    let counter = 0
    this.result.forEach((value, key) => {
      this.output = this.output.concat(`${value + ' ' + key}`)
      counter++
      if (counter !== this.result.size) {
        this.output += ', '
      }
    })
    return this.output
  }
}

export default DateDiff
