import React from "react"
import styled from 'styled-components';

import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";

import Display from '../components/display';


store.subscribe(() => {
  console.log("Store Update", store.getState());
})

class Index extends React.Component {

  render() {
    
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Wrapper>
            <Display/>
          </Wrapper>
        </PersistGate>
      </Provider>
    );
  }
}

export default Index

const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: white;
`;