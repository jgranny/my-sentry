import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View} from 'react-native';
import { connect, Provider } from 'react-redux';
import Header from './Header';
import { Container, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, H1, List, ListItem, InputGroup, Picker, Label, Item, Input, Form} from 'native-base';


// const mapStateToProps = state => { 
//   return {state: state};
// };

export default connect()(function GroupForm (state) {
  return (
    <Container>
      <Header />    
        <Button 
        style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}
        onPress={()=> state.dispatch({type: 'ADD_GROUP', item: {name: 'test'}})}
        >
          <Text>Create Group</Text>
        </Button>
      
    </Container>
  );
});