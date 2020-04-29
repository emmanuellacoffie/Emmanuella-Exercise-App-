import React from 'react';
import {
  StyleSheet,
  Text,
  Keyboard,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
  Button,
  Image,
  TouchableHighlight,
  ImageBackground,Platform,Animated
} from 'react-native';



class Homescreen extends React.Component {

  
  render() {
    return (


      <View style={styles.container}>
       
         
        
         <ImageBackground
style={styles.background}source={{uri: 'https://tse4.mm.bing.net/th?id=OIP.LpjZS-5TWajfyCMGqsPIxAHaHa&pid=Api&P=0&w=300&h=300',}}>
         </ImageBackground> 
          
         


 

<View style={styles.textContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Sign')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            
                        LOG IN
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>

 

      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {

flex: 1,

backgroundColor: '#fff',
justifyContent: 'center',
},
background: {
height: 450,
alignItems: 'center',
},


  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },


  text: {
    
    fontSize: 8,
    fontWeight:'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },

   touchableButton1: {
        backgroundColor: '#7d0ae6',
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        marginBottom: 50,
         borderRadius: 10,
   
   
    },
   
    buttonText: {
     
        
        fontSize: 14,
        fontWeight:'bold',
    }
});


export default Homescreen;
