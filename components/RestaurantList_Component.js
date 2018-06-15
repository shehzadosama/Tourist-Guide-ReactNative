import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Right, Body, Left, Button, Title, Icon, Spinner, View, Separator, ListItem, Thumbnail, List } from 'native-base';
import { Actions } from 'react-native-router-flux';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
export default class RestaurantList_Component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.renderList = this.renderList.bind(this)
  }
  componentDidMount() {
    this.props.getRestaurantList();
    // setTimeout(() => { this.setState({ loading: false }) }, 3000);
  }
  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps)
  // }
  renderList() {
    // console.log('in render list')
    console.log(this.props.restaurantList)
    var init = {
      lat: this.props.currentLoc.latitude,
      lng: this.props.currentLoc.longitude,
    }
    var initDestType = {
      dest: {
        lat: 24.922526,
        lng: 67.088748,
      },
      name: 'Kashif Foods',
      init: init,
      type: 'restaurant'
    };
    return (< List >
      <ListItem style={{ marginLeft: 5, borderBottomWidth: 2, borderColor: 'black' }}>
        <Thumbnail square size={80} source={require('../assets/images/kfoods.jpg')} />
        <Body>
          <Text>Kashif Foods   (Recommended)</Text>
          <Text note>Ratings: 4.3</Text>
          <Text note>Address: Allama Shabbir Ahmed Usmani Flyover, Block 2 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh, Pakistan</Text>

        </Body>
        <Right>
          <Button transparent  >
            <Icon name="navigate" style={{ fontSize: 40, color: 'red' }} onPress={() => Actions.PlaceDetails({ initDestType })} />
          </Button>
        </Right>
      </ListItem >
      {this.props.restaurantList.map((data, index) => {
        var initDestType = {
          dest: data.geometry.location,
          init: init,
          name: data.name,
          type: 'restaurant'
        };
        return (
          <ListItem key={index} style={{ marginLeft: 5 }}>
            <Thumbnail square size={80} source={{ uri: data.icon }} />
            <Body>
              <Text>{data.name}</Text>
              <Text note>Ratings: {data.rating}</Text>
              <Text note>Address: {data.vicinity}</Text>

            </Body>
            <Right>
              <Button transparent onPress={() => Actions.PlaceDetails({ initDestType })} >
                <Icon name="navigate" style={{ fontSize: 40 }} />
              </Button>
            </Right>
          </ListItem >
        )
      })
      }
    </List >)

  }
  render() {
    // setTimeout(function () { alert("Hello"); }, 3000);
    // console.log(this.props.restaurantList);


    console.log(this.props.restaurantList)

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title style={{ marginLeft: -70 }}>Restaurants</Title>

          </Body>
        </Header >
        <Content>
          {this.props.restaurantList ?



            this.renderList()

            : <View><Spinner color='green' large /></View>

          }
        </Content>
      </Container>
    );
  }
}