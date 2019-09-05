import React from 'react'
import "../styles/global.sass"
import Calendar from '../components/calendar'
import { connect } from "react-redux"
import {eventAdd, eventChange, eventRemove} from '../store/actions/event'
import Popup from '../components/popup'
import { popupOpen, popupClose } from "../store/actions/popup"
import Modal from 'react-modal'


function Home({events, eventChange, eventRemove, popup, popupOpen}){
  const eventClick = (info) => {
    const modalParams = { 
      status : true,
      title : info.event.title,
      start : info.event.start.toISOString(),
      end : info.event.end.toISOString(),
      id : info.event.id,
      x : info.jsEvent.x,
      y : info.jsEvent.y,
    }
    console.log(info.event.start.toISOString())
    console.log(info)
    popupOpen(modalParams)
    info.event.remove()
  }

  const eventDrop = (info) => {
    console.log(info)
    eventChange(info.event)
  }


  const select =(info) => {
    const modalParams = { 
      status : true,
      start : info.start.toISOString(),
      end : info.end.toISOString(),
      x : info.jsEvent.x,
      y : info.jsEvent.y,
    }
    console.log(info)
    popupOpen(modalParams)
  }
  Modal.setAppElement('#__next')
  const list = 
  [
    {
      icon: "home",
      title : "Home",
    },
    {
      icon: "equalizer",
      title : "Dashboard",
    },
    {
      icon: "mail_outline",
      title : "Inbox",
    },
    {
      icon: "notes",
      title : "Products",
    },
    {
      icon: "dashboard",
      title : "Invoices",
    },
    {
      icon: "person_outline",
      title : "Customers",
    },
    {
      icon: "forum",
      title : "Chat Room",
    },
    {
      icon: "today",
      title : "Calendar",
    },
    {
      icon: "device_unknown",
      title : "Help Center",
    },
    {
      icon: "settings_applications",
      title : "Settings",
    },
  ]
  const myRef = React.createRef();
  return(
  <div className="main">
    <div className="sidebar">
        <div className="logo">
            IMPEKABLE
        </div>
        <div className="list">
          {list.map((item,i)=>(
            <button key={i}><i className="material-icons">{item.icon}</i>{item.title}</button>
          ))}
        </div>
    </div>
    <div className="content">
      <div className="top-bar">
        <div className="search-pool">
          <input/>
          <i className="material-icons search">search</i>
        </div>
        <div className="actions-pool">
          <button><i className="material-icons">device_unknown</i></button>
          <button><i className="material-icons">forum</i></button>
          <button><i className="material-icons">notification_important</i></button>

          <select>
            <option>John Doe</option>
          </select>
          <img src="/static/Avatar.png" />
        </div>
      </div>
      <div className="current-window">Calendar</div>
      <div className="calendar">
        <Calendar 
          events={events} 
          eventClick={eventClick} 
          select={select}
          myRef={myRef}
          eventDrop={eventDrop}
        />
      </div>
    </div>
    <Modal isOpen={popup.status} style={{background : "white"}} >
      <Popup></Popup>
    </Modal>
  </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    eventAdd: (event) => dispatch(eventAdd(event)),
    eventRemove: (event) => dispatch(eventRemove(event)),
    eventChange: (event) => dispatch(eventChange(event)),
    popupOpen: (modalParams) => dispatch(popupOpen(modalParams)),
    popupClose: () => dispatch(popupClose(false)),
  }
}

const mapStateToProps = state => {
  return {
    events: state.events,
    popup : state.popup
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)