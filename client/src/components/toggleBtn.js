import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';


class ToggleButton extends React.Component {

  handleInDine = () => {
    this.props.setInDine(true)
    this.props.setOutDine(false)
  };

  handleOutDine = () => {
    this.props.setOutDine(true)
    this.props.setInDine(false)
  };

  render() {
    
    return (
        <Wrapper>
            <InDine className={this.props.main.inDineEnabled ? 'enabled' : 'disabled'} onClick={() => this.handleInDine()}>
              <p>IN DINING</p>
            </InDine>
            <OutDine className={this.props.main.outDineEnabled ? 'enabled' : 'disabled'} onClick={() => this.handleOutDine()}>
              <p>OUT DINING</p>
            </OutDine>
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
    setInDine: isEnabled => {
      dispatch({
        type: 'inDine',
        payload: isEnabled,
      });
    },
    setOutDine: isEnabled => {
      dispatch({
        type: 'outDine',
        payload: isEnabled,
      });
    },
  };
};
  
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToggleButton);


const Wrapper = styled.div`
    position: absolute;
    top: 50px;
    left: 580px;
    width: 322px;
    height: 50px;
    border-radius: 5px;
    border: 2px solid rgba(69, 66, 66, 1);
`;

const InDine = styled.div`
    position: absolute;
    width: 160px;
    height: 46px;
    cursor: pointer;
    border: 1px solid rgba(69, 66, 66, 1);

    p{
      margin-left: 32px;
      margin-top: 10px;
      position: absolute;
      font-size: 20px;
      font-weight: bold;
      font-family: Arial;
      color: #454242;
    }

    &.enabled {
      background-color: #454242;
      p{
        color: white;
      }
      transition: 0.5s cubic-bezier(0.5, 0.8, 0.2, 1);
    }
`;

const OutDine = styled.div`
    position: absolute;
    width: 160px;
    height: 46px;
    margin-left: 160px;
    cursor: pointer;
    border: 1px solid rgba(69, 66, 66, 1);

    p{
      margin-left: 20px;
      margin-top: 10px;
      position: absolute;
      font-size: 20px;
      font-weight: bold;
      font-family: Arial;
      color: #454242;
    }

    &.enabled {
      background-color: #454242;
        p{
          color: white;
        }
      }
      transition: 0.5s cubic-bezier(0.5, 0.8, 0.2, 1);
`;