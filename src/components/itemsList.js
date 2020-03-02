import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';


class ItemsList extends React.Component {

  removeInDineItem = (index) => {
    this.props.removeFromInDineList(index)
    this.props.removeSelectedFromInDineList(index)

    //Add to Food Group
    
  };

  handleInDineSelection = (index) => {
    var array = []
    array = this.props.items.inDineSelectedState
    array[index] = !this.props.items.inDineSelectedState[index]
    this.props.setInDineSelected(array)
  };

  removeOutDineItem = (index) => {
    this.props.removeFromOutDineList(index)
    this.props.removeSelectedFromOutDineList(index)
  };

  handleOutDineSelection = (index) => {
    var array = []
    array = this.props.items.outDineSelectedState
    array[index] = !this.props.items.outDineSelectedState[index]
    this.props.setOutDineSelected(array)
  };

  render() {
    
    return (
      <Wrapper>
        {this.props.main.inDineEnabled &&
          <div>
            {(this.props.items.inDiningList.length == 0) && (
              <div>
                <p>Empty List</p>
                <p>Click on "+Add Item" to add new food item</p>
              </div>
            )}
            {this.props.items.inDiningList.map((item, index) => (
              <div>
                <InDineItemWrapper className={this.props.items.inDineSelectedState[index] ? 'enabled' : 'disabled'} onClick={() => this.handleInDineSelection(index)}>
                  <InDineCheckbox className={this.props.items.inDineSelectedState[index] ? 'enabled' : 'disabled'}/>
                  <p>{item}</p>
                  <InDineBack className={this.props.items.inDineSelectedState[index] ? 'enabled' : 'disabled'}/>
                  <div className='closeBtn' onClick={() => this.removeInDineItem(index)}><p>X</p></div>
                </InDineItemWrapper>
              </div>
            ))}
          </div>
        }
        {this.props.main.outDineEnabled &&
          <div>
            {(this.props.items.outDiningList.length == 0) && (
              <div>
                <p>Empty List</p>
                <p>Click on "+Add Item" to add new food item</p>
              </div>
            )}
            {this.props.items.outDiningList.map((item, index) => (
              <div>
                <OutDineItemWrapper className={this.props.items.outDineSelectedState[index] ? 'enabled' : 'disabled'} onClick={() => this.handleOutDineSelection(index)}>
                <OutDineCheckbox className={this.props.items.outDineSelectedState[index] ? 'enabled' : 'disabled'}/>
                  <p>{item}</p>
                  <OutDineBack className={this.props.items.outDineSelectedState[index] ? 'enabled' : 'disabled'}/>
                  <div className='closeBtn' onClick={() => this.removeOutDineItem(index)}><p>X</p></div>
                </OutDineItemWrapper>
              </div>
            ))}
          </div>
        }
      </Wrapper>
    );
  }
}


const mapStateToProps = state => {
  return {
    items: state.items,
    main: state.main
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeFromInDineList: index => {
      dispatch({
        type: 'removeInDineItem',
        payload: index,
      });
    },
    removeSelectedFromInDineList: index => {
      dispatch({
        type: 'removeSelectedArray',
        payload: index,
      });
    },
    removeFromOutDineList: index => {
      dispatch({
        type: 'removeOutDineItem',
        payload: index,
      });
    },
    removeSelectedFromOutDineList: index => {
      dispatch({
        type: 'removeSelectedOutDineArray',
        payload: index,
      });
    },
    setInDineSelected: array => {
      dispatch({
        type: 'modifySelectedArray',
        payload: array,
      });
    },
    setOutDineSelected: array => {
      dispatch({
        type: 'modifySelectedOutDineArray',
        payload: array,
      });
    },
  };
};
  
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemsList);


const Wrapper = styled.div`
    position: absolute;
    top: 180px;
    left: 65px;
    width: 850px;
    height: 440px;

    p{
      font-size: 20px;
      font-weight: medium;
      font-family: Arial;
      color: black;
      opacity: 0.7;
    }
`;

const InDineItemWrapper = styled.div`
    position: realtive;
    margin-top: 20px;
    margin-left: 0px;
    width: 250px;
    height: 50px;
    cursor: pointer;
    border-radius: 10px;

    p{
      margin-left: 52px;
      margin-top: 10px;
      z-index: 15;
      position: absolute;
      font-size: 20px;
      font-weight: bold;
      font-family: Arial;
      color: black;
    }

    div{
      &.closeBtn {
        position: absolute;
        margin-left: 0px;
        z-index: 5;
        width: 250px;
        height: 50px;
        cursor: pointer;
        border-radius: 10px;
        background-color: #EB5757;
        transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);

        p{
          position: absolute;
          right: 20px;
          margin-top: 10px;
          font-size: 20px;
          font-weight: bold;
          font-family: Arial;
          color: white;
        }
      }
    }

    &:hover {
      div{
        &.closeBtn {
          transform: translatex(50px);
          transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
      }
    }

    &.enabled {
      p{
        color: #287BBD;
      }
    }
`;

const InDineCheckbox = styled.div`
    position: relative;
    top: 30px;
    left: 20px;
    height: 14px;
    width: 14px;
    z-index: 20;
    border: 2px solid black;  

    &.enabled {
        background-color: #4AABF8;
    }
`;

const InDineBack = styled.div`
    position: absolute;
    margin-top: 0px;
    margin-left: 0px;
    width: 250px;
    height: 50px;
    z-index: 10;
    cursor: pointer;
    border-radius: 10px;
    background-color: #F0F0F0;

    &.enabled {
      border: 2px solid #0D7DD7;  
    }
`;

const OutDineItemWrapper = styled.div`
    position: realtive;
    margin-top: 20px;
    margin-left: 0px;
    width: 250px;
    height: 50px;
    cursor: pointer;
    border-radius: 10px;

    p{
      margin-left: 52px;
      margin-top: 10px;
      z-index: 15;
      position: absolute;
      font-size: 20px;
      font-weight: bold;
      font-family: Arial;
      color: black;
    }

    div{
      &.closeBtn {
        position: absolute;
        margin-left: 0px;
        z-index: 5;
        width: 250px;
        height: 50px;
        cursor: pointer;
        border-radius: 10px;
        background-color: #EB5757;
        transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);

        p{
          position: absolute;
          right: 20px;
          margin-top: 10px;
          font-size: 20px;
          font-weight: bold;
          font-family: Arial;
          color: white;
        }
      }
    }

    &:hover {
      div{
        &.closeBtn {
          transform: translatex(50px);
          transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
      }
    }

    &.enabled {
      p{
        color: #287BBD;
      }
    }
`;

const OutDineCheckbox = styled.div`
    position: relative;
    top: 30px;
    left: 20px;
    height: 14px;
    width: 14px;
    z-index: 20;
    border: 2px solid black;  

    &.enabled {
        background-color: #4AABF8;
    }
`;

const OutDineBack = styled.div`
    position: absolute;
    margin-top: 0px;
    margin-left: 0px;
    width: 250px;
    height: 50px;
    z-index: 10;
    cursor: pointer;
    border-radius: 10px;
    background-color: #F0F0F0;

    &.enabled {
      border: 2px solid #0D7DD7;  
    }
`;
