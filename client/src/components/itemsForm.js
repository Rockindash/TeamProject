import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import InDiningForm from '../components/inDiningForm';
import OutDiningForm from '../components/outDiningForm';

class ItemsForm extends React.Component {


  render() {
    
    return (
      <Wrapper>
        {this.props.main.inDineEnabled &&
            <InDiningForm/>
        }
        {this.props.main.outDineEnabled &&
            <OutDiningForm/>
        }
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
)(ItemsForm);


const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 10;
`;
