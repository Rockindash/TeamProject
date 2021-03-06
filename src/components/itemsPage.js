import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"

import ItemsList from "../components/itemsList"
import ToggleButton from "../components/toggleBtn"

import axios from "axios"

class ItemsPage extends React.Component {
  openForm = () => {
    this.props.handleForm(true)

    //Setting Date
    var currentHour = new Date().getHours()
    var currentMin = new Date().getMinutes()
    var currentDate = new Date().getDate()
    var currentMonth = new Date().getMonth()
    var currentYear = new Date().getFullYear()
    this.props.setDate(
      currentDate +
        "-" +
        currentMonth +
        "-" +
        currentYear +
        ", " +
        currentHour +
        ":" +
        currentMin
    )
  }

  syncData = (items, field) => {
    console.log("Syncing")
    
    // create new object that contains all props from field and items to pass to api
    const allData = { ...items, ...field }

    // Put backend code over here
    axios
      .post("http://localhost:5000/api/items", allData)
      .then(() => console.log(allData))
      .catch(err => console.log(err))

    //field - Refernce for fieldReducer
  }

  render() {
    return (
      <Wrapper>
        <h1>Items</h1>
        <ItemsList />
        <ToggleButton />
        <AddBtn onClick={() => this.openForm()}>
          <svg
            width="202"
            height="52"
            viewBox="0 0 202 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="2" y="2" width="200" height="50" rx="5" fill="#2D8CD8" />
            <rect width="200" height="50" rx="5" fill="#4AABF8" />
            <path
              d="M52.5801 30.9395V27.2188H48.8301V24.6504H52.5801V20.9297H55.0801V24.6504H58.8398V27.2188H55.0801V30.9395H52.5801ZM78.8691 33H75.7246L74.4746 29.748H68.752L67.5703 33H64.5039L70.0801 18.6836H73.1367L78.8691 33ZM73.5469 27.3359L71.5742 22.0234L69.6406 27.3359H73.5469ZM89.9043 33H87.3555V31.4766C86.9323 32.069 86.431 32.5117 85.8516 32.8047C85.2786 33.0911 84.6992 33.2344 84.1133 33.2344C82.9219 33.2344 81.8997 32.7559 81.0469 31.7988C80.2005 30.8353 79.7773 29.4941 79.7773 27.7754C79.7773 26.0176 80.1908 24.6829 81.0176 23.7715C81.8444 22.8535 82.8893 22.3945 84.1523 22.3945C85.3112 22.3945 86.3138 22.8763 87.1602 23.8398V18.6836H89.9043V33ZM82.5801 27.5898C82.5801 28.6966 82.7331 29.4974 83.0391 29.9922C83.4818 30.7083 84.1003 31.0664 84.8945 31.0664C85.526 31.0664 86.0632 30.7995 86.5059 30.2656C86.9486 29.7253 87.1699 28.9212 87.1699 27.8535C87.1699 26.6621 86.9551 25.806 86.5254 25.2852C86.0957 24.7578 85.5456 24.4941 84.875 24.4941C84.224 24.4941 83.6771 24.7546 83.2344 25.2754C82.7982 25.7897 82.5801 26.5612 82.5801 27.5898ZM102.131 33H99.582V31.4766C99.1589 32.069 98.6576 32.5117 98.0781 32.8047C97.5052 33.0911 96.9258 33.2344 96.3398 33.2344C95.1484 33.2344 94.1263 32.7559 93.2734 31.7988C92.4271 30.8353 92.0039 29.4941 92.0039 27.7754C92.0039 26.0176 92.4173 24.6829 93.2441 23.7715C94.071 22.8535 95.1159 22.3945 96.3789 22.3945C97.5378 22.3945 98.5404 22.8763 99.3867 23.8398V18.6836H102.131V33ZM94.8066 27.5898C94.8066 28.6966 94.9596 29.4974 95.2656 29.9922C95.7083 30.7083 96.3268 31.0664 97.1211 31.0664C97.7526 31.0664 98.2897 30.7995 98.7324 30.2656C99.1751 29.7253 99.3965 28.9212 99.3965 27.8535C99.3965 26.6621 99.1816 25.806 98.752 25.2852C98.3223 24.7578 97.7721 24.4941 97.1016 24.4941C96.4505 24.4941 95.9036 24.7546 95.4609 25.2754C95.0247 25.7897 94.8066 26.5612 94.8066 27.5898ZM110.344 33V18.6836H113.234V33H110.344ZM120.734 22.6289V24.8164H118.859V28.9961C118.859 29.8424 118.876 30.3372 118.908 30.4805C118.947 30.6172 119.029 30.7311 119.152 30.8223C119.283 30.9134 119.439 30.959 119.621 30.959C119.875 30.959 120.243 30.8711 120.725 30.6953L120.959 32.8242C120.321 33.0977 119.598 33.2344 118.791 33.2344C118.296 33.2344 117.85 33.153 117.453 32.9902C117.056 32.821 116.763 32.6061 116.574 32.3457C116.392 32.0788 116.265 31.7207 116.193 31.2715C116.135 30.9525 116.105 30.3079 116.105 29.3379V24.8164H114.846V22.6289H116.105V20.5684L118.859 18.9668V22.6289H120.734ZM128.645 29.6992L131.379 30.1582C131.027 31.1608 130.471 31.9258 129.709 32.4531C128.954 32.974 128.007 33.2344 126.867 33.2344C125.064 33.2344 123.729 32.6452 122.863 31.4668C122.18 30.5228 121.838 29.3314 121.838 27.8926C121.838 26.1738 122.287 24.8294 123.186 23.8594C124.084 22.8828 125.22 22.3945 126.594 22.3945C128.137 22.3945 129.354 22.9056 130.246 23.9277C131.138 24.9434 131.564 26.5026 131.525 28.6055H124.65C124.67 29.4193 124.891 30.054 125.314 30.5098C125.738 30.959 126.265 31.1836 126.896 31.1836C127.326 31.1836 127.688 31.0664 127.98 30.832C128.273 30.5977 128.495 30.2201 128.645 29.6992ZM128.801 26.9258C128.781 26.1315 128.576 25.5293 128.186 25.1191C127.795 24.7025 127.32 24.4941 126.76 24.4941C126.161 24.4941 125.666 24.7122 125.275 25.1484C124.885 25.5846 124.693 26.1771 124.699 26.9258H128.801ZM133.566 22.6289H136.096V24.0449C137.001 22.9447 138.078 22.3945 139.328 22.3945C139.992 22.3945 140.568 22.5312 141.057 22.8047C141.545 23.0781 141.945 23.4915 142.258 24.0449C142.714 23.4915 143.205 23.0781 143.732 22.8047C144.26 22.5312 144.823 22.3945 145.422 22.3945C146.184 22.3945 146.828 22.5508 147.355 22.8633C147.883 23.1693 148.277 23.6217 148.537 24.2207C148.726 24.6634 148.82 25.3796 148.82 26.3691V33H146.076V27.0723C146.076 26.0436 145.982 25.3796 145.793 25.0801C145.539 24.6895 145.148 24.4941 144.621 24.4941C144.237 24.4941 143.876 24.6113 143.537 24.8457C143.199 25.0801 142.954 25.4251 142.805 25.8809C142.655 26.3301 142.58 27.043 142.58 28.0195V33H139.836V27.3164C139.836 26.3073 139.787 25.6562 139.689 25.3633C139.592 25.0703 139.439 24.8522 139.23 24.709C139.029 24.5658 138.752 24.4941 138.4 24.4941C137.977 24.4941 137.596 24.6081 137.258 24.8359C136.919 25.0638 136.675 25.3926 136.525 25.8223C136.382 26.252 136.311 26.9648 136.311 27.9609V33H133.566V22.6289Z"
              fill="white"
            />
          </svg>
        </AddBtn>
        <SyncBtn
          onClick={() => this.syncData(this.props.items, this.props.field)}
        >
          <svg
            width="202"
            height="52"
            viewBox="0 0 202 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="2" y="2" width="200" height="50" rx="5" fill="#2D8CD8" />
            <rect width="200" height="50" rx="5" fill="#4AABF8" />
          </svg>
          <p>Sync Data</p>
        </SyncBtn>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    main: state.main,
    items: state.items,
    field: state.field,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleForm: isEnabled => {
      dispatch({
        type: "form",
        payload: isEnabled,
      })
    },
    setDate: date => {
      dispatch({
        type: "date",
        payload: date,
      })
    },
    syncData: data => {
      dispatch({
        type: "syncDB",
        payload: data,
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsPage)

const Wrapper = styled.div`
  h1 {
    margin-left: 65px;
    margin-top: 30px;
    position: absolute;
    font-size: 80px;
    font-weight: bold;
    font-family: Arial;
    color: #4aabf8;
  }
`

const AddBtn = styled.div`
  position: absolute;
  top: 670px;
  left: 620px;
  cursor: pointer;
`

const SyncBtn = styled.div`
  position: absolute;
  top: 670px;
  left: 100px;
  cursor: pointer;

  p {
    position: absolute;
    left: 50px;
    top: 10px;
    font-size: 20px;
    font-weight: bold;
    font-family: Arial;
    color: white;
  }
`
