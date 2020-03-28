import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';


class UnitDropdown extends React.Component {

    handleDropdown = () => {
        this.props.enableDropdown(!this.props.items.isUnitDropdownEnabled)
    };

    handleSelectedItem = (index) => {
        this.props.selectedIndex(index)
        this.props.enableDropdown(false)
    };

  render() {
    
    return (
      <Wrapper className={this.props.items.isUnitDropdownEnabled ? 'enabled' : 'disabled'}>
          <Selected onClick={() => this.handleDropdown()}><p>{this.props.items.unitName[this.props.items.selectedUnitIndex]}</p></Selected>
          {this.props.items.unitName.map((item, index) => (
            <div>
              <ItemWrapper onClick={() => this.handleSelectedItem(index)}>
                <p>{item}</p>
              </ItemWrapper>
            </div>
          ))}
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
    enableDropdown: isEnabled => {
      dispatch({
        type: 'unitDropdown',
        payload: isEnabled,
      });
    },
    selectedIndex: index => {
        dispatch({
          type: 'unitIndex',
          payload: index,
        });
    },
  };
};
  
  
export default connect(
mapStateToProps,
mapDispatchToProps
)(UnitDropdown);


const Wrapper = styled.div`
    position: absolute;
    width: 400px;
    cursor: pointer;
    overflow: hidden;
    border-radius: 5px;
    background-color: white;
    border: 2px solid rgba(69, 66, 66, 1);

    p{
        position: absolute;
        font-size: 18px;
        font-weight: medium;
        font-family: Arial;
        color: black;
    }

    &.disabled {
        height: 40px;
    }
`;

const Selected = styled.div`
    position: relative;
    height: 40px;

    p{
        margin-left: 20px;
        margin-top: 8px;
    }
`;

const ItemWrapper = styled.div`
    position: relative;
    height: 40px;
    margin-top: 0px;
    width: 100%;

    p{
        margin-left: 20px;
        margin-top: 10px;
    }

    &:hover {
        background-color: #C4C4C4;

        p{
            color: white;
        }
    }
`;