import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';


class Display extends React.Component {


  render() {
    
    return (
      <Wrapper>
        <p>OLA</p>
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
