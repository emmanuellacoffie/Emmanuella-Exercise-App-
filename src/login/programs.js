import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
   
    state = {
        cartoonList: [
            {
                name: 'the Daily Jolt',
                time: '4 weeks',
                calories: '28 workouts',
                imageLink: 'https://previews.123rf.com/images/didesign021/didesign0211805/didesign021180500170/101738763-exercise-with-heavy-weight-muscular-girl-holding-weights-and-training-hard-at-gym.jpg',
            },
             {
                name: 'Intro to Fitness',
                time: '6 weeks',
                calories:  '30 workouts',  
                imageLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNNWMGG4OHdAnzx66bzmzTppTGuSz3UjSOkj7u3wa0_anjnLBf&usqp=CAU',
            },
             {
                name: 'COVID-19 Immuno Boost I',
                time: '2 weeks',
                calories: '14 Workouts',
                imageLink: 'https://d1yn1kh78jj1rr.cloudfront.net/image/preview/rDtN98Qoishumwih/DD-05142016-0O1A4974_SB_PM.jpg',
            },
             ]
    }
   
    render() {
        return (
            <View style={styles.container}>
           <Image source={{uri:'https://starterkit.innis.utoronto.ca/wp-content/uploads/2016/06/programs.jpg'}}
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
       backgroundColor: '#fff',
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

