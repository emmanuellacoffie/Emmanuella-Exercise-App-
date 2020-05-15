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



class Settings extends React.Component {

  
  render() {
    return (


      <View style={styles.container}>
       
         
        

          
         


 

<View style={styles.textContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Faqs')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            
                        FAQS
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Reminders')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            
                        REMINDERS
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Dailyquote')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            
                        DAILY QUOTE
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



  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },


  

   touchableButton1: {
        backgroundColor: '#7d0ae6',
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 50,
         borderRadius: 10,
   
   
    },
   
    buttonText: {
     
        
        fontSize: 14,
        fontWeight:'bold',
    }
});


export default Settings;
