import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import DateElement from '../components/DateElement/DateElement'
import * as ActionCreators from '../redux/DateElement'

function mapStateToProps (state) {
  return {
    date: state.dateElement.date,
    disabled: state.dateElement.disabled
  }
}

function mapDispatchToProps (dispatch) {
  return { actions: bindActionCreators(ActionCreators, dispatch) }
}

class Index extends React.Component {
  componentDidMount () {
    document.body.style.backgroundColor = ' #3498db'
  }
  componentWillUnmount () {
    document.body.style.backgroundColor = null
  }
  static propTypes = {
    date: PropTypes.string,
    disabled: PropTypes.bool,
    title: PropTypes.string
  }
  static defaultProps = {
    title: 'Timesince - A Date Calculator'
  }
  render () {
    const { date, disabled, actions: { getDate } } = this.props
    return (
      <div id='index'>
        <DateElement date={date} disabled={disabled} getDate={getDate} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
