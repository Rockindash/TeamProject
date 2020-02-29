import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';


class FoodGroupBtn extends React.Component {


  render() {
    
    return (
      <Wrapper>
        
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
)(FoodGroupBtn);


const Wrapper = styled.div`
    position: absolute;
    right: 0px;
    height: 800px;
    width: 250px;
    background-color: red;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
`;
