import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import FoodGroupList from '../components/foodGroupList';


class FoodGroupPage extends React.Component {

  render() {
    
    return (
        <Wrapper>
            <h1>Food Groups</h1>
            <FoodGroupList/>
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
)(FoodGroupPage);


const Wrapper = styled.div`
    h1{
        margin-left: 350px;
        margin-top: 30px;
        position: absolute;
        font-size: 80px;
        font-weight: bold;
        font-family: Arial;
        color: #F4B23F;
    }
`;
