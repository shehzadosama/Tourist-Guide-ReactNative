import React, { Component } from 'react';
import { View } from 'react-native';
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
                console.log(userId);
                var user;
                const rootRef = firebase.database().ref();
                const speedRef = rootRef.child('users/' + userId);
                speedRef.on('value', snap => {
                    user = snap.val()
                    console.log(user);

                });
            }
            else {
                this.setState({ loading: false })
                console.log("No user log in");
            }
        });
    }
    componentDidMount() {
        console.log(this.props.user);
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
                <Header>
                    <Body>
                        <Title>Tourist Guide Application</Title>
                    </Body>
                </Header>
                <Content>
                    {this.state.loading ? <View><Spinner color='blue' large /></View> :
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
                        </Form>}

                </Content>

            </Container>
        );
    }
}


export default Login_Component;