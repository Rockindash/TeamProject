import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';


class InfoScreen extends React.Component {

    closeForm = () => {
        this.props.handleForm(false)
    };

    render() {
        
        return (
        <Wrapper>
            <Back/>
            <Form>
                <CloseBtn onClick={() => this.closeForm()}><h1>X</h1></CloseBtn>
                <h2>Item</h2>
                <h3>Information</h3>
                {this.props.main.inDineEnabled &&
                    <FoodData>
                        <h4>Name: {this.props.items.inDiningList[this.props.items.selectedIndex]}</h4>
                        <h4>Time: {this.props.field.inDineNameTimeStamp[this.props.items.selectedIndex]}</h4>
                        <h4>Quantity: {this.props.field.inDineUnit[this.props.items.selectedIndex]}</h4>
                    </FoodData>
                }
                {this.props.main.outDineEnabled &&
                    <FoodData>
                        <h4>Name: {this.props.items.outDiningList[this.props.items.selectedIndex]}</h4>
                        <h4>Time: {this.props.field.outDineNameTimeStamp[this.props.items.selectedIndex]}</h4>
                        <h4>Quantity: {this.props.field.outDineUnit[this.props.items.selectedIndex]}</h4>
                    </FoodData>
                }
            </Form>
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
    handleForm: isEnabled => {
      dispatch({
        type: 'info',
        payload: isEnabled,
      });
    }
  };
};
  
  
export default connect(
mapStateToProps,
mapDispatchToProps
)(InfoScreen);


const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 10;
`;

const Back = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.8;
`;

const Form = styled.div`
    position: fixed;
    height: 600px;
    width: 500px;
    background-color: white;
    position: fixed;
    left: 350px;
    top: 100px;
    border-radius: 10px;

    h2{
        position: absolute;
        margin-left: 50px;
        margin-top: 30px;
        font-size: 50px;
        font-weight: bold;
        font-family: Arial;
    }
    h3{
        position: absolute;
        margin-left: 50px;
        margin-top: 80px;
        font-size: 40px;
        font-weight: bold;
        font-family: Arial;
    }
`;

const CloseBtn = styled.h1`
    position: absolute;
    margin-top: 30px;
    right: 40px;
    cursor: pointer;
    font-size: 40px;
    font-weight: bold;
    font-family: Arial;
    color: black;
`;

const FoodData = styled.div`
    position: absolute;
    margin-top: 180px;
    margin-left: 50px;
    height: 100%

    h4{
        position: relative;
        font-size: 30px;
        font-weight: bold;
        font-family: Arial;
    }
`;