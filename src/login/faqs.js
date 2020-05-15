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



class Faqs extends React.Component {

  
  render() {
    return (


      <View style={styles.container}>
       
         
      
          
         


 
<ScrollView>
<View style={styles.textContainer}>

            <Text style={styles.buttonText}>
                            
                        What is a healthy diet?
 
The fundamental principle to a healthy diet comes down to one word; balance. Many other factors are included to ensure a balanced diet, but essentially eating enough food that provides the range of nutrients your body requires encourages the promotion of good health. It is important to ensure this variety of foods, guaranteeing a broad range of the nutrients, vitamins and minerals that your body needs. When you are receiving too little or too much of certain elements, this can result in health problems. That is why moderation and control of your diet is important. For example, fats are a necessary part of your diet, but when they exceed the body’s required amount, it can be stored in the body, potentially causing problems, most importantly cardiovascular issues. 

How can you benefit from a healthy diet?
Eating a healthy diet most obviously will assist you in losing weight, but healthy eating has many other benefits. Changing your diet can significantly improve your general health, tackling diseases associated with heart conditions and cholesterol, as well as aiding diabetes, types of cancers, and even depression. Those who eat a balanced and healthy diet are generally considered to live longer lives because of these health benefits. Diet changes can also boost energy levels as high sugar and fat based foods are generated into energy quickly and so run out quickly, leaving us fatigued. Healthier foods release energy at a slower rate, producing a slower and more sustainable release of energy over a longer period of time. Healthy eating can not only improve your body but can change your mood; making you feel more positive and more relaxed, particularly when combined with exercise. 

How can you achieve a healthy diet?
The general rules for healthy eating is that natural foods are generally healthy, and if a product has been overly processed it may contain unhealthy ingredient such as added sugars or ‘bad’ fats. Cutting down on sugars, fats and salts is usually a good place to start when changing a diet as these elements are usually the problem, and instead, replace them with natural products such as fruits, veg, nuts, seeds grains and so on. The key to a healthy diet is balance and ensuring the correct amounts of each dietary element. Your diet should include a range of carbs, proteins, vitamins and mineral, fats and dairy, which in appropriate amounts can help you feel the health benefits that follow with a healthy diet.

                        </Text>
                        
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


  

   
   
    buttonText: {
     
        
        fontSize: 14,
        fontWeight:'bold',
    }
});


export default Faqs;
