import React from "react";

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    console.log(`${this.props.id} componentDidMount()`)
  }

  componentDidUpdate() {
    console.log(`${this.props.id} componentDidUpdate()`)
  }

  componentWillUnmount() {
    console.log(`${this.props.id} componentWillUnmount()`)
  }

  render() {
    return (
      <div>
        <span>{this.props.message}</span>
      </div>
    )
  }
}

export default Notification
