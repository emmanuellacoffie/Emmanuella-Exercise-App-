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



class Reminders extends React.Component {

  
  render() {
    return (


      <View style={styles.container}>
       
         
      
          
         


 
<ScrollView>
<View style={styles.textContainer}>

            <Text style={styles.buttonText}>
                     Make the Commitment 
One of this year’s most popular trends in food was the commitment to stop dieting and start eating better every day! This commitment to your health also includes getting more exercise, drinking more water, getting more sleep, etc. but maintaining a healthy, balanced diet in your everyday life is a key starting point, and a wonderful commitment to make to yourself, promising not to dietfor a short period of time but instead to be mindful of what you put into your body on a daily basis. Consider it a Resolution that you make to yourself, at any time of year, that offers immediate reward for your overall health. Treat your body as your temple, as they say, and you will see and feel the results!

Start in your Shopping Cart
Many of the healthy choices you make originate when you shop for food. The best ways to shop for healthy food and drink choices are to never go shopping when you are hungry, because you will reach for quick and easy to prepare foods which are, more often than not, processed and less healthy options, and always go shopping with a list. When you make your shopping list, employ some of the following tips mentioned here to ensure you are generating a selection of foods that will keep you on track for a healthier lifestyle, including a variety of foods and foods that armor against everyday healthy complaints as well as those that reduce the risk of diseases.  By using a shopping list, you are pre-planning what you will be eating which will help you with time management too. You can read more about grocery shopping for your health here.

Variety is Key
A balanced diet includes a great variety of foods. You get into the habit of always eating the same, family-favorite foods. But why not introduce new foods that you can all learn to enjoy together, while reaping the health rewards as well. Try some chia or hemp seeds on your salads, or if your family likes one type of fish, try a new one this week. If you always have hamburgers, try turkey burgers or even a veggie burger instead. Try avocado in your tacos for a change! And when it comes to dessert, try frozen yogurt instead of ice cream or fruit salad instead of other sweets. Many families enjoy themed nights like “Meatless Mondays” or “Fish Fridays” as alternatives to the same-old meals. This keeps children excited about what’s for dinner. Also, in being mindful of variety, take advantage of the wide array of vegetables, fruits, even types of bread at your grocery store. There are so many alternatives to what you might normally eat that you might end up liking even better! Remember that food is to be enjoyed and by keeping things interesting, you will find yourself excited to employ a variety of healthy foods into your daily routine.

Always Read the Label
Recently, restaurants and food companies became legally required to list the calorie count on all foods/meals. You might have experienced quite a shock when you learned how much of your daily calorie allowance came from meals that you thought were healthy. It is imperative that you learn to read food labels the same way. Always take into account the calorie count of a serving size, in addition to the fat content, sodium content, etc. As you begin to try new foods and source alternatives to some of your more common choices, compare these food labels and you will find that there are always healthier choices of the same, if not similar, foods. Know what nutrients you need to limit and those of which you must get enough. For example, fat, cholesterol and sodium are the nutrients that can have adverse health effects if you consume too much. While vitamins A and C, the minerals iron and calcium and fiber are beneficial to your health and you need to make sure you are getting enough of these.

Portion Control
One of the biggest reasons healthy eating plans fail is that while you may be making healthier choices in what you eat, you are still eating too much. For example: Did you know that a sandwich is two servings of bread, not one? Or that a box of pasta should feed 6-8 people? Get to know what a real serving size is. While you might be shocked, at least you will be better informed and on your way to a healthier lifestyle. There are many guides available that will help you to better balance your portion sizes. Again, reading labels will also help you to learn what a real serving size is as you cook and plate your food. When you eat out at a restaurant, most meals are at least double a serving size, so consider sharing your meal or eat half then and take the other half home for another time.

Be Colorful 
You already know that fruits and vegetables are good for you. But what you may need reminding is that eating a variety of colors of fruits, and particularly of vegetables, is even better for you! There are different vitamins, nutrients and minerals in all fruits and vegetables. Bringing more color to your plate not only increases health benefits but also adds a little excitement to your meal. Trying new vegetables is never a bad idea!       
                      
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


export default Reminders;
