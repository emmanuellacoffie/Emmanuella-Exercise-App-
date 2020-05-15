import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
   
    state = {
        cartoonList: [
            {
                name: 'Beginner',
                time: '7 mins',
                calories: '31 calories',
                imageLink: 'https://cdn.onebauer.media/one/media/5ad8/bcba/3ffe/fc06/2aa6/bcc9/women-gym.jpg?format=jpg&quality=80&width=440&ratio=16-9&resize=aspectfill',
            },
             {
                name: 'Beginner',
                time: '4 mins',
                calories:  '18 calories',  
                imageLink: 'https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Fitness/Articles/10+Ways+to+Boost/woman+working+out-carousel.jpg',
            },
             {
                name: 'Beginner',
                time: '4 mins',
                calories: '16 calories',
                imageLink: 'https://media1.popsugar-assets.com/files/thumbor/oStCU38qB6hu1AHCJ5CyLBQ6TAY/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/02/27/986/n/1922729/6982a2275c7711f34ee2e8.35687035_/i/Why-Women-Work-Out.jpg',
            },
             ]
    }
   
    render() {
        return (
            <View style={styles.container}>
           <Image source={{uri:''}}
                style={{height:100,width:250,}}
                />
                <ScrollView>
           
                {this.state.cartoonList.map((cartoon) => (
                    <View style={styles.cartoonListContainer}>
                       
                        <View style={styles.sideContainer}>
                            <Text style={styles.name}>
                                {cartoon.name}
                            </Text>
                            <Text style={styles.text}>
                            {cartoon.time}
                            </Text>
                            <Text style={styles.text}>
                            {cartoon.calories}
                            </Text>
                      
                        </View>
                      
                        <View style={styles.middleContainer}>
                          <Image source={{uri:cartoon.imageLink}}
                          style={{height:100,width:140,justifyContent:'right'}}
                />                   
                        </View>
                        </View>
                        
                       
                 
                ))}
             
                </ScrollView>
              </View>
      )
   }
}

const styles = StyleSheet.create ({
    container: {
       flex: 1,
       alignItems:'center',
       justifyContent:'center',
    },
    cartoonListContainer: {
        flexDirection: 'row',
        borderWidth:2,
        borderBottomColor: 'black',
        margin:5,
        backgroundColor:'purple'
    },
    sideContainer: {
        width: deviceWidth/2,
        height: deviceHeight/3.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    middleContainer: {
        width: deviceWidth/2,
        height: deviceHeight/3.5,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
   
    text: {
        fontSize:15,
        fontFamily:'Comic Sans MS',
        textAlign:'center',
    },
    name: {
        fontSize:20,
        color:'darkblue',
        fontFamily: 'Comic Sans MS',
        fontWeight:'bold',
        textAlign:'center',
    }
});

