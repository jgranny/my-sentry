import React, {Component} from 'react';
import { Text, View, Dimensions, Keyboard} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Label, Item, Input, Title, List, ListItem, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, H1, Card, CardItem, Image, Form } from 'native-base';
import { removeUserFromGroup, getPlaceDetails } from '../../actions/axiosController';

var mapStateToProps = function({ searchLocation }) {
  return { predictions: searchLocation.predictions };
};

var selectLocation = function(placeId, dispatch) {
  return getPlaceDetails(placeId)
    .then(res => {
      Keyboard.dismiss();
      var { place_id, name, geometry } = res.data.result;
      var { lat, lng } = geometry.location;

      var addLoc = {
        type: 'ADD_LOCATION',
        location: name,
        lat: lat,
        long: lng,
        place_id: place_id
      };
      dispatch(addLoc);
      dispatch({ type: 'CLEAR_LOC'});
      Actions.pop();
    });
};

export default connect(mapStateToProps)(function LocationSearch({ predictions, dispatch }) {
  var {height, width} = Dimensions.get('window');

  return (
    <Container style={{
      position: 'absolute',
      top: ( height / 4) + 29,
      height: 150,
      width: width,
      backgroundColor: '#ccc2cd',  
      opacity: 0.9,        
      borderStyle: 'solid',
      borderColor: 'transparent',
      borderWidth: 1,
    }}>

      <View>
        {predictions.map(prediction => (
          <Button 
          key={prediction.place_id} block light 
          onPress={() => {
            Keyboard.dismiss();
            selectLocation(prediction.place_id, dispatch);
          }}>
            <Text>{prediction.description}</Text>
          </Button>
        ))}
      </View>

    </Container>
  );
});
