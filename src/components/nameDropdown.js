import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';


class NameDropdown extends React.Component {

    handleDropdown = () => {
        this.props.enableDropdown(!this.props.items.isDropdownEnabled)
    };

    handleSelectedItem = (index) => {
        this.props.selectedIndex(index)
        this.props.enableDropdown(false)
    };

  render() {
    
    return (
      <Wrapper className={this.props.items.isDropdownEnabled ? 'enabled' : 'disabled'}>
          <Selected onClick={() => this.handleDropdown()}><p>{this.props.field.inDineName[this.props.items.selectedIndex]}</p></Selected>
          {this.props.field.inDineName.map((item, index) => (
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
    items: state.items,
    field: state.field
  };
};

const mapDispatchToProps = dispatch => {
  return {
    enableDropdown: isEnabled => {
      dispatch({
        type: 'isDropdownEnabled',
        payload: isEnabled,
      });
    },
    selectedIndex: index => {
        dispatch({
          type: 'index',
          payload: index,
        });
    }
  };
};
  
  
export default connect(
mapStateToProps,
mapDispatchToProps
)(NameDropdown);


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
