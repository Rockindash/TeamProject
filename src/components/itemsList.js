import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';


class ItemsList extends React.Component {

  removeInDineItem = (index, item) => {
    this.props.removeFromInDineList(index)
    this.props.removeSelectedFromInDineList(index)
    this.props.removeInDineDate(index)
    this.props.removeTimeStamp(index)
    this.props.removeInDineUnit(index)
    this.props.removeInDineQuantity(index)

    //Remove from Food Group in case
    var num = this.props.field.inDineName.indexOf(item)

    if(this.props.items.inDineSelectedState[index]){
      switch (this.props.items.inDineGroup[num]) {
        case 0:
          var innerNum = this.props.items.milkGroup.indexOf(item)
          this.props.removeFromMilk(innerNum)
          this.props.removeFromMilkUnit(innerNum)
          this.props.removeFromMilkQuantity(innerNum)
          break;
        case 1:
          var innerNum = this.props.items.vegGroup.indexOf(item)
          this.props.removeFromVeg(innerNum)
          this.props.removeFromVegUnit(innerNum)
          this.props.removeFromVegQuantity(innerNum)
          break;
        case 2:
          var innerNum = this.props.items.grainGroup.indexOf(item)
          this.props.removeFromGrain(innerNum)
          this.props.removeFromGrainUnit(innerNum)
          this.props.removeFromGrainQuantity(innerNum)
          break;
        case 3:
          var innerNum = this.props.items.meatGroup.indexOf(item)
          this.props.removeFromMeat(innerNum)
          this.props.removeFromMeatUnit(innerNum)
          this.props.removeFromMeatQuantity(innerNum)
          break;
        default:
      }
    }
  };

  handleInDineSelection = (index, item) => {
    var array = []
    array = this.props.items.inDineSelectedState
    array[index] = !this.props.items.inDineSelectedState[index]
    this.props.setInDineSelected(array)

    //Add to food group
    var num = this.props.field.inDineName.indexOf(item)

    //Remove From Group
    if(!this.props.items.inDineSelectedState[index]){
      switch (this.props.items.inDineGroup[num]) {
        case 0:
          var innerNum = this.props.items.milkGroup.indexOf(item)
          this.props.removeFromMilk(innerNum)
          this.props.removeFromMilkUnit(innerNum)
          this.props.removeFromMilkQuantity(innerNum)
          break;
        case 1:
          var innerNum = this.props.items.vegGroup.indexOf(item)
          this.props.removeFromVeg(innerNum)
          this.props.removeFromVegUnit(innerNum)
          this.props.removeFromVegQuantity(innerNum)
          break;
        case 2:
          var innerNum = this.props.items.grainGroup.indexOf(item)
          this.props.removeFromGrain(innerNum)
          this.props.removeFromGrainUnit(innerNum)
          this.props.removeFromGrainQuantity(innerNum)
          break;
        case 3:
          var innerNum = this.props.items.meatGroup.indexOf(item)
          this.props.removeFromMeat(innerNum)
          this.props.removeFromMeatUnit(innerNum)
          this.props.removeFromMeatQuantity(innerNum)
          break;
        default:
      }
    }else{
      switch (this.props.items.inDineGroup[num]) {
        case 0:
          this.props.addToMilk(item)
          this.props.addToMilkUnit(this.props.field.inDineUnit[index])
          this.props.addToMilkQuantity(this.props.field.inDineQuantity[index])
          break;
        case 1:
          this.props.addToVeg(item)
          this.props.addToVegUnit(this.props.field.inDineUnit[index])
          this.props.addToVegQuantity(this.props.field.inDineQuantity[index])
          break;
        case 2:
          this.props.addToGrain(item)
          this.props.addToGrainUnit(this.props.field.inDineUnit[index])
          this.props.addToGrainQuantity(this.props.field.inDineQuantity[index])
          break;
        case 3:
          this.props.addToMeat(item)
          this.props.addToMeatUnit(this.props.field.inDineUnit[index])
          this.props.addToMeatQuantity(this.props.field.inDineQuantity[index])
          break;
      default:
      }
    }
  };

  showInfo = (index) => {
    this.props.setIndex(index)
    this.props.toggleInfoScreen(!this.props.items.isInfoScreenEnabled)
  };

  removeOutDineItem = (index, item) => {
    this.props.removeFromOutDineList(index)
    this.props.removeSelectedFromOutDineList(index)
    this.props.removeOutDineDate(index)
    this.props.removeOutDineTimeStamp(index)
    this.props.removeOutDineUnit(index)
    this.props.removeOutDineQuantity(index)


    var num = this.props.field.inDineName.indexOf(item)

    if(this.props.items.outDineSelectedState[index]){
      switch (this.props.items.inDineGroup[num]) {
        case 0:
          var innerNum = this.props.items.milkGroup.indexOf(item)
          this.props.removeFromMilk(innerNum)
          this.props.removeFromMilkUnit(innerNum)
          this.props.removeFromMilkQuantity(innerNum)
          break;
        case 1:
          var innerNum = this.props.items.vegGroup.indexOf(item)
          this.props.removeFromVeg(innerNum)
          this.props.removeFromVegUnit(innerNum)
          this.props.removeFromVegQuantity(innerNum)
          break;
        case 2:
          var innerNum = this.props.items.grainGroup.indexOf(item)
          this.props.removeFromGrain(innerNum)
          this.props.removeFromGrainUnit(innerNum)
          this.props.removeFromGrainQuantity(innerNum)
          break;
        case 3:
          var innerNum = this.props.items.meatGroup.indexOf(item)
          this.props.removeFromMeat(innerNum)
          this.props.removeFromMeatUnit(innerNum)
          this.props.removeFromMeatQuantity(innerNum)
          break;
        default:
      }
    }
  };

  handleOutDineSelection = (index, item) => {
    var array = []
    array = this.props.items.outDineSelectedState
    array[index] = !this.props.items.outDineSelectedState[index]
    this.props.setOutDineSelected(array)

    //Add to food group
    var num = this.props.field.inDineName.indexOf(item)

    if(!this.props.items.outDineSelectedState[index]){
      switch (this.props.items.inDineGroup[num]) {
        case 0:
          var innerNum = this.props.items.milkGroup.indexOf(item)
          this.props.removeFromMilk(innerNum)
          this.props.removeFromMilkUnit(innerNum)
          this.props.removeFromMilkQuantity(innerNum)
          break;
        case 1:
          var innerNum = this.props.items.vegGroup.indexOf(item)
          this.props.removeFromVeg(innerNum)
          this.props.removeFromVegUnit(innerNum)
          this.props.removeFromVegQuantity(innerNum)
          break;
        case 2:
          var innerNum = this.props.items.grainGroup.indexOf(item)
          this.props.removeFromGrain(innerNum)
          this.props.removeFromGrainUnit(innerNum)
          this.props.removeFromGrainQuantity(innerNum)
          break;
        case 3:
          var innerNum = this.props.items.meatGroup.indexOf(item)
          this.props.removeFromMeat(innerNum)
          this.props.removeFromMeatUnit(innerNum)
          this.props.removeFromMeatQuantity(innerNum)
          break;
        default:
      }
    }else{
      switch (this.props.items.inDineGroup[num]) {
        case 0:
          this.props.addToMilk(item)
          this.props.addToMilkUnit(this.props.field.outDineUnit[index])
          this.props.addToMilkQuantity(this.props.field.outDineQuantity[index])
          break;
        case 1:
          this.props.addToVeg(item)
          this.props.addToVegUnit(this.props.field.outDineUnit[index])
          this.props.addToVegQuantity(this.props.field.outDineQuantity[index])
          break;
        case 2:
          this.props.addToGrain(item)
          this.props.addToGrainUnit(this.props.field.outDineUnit[index])
          this.props.addToGrainQuantity(this.props.field.outDineQuantity[index])
          break;
        case 3:
          this.props.addToMeat(item)
          this.props.addToMeatUnit(this.props.field.outDineUnit[index])
          this.props.addToMeatQuantity(this.props.field.outDineQuantity[index])
          break;
      default:
    }
    }
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
                <InDineItemWrapper className={this.props.items.inDineSelectedState[index] ? 'enabled' : 'disabled'}>
                  <InDineCheckbox className={this.props.items.inDineSelectedState[index] ? 'enabled' : 'disabled'} onClick={() => this.handleInDineSelection(index,item)}/>
                  <p>{item}</p>
                  <InDineBack className={this.props.items.inDineSelectedState[index] ? 'enabled' : 'disabled'}/>
                  <div className='closeBtn' onClick={() => this.removeInDineItem(index, item)}><p>X</p></div>
                  <div className='infoBtn' onClick={() => this.showInfo(index)}><p>More Information</p></div>
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
                <OutDineItemWrapper className={this.props.items.outDineSelectedState[index] ? 'enabled' : 'disabled'}>
                <OutDineCheckbox className={this.props.items.outDineSelectedState[index] ? 'enabled' : 'disabled'} onClick={() => this.handleOutDineSelection(index, item)}/>
                  <p>{item}</p>
                  <OutDineBack className={this.props.items.outDineSelectedState[index] ? 'enabled' : 'disabled'}/>
                  <div className='closeBtn' onClick={() => this.removeOutDineItem(index, item)}><p>X</p></div>
                  <div className='infoBtn' onClick={() => this.showInfo(index)}><p>More Information</p></div>
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
    main: state.main,
    field: state.field
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
    removeInDineDate: index => {
      dispatch({
        type: 'removeInDineDate',
        payload: index,
      });
    },
    removeSelectedFromInDineList: index => {
      dispatch({
        type: 'removeSelectedArray',
        payload: index,
      });
    },
    removeOutDineDate: index => {
      dispatch({
        type: 'removeOutDineDate',
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
    addToMilk: array => {
      dispatch({
        type: 'milkGroup',
        payload: array,
      });
    },
    addToMilkUnit: array => {
      dispatch({
        type: 'milkGroupUnitAdd',
        payload: array,
      });
    },
    addToVegUnit: array => {
      dispatch({
        type: 'vegGroupUnitAdd',
        payload: array,
      });
    },
    addToGrainUnit: array => {
      dispatch({
        type: 'grainGroupUnitAdd',
        payload: array,
      });
    },
    addToMeatUnit: array => {
      dispatch({
        type: 'meatGroupUnitAdd',
        payload: array,
      });
    },
    addToMilkQuantity: array => {
      dispatch({
        type: 'milkGroupQuantityAdd',
        payload: array,
      });
    },
    addToVegQuantity: array => {
      dispatch({
        type: 'vegGroupQuantityAdd',
        payload: array,
      });
    },
    addToGrainQuantity: array => {
      dispatch({
        type: 'grainGroupQuantityAdd',
        payload: array,
      });
    },
    addToMeatQuantity: array => {
      dispatch({
        type: 'meatGroupQuantityAdd',
        payload: array,
      });
    },
    removeFromMilkUnit: array => {
      dispatch({
        type: 'milkGroupUnitRemove',
        payload: array,
      });
    },
    removeFromVegUnit: array => {
      dispatch({
        type: 'vegGroupUnitRemove',
        payload: array,
      });
    },
    removeFromGrainUnit: array => {
      dispatch({
        type: 'grainGroupUnitRemove',
        payload: array,
      });
    },
    removeFromMeatUnit: array => {
      dispatch({
        type: 'meatGroupUnitRemove',
        payload: array,
      });
    },
    removeFromMilkQuantity: array => {
      dispatch({
        type: 'milkGroupQuantityRemove',
        payload: array,
      });
    },
    removeFromVegQuantity: array => {
      dispatch({
        type: 'vegGroupQuantityRemove',
        payload: array,
      });
    },
    removeFromGrainQuantity: array => {
      dispatch({
        type: 'grainGroupQuantityRemove',
        payload: array,
      });
    },
    removeFromMeatQuantity: array => {
      dispatch({
        type: 'meatGroupQuantityRemove',
        payload: array,
      });
    },
    addToVeg: array => {
      dispatch({
        type: 'vegGroup',
        payload: array,
      });
    },
    addToGrain: array => {
      dispatch({
        type: 'grainGroup',
        payload: array,
      });
    },
    addToMeat: array => {
      dispatch({
        type: 'meatGroup',
        payload: array,
      });
    },
    removeFromMilk: array => {
      dispatch({
        type: 'milkGroupRemove',
        payload: array,
      });
    },
    removeFromVeg: array => {
      dispatch({
        type: 'vegGroupRemove',
        payload: array,
      });
    },
    removeFromGrain: array => {
      dispatch({
        type: 'grainGroupRemove',
        payload: array,
      });
    },
    removeFromMeat: array => {
      dispatch({
        type: 'meatGroupRemove',
        payload: array,
      });
    },
    removeTimeStamp: index => {
      dispatch({
        type: 'removeInDineTime',
        payload: index,
      });
    },
    removeOutDineTimeStamp: index => {
      dispatch({
        type: 'removeOutDineTime',
        payload: index,
      });
    },
    setIndex: index => {
      dispatch({
        type: 'index',
        payload: index,
      });
    },
    toggleInfoScreen: isEnabled => {
      dispatch({
        type: 'info',
        payload: isEnabled,
      });
    },
    removeInDineUnit: index => {
      dispatch({
        type: 'removeInDineUnit',
        payload: index,
      });
    },
    removeInDineQuantity: index => {
      dispatch({
        type: 'removeInDineQuantity',
        payload: index,
      });
    },
    removeOutDineQuantity: index => {
      dispatch({
        type: 'removeOutDineQuantity',
        payload: index,
      });
    },
    removeOutDineUnit: index => {
      dispatch({
        type: 'removeOutDineUnit',
        payload: index,
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
    margin-top: 40px;
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

      &.infoBtn {
        position: absolute;
        margin-left: 0px;
        z-index: 5;
        width: 250px;
        height: 50px;
        cursor: pointer;
        border-radius: 10px;
        background-color: #287BBD;
        transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);

        p{
          position: absolute;
          margin-left: 70px;
          margin-top: 20px;
          font-size: 15px;
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
        &.infoBtn {
          transform: translateY(30px);
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
    margin-top: 40px;
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
      &.infoBtn {
        position: absolute;
        margin-left: 0px;
        z-index: 5;
        width: 250px;
        height: 50px;
        cursor: pointer;
        border-radius: 10px;
        background-color: #287BBD;
        transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);

        p{
          position: absolute;
          margin-left: 70px;
          margin-top: 20px;
          font-size: 15px;
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
        &.infoBtn {
          transform: translateY(30px);
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
