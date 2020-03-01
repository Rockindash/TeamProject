import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';


class ItemsList extends React.Component {


  render() {
    
    return (
      <Wrapper>
          
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
)(ItemsList);


const Wrapper = styled.div`
    position: absolute;
    top: 140px;
    left: 65px;
    width: 850px;
    height: 480px;
    background-color: green;
`;
