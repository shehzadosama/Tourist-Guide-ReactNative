import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';
import { Container, Content, Header, Body, Text, Button, Right, Left, Title, Drawer, Fab, Footer, FooterTab, Spinner, Icon } from 'native-base';
import Icon2 from 'react-native-vector-icons/dist/MaterialIcons';

import MapView from 'react-native-maps';
import ModalMenu from './ModalMenu';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Actions } from 'react-native-router-flux';
// import customMarker from '../assets/images/restaurang_map_icon.jpg'

export default class Dashboard_Component extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kFoodsLoc: {
        latitude: 24.922526,
        longitude: 67.088748,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      },
      mobileRechargeModalOpen: false,

      error: null,

    };
    this.onHideRechargeModal = this.onHideRechargeModal.bind(this);
  }
  componentDidMount() {
    this.props.getCurrentLocation();
  }

  signOut() {



    this.props.signOut();

  }
  updateLoc(location) {



    this.props.updateLoc(location);

  }
  currentLoc() {



    this.props.getCurrentLocation();

  }

  // onRegionChange(region) {
  //   console.log(region);
  //   this.setState({ region });
  // }

  onHideRechargeModal() {
    this.setState({ mobileRechargeModalOpen: false })
  };

  render() {
    closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    };


    return (
      <Container>
        <Container>

          <Header>

            <Body>
              <Title>Tourist Guide</Title>

            </Body>

            <Right>
              <Button onPress={this.signOut.bind(this)}>
                <Text>Logout</Text>
              </Button>
            </Right>
          </Header>
          {!this.props.loc ? <View><Spinner color='green' large /></View> :
            <Content>

              <GooglePlacesAutocomplete
                placeholder='Search'
                minLength={2} // minimum length of text to search
                autoFocus={false}
                returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                listViewDisplayed='auto'    // true/false/undefined
                fetchDetails={true}
                renderDescription={row => row.description} // custom description render
                onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                  this.updateLoc(details.geometry.location);
                  // console.log(data, details, details.geometry.location);
                  var data = details.geometry.location;


                }}

                getDefaultValue={() => ''}

                query={{
                  // available options: https://developers.google.com/places/web-service/autocomplete
                  key: 'AIzaSyATOgwd_QT-IWmgB7TGlNqY4OPUXtSs98E',
                  language: 'en', // language of the results
                  //types: '(cities)' // default: 'geocode'
                }}


                styles={{
                  description: {
                    fontWeight: 'bold',
                    zIndex: 16
                  },
                  predefinedPlacesDescription: {
                    color: '#1faadb'
                  },
                  listView: {
                    // color: 'black', //To see where exactly the list is
                    zIndex: 16, //To popover the component outwards
                    backgroundColor: 'white'
                    //   position: 'absolute',  
                  }
                }}
                currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
                currentLocationLabel="Current location"
                nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                GoogleReverseGeocodingQuery={{
                  // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                }}
                GooglePlacesSearchQuery={{
                  // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                  rankby: 'distance',
                  //types: 'food'
                }}

                filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
                //predefinedPlaces={[homePlace, workPlace]}

                debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
              //renderLeftButton={()  => <Image source={require('path/custom/left-icon')} />}
              //renderRightButton={() => <Text>Custom text after the input</Text>}
              />



              <View style={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                flex: 1
              }}>



                <MapView
                  //style={styles.map}
                  style={styles.map}
                  showsCompass={true}
                  loadingEnabled={true}
                  showsBuildings={true}
                  provider='google'
                  showsUserLocation={true}
                  region={this.props.loc}
                >
                  <MapView.Marker
                    //coordinate={ this.state.region}

                    coordinate={this.props.loc}
                  //center={{ latitude: 24.814211,
                  //longitude: 67.050390,}}
                  //radius={50} strokeColor= {'#3478e5'}
                  //title={marker.title}
                  //description={marker.description}
                  />

                  <MapView.Marker coordinate={this.state.kFoodsLoc}
                    image={require('../assets/images/rsz_1rsz_restaurant_marker.png')}
                    title="Kashif Foods"
                    onPress={() => this.setState({ mobileRechargeModalOpen: true })} />

                  {/* <Image style={{ width: 100, height: 100 }}
                    source={require('../assets/images/restaurang_map_icon.png')}
                  // style={your_custom_image_style}
                  /> */}


                </MapView>

                <Fab
                  active={this.state.active}
                  direction="up"
                  containerStyle={{}}
                  style={{ backgroundColor: '#237ece' }}
                  position="topRight"
                  onPress={this.currentLoc.bind(this)}
                >
                  <Icon2 name="gps-fixed" size={30} color="#900" />
                </Fab>

              </View>
            </Content>}
          {!this.props.loc ? <View></View> :
            <Footer>
              <FooterTab >
                <Button style={styles.firstBtn} onPress={() => Actions.RestaurantList_Container({ loc: this.props.loc })}>
                  <Text style={{ fontSize: 10 }}>Restaurant</Text>
                </Button>
                <Button onPress={() => Actions.HospitalList_Container({ loc: this.props.loc })}>
                  <Text style={{ fontSize: 10 }}>Hospital</Text>
                </Button>

                <Button onPress={() => Actions.ParkList_Container({ loc: this.props.loc })} >
                  <Text style={{ fontSize: 10 }}>Parks</Text>
                </Button>
                <Button style={styles.lastBtn} onPress={() => Actions.HotelList_Container({ loc: this.props.loc })}>
                  <Text style={{ fontSize: 10 }}>Hotel</Text>
                </Button>

              </FooterTab>
            </Footer>}

        </Container>
        {this.state.mobileRechargeModalOpen ?
          <ModalMenu  onHideRechargeModal={this.onHideRechargeModal} />
          : null}
      </Container>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    // flex: 3, 
    // flexDirection: 'row',
    position: 'absolute',
    // padding: 20,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  firstBtn: {
    marginLeft: -10
  },
  lastBtn: {
    marginRight: -20
  },
  map: {
    // position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    width: '100%',
    height: Dimensions.get('window').height
  },
  
});