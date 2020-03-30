import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ItemsForm from '../components/itemsForm';
import InfoScreen from '../components/infoScreen';
import FoodGroupBtn from '../components/foodGroupBtn';
import ItemsGroupBtn from '../components/itemsGroupBtn';
import MainContentContainer from '../components/mainContentContainer';


class Display extends React.Component {
  componentDidMount() {
    axios.get('/api/items').then(res => {
      // Edit this part
      // res.data is the js object which has props like inDiningList outDiningList
      this.props.syncData(res.data)
    })
  }

  render() {
    
    return (
      <Wrapper>
        {this.props.main.isFormEnabled &&
          <ItemsForm/>
        }
        {this.props.items.isInfoScreenEnabled &&
          <InfoScreen/>
        }
        <FoodGroupBtn/>
        <ItemsGroupBtn/> 
        <MainContentContainer/>
      </Wrapper>
    );
  }
}


const mapStateToProps = state => {
  return {
    main: state.main,
    items: state.items,
    field: state.field
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setItems: data => {
      dispatch({
        type: 'testCase',
        payload: data,
      });
    },
    syncData: data => {
      dispatch({
        type: 'syncDB',
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
