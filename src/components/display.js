import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import FoodGroupBtn from '../components/foodGroupBtn';
import ItemsGroupBtn from '../components/itemsGroupBtn';
import MainContentContainer from '../components/mainContentContainer';


class Display extends React.Component {


  render() {
    
    return (
      <Wrapper>
        <FoodGroupBtn/>
        <ItemsGroupBtn/>
        <MainContentContainer/>
      </Wrapper>
    );
  }
}


const mapStateToProps = state => {
  return {
    items: state.items
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
