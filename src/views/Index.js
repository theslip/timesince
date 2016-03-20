import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import DateElement from '../components/DateElement/DateElement'
import IconToolBar from '../components/IconToolBar/IconToolBar'
import * as ActionCreators from '../redux/DateElement'

function mapStateToProps (state) {
  return {
    date: state.dateElement.date
  }
}

function mapDispatchToProps (dispatch) {
  return { actions: bindActionCreators(ActionCreators, dispatch) }
}

class Index extends Component {
  componentDidMount () {
    document.body.style.backgroundColor = ' #3498db'
  }
  componentWillUnmount () {
    document.body.style.backgroundColor = null
  }
  static propTypes = {
    date: PropTypes.array,
    title: PropTypes.string
  }
  static defaultProps = {
    title: 'Timesince - A Date Calculator'
  }
  render () {
    const { date, actions: { getDate } } = this.props
    return (
      <div id='index'>
        <IconToolBar />
        <DateElement date={date} getDate={getDate} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
