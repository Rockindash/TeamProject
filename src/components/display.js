import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ItemsForm from '../components/itemsForm';
import FoodGroupBtn from '../components/foodGroupBtn';
import ItemsGroupBtn from '../components/itemsGroupBtn';
import MainContentContainer from '../components/mainContentContainer';


class Display extends React.Component {


  render() {
    
    return (
      <Wrapper>
        {this.props.main.isFormEnabled &&
          <ItemsForm/>
        }
        <FoodGroupBtn/>
        <ItemsGroupBtn/> 
        <MainContentContainer/>
      </Wrapper>
    );
  }
}


const mapStateToProps = state => {
  return {
    main: state.main
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setItems: data => {
      dispatch({
        type: 'testCase',
        payload: data,
      });
    }
  };
};
  
  
export default connect(
mapStateToProps,
mapDispatchToProps
)(Display);


const Wrapper = styled.div`
  
`;
