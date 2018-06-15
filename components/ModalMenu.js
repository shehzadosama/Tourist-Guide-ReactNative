import React from 'react';
import { Modal, View, Text, TouchableOpacity, Image, TouchableHighlight, ScrollView } from 'react-native';
import { Button, Icon } from 'native-base';
import ImageSlider from 'react-native-image-slider';
import { connect } from 'react-redux';


class ModalMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        // let { sytles } = this.props;
        return (
            <Modal transparent={true} animationType="fade" visible={true} visible={this.props.mobileRechargeModalOpen} onRequestClose={() => this.props.onHideRechargeModal()} onPress={() => this.props.onHideRechargeModal()}>
                <View style={styles.container}>
                    <View style={styles.modalInner}>
                        <View style={styles.modalHeader}>
                            <TouchableOpacity style={styles.closeButton} onPress={() => this.props.onHideRechargeModal()}>
                                <Icon style={styles.closeButtonText} name="md-close" />
                            </TouchableOpacity>
                            <Text style={styles.headerText}>Kashif Foods</Text>
                        </View>
                        <Text style={styles.text}>MENU</Text>
                        <View style={styles.operatorsMain}>
                            {/* <ScrollView style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}> */}
                            {/* <TouchableHighlight style={styles.operatorsImage}
                                    underlayColor='lightgray'
                                    activeOpacity={0.5}
                                    onPress={() => { this.setNetwork('zong') }}
                                >
                                    <Image style={styles.productImage}
                                    // source={require(`../../static/images/Zong_Logo.png`)}
                                    /></TouchableHighlight>
                                <TouchableHighlight style={styles.operatorsImage}
                                    underlayColor='lightgray'
                                    activeOpacity={0.5}
                                    onPress={() => { this.setNetwork('telenor') }}>
                                    <Image style={styles.productImage}
                                    // source={require(`../../static/images/Telenor_Logo.png`)}
                                    /></TouchableHighlight>
                                <TouchableHighlight style={styles.operatorsImage}
                                    underlayColor='lightgray'
                                    activeOpacity={0.5}
                                    onPress={() => { this.setNetwork('ufone') }}>
                                    <Image style={styles.productImage}
                                    // source={require(`../../static/images/Ufone_Logo.png`)}
                                    /></TouchableHighlight>
                                <TouchableHighlight style={styles.operatorsImage}
                                    underlayColor='lightgray'
                                    activeOpacity={0.5}
                                    onPress={() => { this.setNetwork('jazz') }}>
                                    <Image style={styles.productImage}
                                    // source={require(`../../static/images/Jazz_Logo.png`)}
                                    /></TouchableHighlight>
                                <TouchableHighlight style={styles.operatorsImage}
                                    underlayColor='lightgray'
                                    activeOpacity={0.5}
                                    onPress={() => { this.setNetwork('warid') }}>
                                    <Image style={styles.productImage}
                                    // source={require(`../../static/images/Warid_Logo.png`)}
                                    /></TouchableHighlight> */}
                            {/* </ScrollView> */}

                            <ImageSlider style={{ width: '100%', height: '60%' }} images={[
                                require('../assets/images/1.jpg'),
                                require('../assets/images/Screenshot_155.png'),
                                require('../assets/images/3.jpg')
                            ]} />
                        </View>
                        <Text style={styles.textBottom}>Recmommended Food: SINGAPOREAN RICE</Text>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = {
    container: {
        paddingLeft: 0,
        paddingRight: 0,
        // justifyContent: 'center',
        flexDirection: 'row',
        alignContent: 'space-between',
        backgroundColor: '#00000098',
        width: '100%',
        height: '100%'
    },
    operatorsMain: {
        height: '70%',
        flexDirection: 'row',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:-40
    },
    operatorsImage: {
        width: 200,
        height: 180,
        margin:5,
        borderWidth: 2,
        borderColor: '#e8e9ea',
        borderRadius: 5,
    },
    addQuantity: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 10,
        width: '75%',
        paddingTop: '10%',

    },
    productImage: {
        // width: 100,
        marginBottom: 13,
        marginTop: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addQuantityinner: {
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        paddingLeft: '15%',
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 18,
        color: '#555556'
    },
    modalInner: {
        backgroundColor: 'transparent',
        height: '100%',
        width: '100%'
    },
    modalHeader: {
        height: '10%',
        backgroundColor: '#978add',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        height: 70,
        width: '100%'
    },
    modalContent: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    image: {
        height: 140
    },
    closeButton: {
        width: '10%'
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 25,
        paddingLeft: 15,
        // paddingTop: 5,
        marginLeft: -10,
        fontWeight: '900',
    },
    headerText: {
        color: '#fff',
        width: '96%',
        fontSize: 15,
        marginLeft: 30,
        fontFamily: 'Roboto',
        fontWeight: '100',
        fontSize: 20,
    },
    headerPriceText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'right',
        position: 'relative',
        right: 10,
        width: '30%',
        fontFamily: 'Roboto',
        fontWeight: '100',
        fontSize: 18,
    },
    text: {
        color: '#ffffff',
        textAlign: 'center',
        margin: 10,
        // marginTop: 20,
        // marginBottom: 10,
        fontSize: 40,
        // textAlign:'center',
        fontWeight: '600',
        backgroundColor: 'transparent',
        // alignItems:'center'
    },
    textBottom: {
        color: '#978add',
        textAlign: 'center',
       
        marginTop: -20,
        margin:10,
        // marginBottom: 10,
        fontSize: 20,
        // textAlign:'center',
        fontWeight: '600',
        backgroundColor: 'transparent',
        // alignItems:'center'
    },
    removeText: {
        color: '#555556',
        fontFamily: 'HelveticaNeue',
    },
    removeButton: {
        alignSelf: 'center',
        backgroundColor: '#fafbfc',
        // marginTop: '50%', 
        // marginBottom: 10, 
        marginRight: 5,
        marginLeft: 5,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#c2c7cc',
        width: '40%',
        height: 60,
        paddingTop: 30,
        paddingBottom: 30,
        elevation: 0,
        justifyContent: 'center',
        borderRadius: 5
    }
};

export default connect()(ModalMenu);