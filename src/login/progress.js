import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, Dimensions, TextInput, StyleSheet, Image} from 'react-native';
import Constants from 'expo-constants';
 
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
 
export default class App extends Component {


render() {
return (
<View style={styles.container}>
 <TextInput placeholder="Start" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            
            <TextInput placeholder="Current" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>

            <TextInput placeholder="Change" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
  <Image
source={{uri: 'https://static1.bigstockphoto.com/0/6/2/large1500/260065039.jpg',}}
style={{height:200, width:200, alignItems: 'center', justifyItems: 'center'}}/>
 

 
<View style={styles.navbarContainer}>
 
<View style={styles.navButton}>
<TouchableHighlight
              onPress={() => this.props.navigation.navigate('Today')}
            >
<Image
source={{ uri: 'https://cdn.pixabay.com/photo/2014/04/03/10/42/clipboard-311168_960_720.png' }}
style={{ height: deviceWidth/12, width: deviceWidth/12 }}>
</Image>
</TouchableHighlight>
<Text style={styles.navButtonText}>
Today
</Text>
</View>
 
<View style={styles.navButton}>
<TouchableHighlight
              onPress={() => this.props.navigation.navigate('Workouts')}
            >
<Image
source={{ uri: 'https://image.flaticon.com/icons/png/512/882/882201.png' }}
style={{ height: deviceWidth/12, width: deviceWidth/12 }}>
</Image>
</TouchableHighlight>
<Text style={styles.navButtonText}>
Workouts
</Text>
</View>

 
<View style={styles.navButton}>
<TouchableHighlight
              onPress={() => this.props.navigation.navigate('Programs')}
            > 
<Image
source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP.JGM1AB_ZSYGnKlXXMl2tNQHaHa&pid=Api&P=0&w=300&h=300' }}
style={{ height: deviceWidth/12, width: deviceWidth/12 }}>
</Image>
</TouchableHighlight>
<Text style={styles.navButtonText}>
Programs
</Text>
</View>
 
<View style={styles.navButton}>
<TouchableHighlight
              onPress={() => this.props.navigation.navigate('Progress')}
            > 
<Image
source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP.P5g-nto6eYP8nZWtM0KMFwHaHa&pid=Api&P=0&w=300&h=300' }}
style={{ height: deviceWidth/12, width: deviceWidth/12 }}>
</Image>
</TouchableHighlight>
<Text style={styles.navButtonText}>
Progress
</Text>
</View>
 
<View style={styles.navButton}>
<TouchableHighlight
              onPress={() => this.props.navigation.navigate('Settings')}
            >
<Image
source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.BOhI-PSEQX7qBrNraHTgGwHaHa&pid=Api&P=0&w=300&h=300' }}
style={{ height: deviceWidth/12, width: deviceWidth/12 }}>
</Image>
</TouchableHighlight>
<Text style={styles.navButtonText}>
Settings
</Text>
</View>
 
</View>
</View>
);
}
}
 
const styles = StyleSheet.create({
container: {
backgroundColor: 'white',
alignItems: 'center',
justifyContent: 'center', 
flex: 1,
},

navbarContainer: {
 height: deviceHeight/6,
 width: deviceWidth,
 backgroundColor: 'white',
 flexDirection: 'row',
 alignItems: 'center',
 justifyContent: 'center',
 borderTopWidth: 10,
 borderColor: 'white',
},
navButton: {
 height: deviceHeight/10,
 width: deviceHeight/10,
 alignItems: 'center',
 justifyContent: 'center',
 margin: 7,
},
navButtonText: {
 fontSize: deviceHeight/50,
 textAlign: 'center',
 color: 'gray',
},


 
});
 
