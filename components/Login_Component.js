import React, { Component } from 'react';
import { View, ImageBackground, Image, ActivityIndicator, Modal} from 'react-native';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';
import { Container, Header, Left, Right, Body, Title, Text, Content, Form, Spinner, Item, Input, Label, Button, Footer, FooterTab, Icon } from 'native-base';
class Login_Component extends Component {
    constructor(props) {
        super(props);

        this.state = {

            email: '',
            pass: '',
            loading: true

        };

    }
    componentWillMount() {
        firebase.auth().onAuthStateChanged(() => {
            if (firebase.auth().currentUser) {
                Actions.Dashboard_Container();
                const userId = firebase.auth().currentUser.uid;
                // console.log(userId);
                var user;
                const rootRef = firebase.database().ref();
                const speedRef = rootRef.child('users/' + userId);
                speedRef.on('value', snap => {
                    user = snap.val()
                    // console.log(user);
                });
            }
            else {
                this.setState({ loading: false })
                // console.log("No user log in");
            }
        });
    }
    componentDidMount() {
        // console.log(this.props.user);
    }


    login() {

        var email = this.state.email;
        var pass = this.state.pass;
        if (email === '' || pass === '') {
            alert("All fields required");
        }
        else {
            this.props.login({
                email: email,
                pass: pass,

            });


        }
    }






    render() {
        return (
            <Container>
                {this.state.loading ?
                    // <View><Spinner color='green' large /></View> 

                    <View style={styles.splashScreen}>

                        <ImageBackground
                            style={styles.imageBackground}
                            source={require('../assets/images/background3.png')}
                            resizeMode={Image.resizeMode.cover}
                        >
                            <View > 
                                <Image source={require('../assets/images/splashImg.png')} />
                                <Text style={styles.title}>Tourist Guide App</Text>
                                <ActivityIndicator size={120} style={styles.loader} color="white" />



                            </View>
                        </ImageBackground>

                    </View>

                    :
                    <Container>
                        <Header>
                            <Body>
                                <Title>Tourist Guide Application</Title>
                            </Body>
                        </Header>
                        <Content>
                            <Form>
                                <Item floatingLabel >
                                    <Label>Email</Label>
                                    <Icon name='ios-mail' />
                                    <Input value={this.state.email} onChange={ev => this.setState({ email: ev.nativeEvent.text })} />
                                </Item>
                                <Item floatingLabel>
                                    <Label>Password</Label>
                                    <Icon name='ios-lock' />
                                    <Input secureTextEntry={true} value={this.state.pass} onChange={ev => this.setState({ pass: ev.nativeEvent.text })} />
                                </Item>
                                <Button block success iconRight onPress={this.login.bind(this)} >
                                    <Text>LOGIN</Text>
                                </Button>
                                <Button transparent dark onPress={() => Actions.SignUp_Container()} >
                                    <Text>Not already User? Create an account</Text>
                                </Button>
                            </Form>

                        </Content>

                    </Container>
                }
            </Container>
        );

    }
}

const styles = {


    splashScreen: {
        width: '100%',
        height: '100%'
        // flex: 1
    },
    title: {
        color: 'white',
        fontSize: 30,
        // fontFamily: "CHLORINR",
        fontFamily: "sans-serif-condensed",
        // fontWeight: '800'
    },
    imageBackground: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 40,
        paddingRight: 40,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    loader: {
    marginTop:80
    }
}
export default Login_Component;