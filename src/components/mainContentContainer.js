import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ItemsPage from '../components/itemsPage';
import FoodGroupPage from '../components/foodGroupPage';


class MainContentCpntainer extends React.Component {


  render() {
    
    return (
      <Wrapper className={this.props.main.isItemsPageEnabled ? 'items' : 'foodGroup'}>
          {this.props.main.isItemsPageEnabled &&
            <ItemsPage/>
          }
          {this.props.main.isGroupPageEnabled &&
            <FoodGroupPage/>
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
)(MainContentCpntainer);


const Wrapper = styled.div`
    position: absolute;
    left: 15px;
    top: 10px;
    height: 760px;
    width: 920px;

    &.items {
        transform: translateX(0px);
        transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    &.foodGroup {
        transform: translateX(250px);
        transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
`;
