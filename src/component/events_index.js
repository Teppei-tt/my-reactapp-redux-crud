import React, { Component } from 'react';
import { connect } from 'react-redux'

import { increment, decrement } from '../actions'

class EventsIndex extends Component {
  componentDidMount() {
    console.log("Hii");
    this.props.readEvents()
  }

  render() {
    const props = this.props

    return (
      <React.Fragment>
        <div>count: { props.value } </div>
        <button  onClick={props.increment} >+1</button>
        <button  onClick={props.decrement} >-1</button>
      </React.Fragment>
    )
  }
}

const mapStateProps = state => ({ value: state.count.value })

const mapDispatchToProps = ({ readEvents })

export default connect(mapStateProps, mapDispatchToProps)(EventsIndex)
