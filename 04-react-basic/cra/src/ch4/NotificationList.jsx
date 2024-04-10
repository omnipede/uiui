import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
  {
    id: 1,
    message: "Hello world",
  },
  {
    id: 2,
    message: "Hello world 2"
  },
  {
    id: 3,
    message: "Hello world 3"
  },
]


let timer = null;
class NotificationList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      notifications: []
    }
  }

  componentDidMount() {
    const { notifications } = this.state;
    timer = setInterval(() => {
      if (notifications.length < reservedNotifications.length) {
        const index = notifications.length;
        notifications.push(reservedNotifications[index]);
        this.setState({
          notifications: notifications
        })
      } else {
        clearInterval(timer)
      }
    }, 3000);
  }

  render() {
    return (
      <div>
        {
          this.state.notifications.map(notification => {
            return <Notification key={notification.id} id={notification.id} message={notification.message}></Notification>
          })
        }
      </div>
    )
  }
}

export default NotificationList