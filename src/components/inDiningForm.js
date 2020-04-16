import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import NameDropdown from '../components/nameDropdown';
import UnitDropdown from '../components/unitDropdown';


class InDiningForm extends React.Component {

    state = {
      startDate: new Date(),
      currentDay: new Date().getDate(),
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear()
    };

    handleChange = date => {
      this.setState({
        startDate: date
      });
    };

    closeForm = () => {
        this.props.handleForm(false)
    };

    handleAdd = e => {
      let dateFormat = `${this.state.startDate.getMonth()+1}/${this.state.startDate.getDate()}/${this.state.startDate.getFullYear()}`

      this.props.addItem(this.props.field.inDineName[this.props.items.selectedIndex])
      this.props.addDate(dateFormat)
      this.props.addUnit(this.props.items.unitName[this.props.items.selectedUnitIndex])	
      this.props.addQuantity(this.props.field.quantity)  
      this.props.addSelectedState(false)
      this.props.handleForm(false)  
    };

    handleQuantity = e => {
      this.props.setQuantity(e.target.value);
    };

  render() {
    
    return (
      <Wrapper>
        <Back/>
        <FormWrapper>
          <Form>
              <h1>ADD ITEM</h1>
              <h2>(In Dining)</h2>
              
              <TimeWrapper>
                  <h1>Date</h1>
                  <DropdownWrapperTime>
                    <p>
                      <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                      />
                    </p>
                  </DropdownWrapperTime>
              </TimeWrapper>
              <QuantityWrapper>
                  <h1>Quantity</h1>
                  <DropdownWrapperQuantity><input onChange={this.handleQuantity} type="number" /></DropdownWrapperQuantity>
              </QuantityWrapper>
              <UnitWrapper>
                  <h1>Quantity Unit</h1>
                  <DropdownWrapperUnit><UnitDropdown/></DropdownWrapperUnit>
              </UnitWrapper>
              <NameWrapper>
                  <h1>Name</h1>
                  <DropdownWrapper><NameDropdown/></DropdownWrapper>
              </NameWrapper>
              <Spacer/>
          </Form>
          <CloseBtn onClick={() => this.closeForm()}>X</CloseBtn>
          <AddBtn onClick={() => this.handleAdd()}>
              <svg width="300" height="50" viewBox="0 0 300 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="300" height="50" rx="10" fill="#4AABF8"/>
                  <path d="M121.365 31H118.221L116.971 27.748H111.248L110.066 31H107L112.576 16.6836H115.633L121.365 31ZM116.043 25.3359L114.07 20.0234L112.137 25.3359H116.043ZM132.4 31H129.852V29.4766C129.428 30.069 128.927 30.5117 128.348 30.8047C127.775 31.0911 127.195 31.2344 126.609 31.2344C125.418 31.2344 124.396 30.7559 123.543 29.7988C122.697 28.8353 122.273 27.4941 122.273 25.7754C122.273 24.0176 122.687 22.6829 123.514 21.7715C124.34 20.8535 125.385 20.3945 126.648 20.3945C127.807 20.3945 128.81 20.8763 129.656 21.8398V16.6836H132.4V31ZM125.076 25.5898C125.076 26.6966 125.229 27.4974 125.535 27.9922C125.978 28.7083 126.596 29.0664 127.391 29.0664C128.022 29.0664 128.559 28.7995 129.002 28.2656C129.445 27.7253 129.666 26.9212 129.666 25.8535C129.666 24.6621 129.451 23.806 129.021 23.2852C128.592 22.7578 128.042 22.4941 127.371 22.4941C126.72 22.4941 126.173 22.7546 125.73 23.2754C125.294 23.7897 125.076 24.5612 125.076 25.5898ZM144.627 31H142.078V29.4766C141.655 30.069 141.154 30.5117 140.574 30.8047C140.001 31.0911 139.422 31.2344 138.836 31.2344C137.645 31.2344 136.622 30.7559 135.77 29.7988C134.923 28.8353 134.5 27.4941 134.5 25.7754C134.5 24.0176 134.913 22.6829 135.74 21.7715C136.567 20.8535 137.612 20.3945 138.875 20.3945C140.034 20.3945 141.036 20.8763 141.883 21.8398V16.6836H144.627V31ZM137.303 25.5898C137.303 26.6966 137.456 27.4974 137.762 27.9922C138.204 28.7083 138.823 29.0664 139.617 29.0664C140.249 29.0664 140.786 28.7995 141.229 28.2656C141.671 27.7253 141.893 26.9212 141.893 25.8535C141.893 24.6621 141.678 23.806 141.248 23.2852C140.818 22.7578 140.268 22.4941 139.598 22.4941C138.947 22.4941 138.4 22.7546 137.957 23.2754C137.521 23.7897 137.303 24.5612 137.303 25.5898ZM152.84 31V16.6836H155.73V31H152.84ZM163.23 20.6289V22.8164H161.355V26.9961C161.355 27.8424 161.372 28.3372 161.404 28.4805C161.443 28.6172 161.525 28.7311 161.648 28.8223C161.779 28.9134 161.935 28.959 162.117 28.959C162.371 28.959 162.739 28.8711 163.221 28.6953L163.455 30.8242C162.817 31.0977 162.094 31.2344 161.287 31.2344C160.792 31.2344 160.346 31.153 159.949 30.9902C159.552 30.821 159.259 30.6061 159.07 30.3457C158.888 30.0788 158.761 29.7207 158.689 29.2715C158.631 28.9525 158.602 28.3079 158.602 27.3379V22.8164H157.342V20.6289H158.602V18.5684L161.355 16.9668V20.6289H163.23ZM171.141 27.6992L173.875 28.1582C173.523 29.1608 172.967 29.9258 172.205 30.4531C171.45 30.974 170.503 31.2344 169.363 31.2344C167.56 31.2344 166.225 30.6452 165.359 29.4668C164.676 28.5228 164.334 27.3314 164.334 25.8926C164.334 24.1738 164.783 22.8294 165.682 21.8594C166.58 20.8828 167.716 20.3945 169.09 20.3945C170.633 20.3945 171.85 20.9056 172.742 21.9277C173.634 22.9434 174.061 24.5026 174.021 26.6055H167.146C167.166 27.4193 167.387 28.054 167.811 28.5098C168.234 28.959 168.761 29.1836 169.393 29.1836C169.822 29.1836 170.184 29.0664 170.477 28.832C170.77 28.5977 170.991 28.2201 171.141 27.6992ZM171.297 24.9258C171.277 24.1315 171.072 23.5293 170.682 23.1191C170.291 22.7025 169.816 22.4941 169.256 22.4941C168.657 22.4941 168.162 22.7122 167.771 23.1484C167.381 23.5846 167.189 24.1771 167.195 24.9258H171.297ZM176.062 20.6289H178.592V22.0449C179.497 20.9447 180.574 20.3945 181.824 20.3945C182.488 20.3945 183.064 20.5312 183.553 20.8047C184.041 21.0781 184.441 21.4915 184.754 22.0449C185.21 21.4915 185.701 21.0781 186.229 20.8047C186.756 20.5312 187.319 20.3945 187.918 20.3945C188.68 20.3945 189.324 20.5508 189.852 20.8633C190.379 21.1693 190.773 21.6217 191.033 22.2207C191.222 22.6634 191.316 23.3796 191.316 24.3691V31H188.572V25.0723C188.572 24.0436 188.478 23.3796 188.289 23.0801C188.035 22.6895 187.645 22.4941 187.117 22.4941C186.733 22.4941 186.372 22.6113 186.033 22.8457C185.695 23.0801 185.451 23.4251 185.301 23.8809C185.151 24.3301 185.076 25.043 185.076 26.0195V31H182.332V25.3164C182.332 24.3073 182.283 23.6562 182.186 23.3633C182.088 23.0703 181.935 22.8522 181.727 22.709C181.525 22.5658 181.248 22.4941 180.896 22.4941C180.473 22.4941 180.092 22.6081 179.754 22.8359C179.415 23.0638 179.171 23.3926 179.021 23.8223C178.878 24.252 178.807 24.9648 178.807 25.9609V31H176.062V20.6289Z" fill="white"/>
              </svg>
          </AddBtn>
        </FormWrapper>
      </Wrapper>
    );
  }
}


const mapStateToProps = state => {
  return {
    items: state.items,
    field: state.field
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleForm: isEnabled => {
      dispatch({
        type: 'form',
        payload: isEnabled,
      });
    },
    addDate: date => {
      dispatch({
          type: 'inDineItemDate',
          payload: date,
      });
    },
    addItem: items => {
        dispatch({
            type: 'inDiningArray',
            payload: items,
        });
    },
    addSelectedState: isSelected => {
      dispatch({
          type: 'selectedArray',
          payload: isSelected,
      });
    },
    addTime: time => {
      dispatch({
          type: 'inDineTime',
          payload: time,
      });
    },
    addUnit: unit => {
      dispatch({
          type: 'inDineUnit',
          payload: unit,
      });
    },
    addQuantity: index => {
      dispatch({
          type: 'addInDineQuantity',
          payload: index,
      });
    },
    setQuantity: number => {
      dispatch({
          type: 'number',
          payload: number,
      });
    },
  };
};
  
  
export default connect(
mapStateToProps,
mapDispatchToProps
)(InDiningForm);


const Wrapper = styled.div`
    h1{
        margin-left: 50px;
        margin-top: 50px;
        position: absolute;
        font-size: 40px;
        font-weight: bold;
        font-family: Arial;
        color: black;
    }
    h2{
        margin-left: 50px;
        margin-top: 100px;
        position: absolute;
        font-size: 30px;
        font-weight: bold;
        font-family: Arial;
    }
`;

const Back = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    background-color: black;
    opacity: 0.8;
`;

const FormWrapper = styled.div`
    position: fixed;
    height: 600px;
    width: 500px;
    left: 350px;
    top: 100px;
    border-radius: 10px;
    z-index: 10;
    background-color: white;
`;

const Form = styled.div`
    position: fixed;
    height: 500px;
    width: 500px;
    left: 350px;
    top: 100px;
    overflow-y: scroll;
    border-radius: 10px;
`;

const AddBtn = styled.div`
  position: absolute;
  top: 520px;
  left: 100px;
  cursor: pointer;
`;

const CloseBtn = styled.h1`
    position: absolute;
    top: 0px;
    right: 50px;
    cursor: pointer;
    font-size: 40px;
    font-weight: bold;
    font-family: Arial;
    color: black;
`;

const NameWrapper = styled.h1`

    h1{
        position: absolute;
        margin-left: 0px;
        margin-top: 120px;
        font-size: 20px;
        font-weight: bold;
        font-family: Arial;
        color: black;
    }
`;

const TimeWrapper = styled.h1`

    h1{
        position: absolute;
        margin-left: 0px;
        margin-top: 220px;
        font-size: 20px;
        font-weight: bold;
        font-family: Arial;
        color: black;
    }
`;

const UnitWrapper = styled.h1`

    h1{
        width: 300px;
        position: absolute;
        margin-left: 0px;
        margin-top: 320px;
        font-size: 20px;
        font-weight: bold;
        font-family: Arial;
        color: black;
    }
`;

const QuantityWrapper = styled.h1`
    
    h1{
        width: 300px;
        position: absolute;
        margin-left: 0px;
        margin-top: 420px;
        font-size: 20px;
        font-weight: bold;
        font-family: Arial;
        color: black;
    }
    input{
      width: 400px;
      height: 40px;
      border-radius: 5px;
      border: 2px solid black;
      font-size: 20px;
      font-weight: bold;
      font-family: Arial;
    }
`;

const DropdownWrapper = styled.div`
  position: absolute;
  width: 400px;
  height: 40px;
  border-radius: 5px;
  margin-top: 150px;
  z-index: 100;
`;

const DropdownWrapperTime = styled.div`
  position: absolute;
  width: 400px;
  height: 40px;
  z-index: 95;
  border-radius: 5px;
  margin-top: 250px;
  border: 2px solid black;

  p{
    position: relative;
    margin-top: 7px;
    margin-left: 20px;
    font-size: 20px;
    font-weight: bold;
    font-family: Arial;
    color: black;
  }
  input{
    border: none;
  }
`;

const DropdownWrapperUnit = styled.div`
  position: absolute;
  width: 400px;
  height: 40px;
  border-radius: 5px;
  margin-top: 350px;
  z-index: 90;
`;

const DropdownWrapperQuantity = styled.div`
  position: absolute;
  width: 400px;
  height: 40px;
  border-radius: 5px;
  margin-top: 450px;
  z-index: 80;
`;

const Spacer = styled.div`
  position: absolute;
  width: 400px;
  height: 60px;
  border-radius: 5px;
  margin-top: 550px;
`;