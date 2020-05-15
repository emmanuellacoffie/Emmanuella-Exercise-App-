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
  ScrollView,
  ImageBackground,Platform,Animated
} from 'react-native';



class Dailyquote extends React.Component {

  
  render() {
    return (

<View style={styles.container}>
<ScrollView>
      <View style={styles.textContainer}>
        <Image
source={{uri: 'https://i.pinimg.com/originals/9d/59/70/9d597006ec40aad5dff1874646770a59.jpg',}}
style={{height:200, width:200, alignItems: 'center', justifyItems: 'center'}}/>

<Image
source={{uri: 'https://media1.popsugar-assets.com/files/thumbor/tBjr2AQy1pymb5bGD-oYMtH7WZ4/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/01/04/679/n/1922398/addurlEMIBjv/i/Take-Day-Day.jpg',}}
style={{height:200, width:200, alignItems: 'center', justifyItems: 'center'}}/>

<Image
source={{uri: 'https://nitrocdn.com/rdVdpjsyHfwtqaZfkMplDiZritrnIecd/assets/static/source/wp-content/uploads/2019/05/2f20217e330ca8935c283da1dac86d9d.believe-yourself.jpg',}}
style={{height:200, width:200, alignItems: 'center', justifyItems: 'center'}}/>

<Image
source={{uri: '<img src="https://www.theshapewithin.com/wp-content/uploads/2017/11/Dont-eat-less-eat-right-Weight-loss-motivational-quote.jpg" alt="Weight Loss Motivation Quotes | The Shape Within"/>',}}
style={{height:200, width:200, alignItems: 'center', justifyItems: 'center'}}/>
           </View>
            </ScrollView>
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


  

   
});


export default Dailyquote;
