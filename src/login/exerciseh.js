import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, Dimensions, StyleSheet, ScrollView, Image} from 'react-native';
import Constants from 'expo-constants';
import CalendarPicker from 'react-native-calendar-picker';
 
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
 
export default class App extends Component {
constructor(props) {
super(props);
this.state = {
//set value in state for start and end date
selectedStartDate: null,
selectedEndDate: null,
};
this.onDateChange = this.onDateChange.bind(this);
}

onDateChange(date, type) {
//function to handle the date change
if (type === 'END_DATE') {
this.setState({
selectedEndDate: date,
});
} else {
this.setState({
selectedStartDate: date,
selectedEndDate: date,
});
}
}

render() {
  const { selectedStartDate, selectedEndDate } = this.state;
const minDate = new Date(2018, 1, 1); // Min date
const maxDate = new Date(2050, 6, 3); // Max date
const startDate = selectedStartDate ? selectedStartDate.toString() : ''; //Start date
const endDate = selectedEndDate ? selectedEndDate.toString() : ''; //End date
return (
<View style={styles.container}>
  <Image
source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/6b/bf/c5/6bbfc5a7befcced73b3c508e1664dde4.jpg',}}
style={{height:200, width:200, alignItems: 'center', justifyItems: 'center'}}/>







<View style={styles.container}>
<ScrollView>
<CalendarPicker
startFromMonday={true}
allowRangeSelection={true}
minDate={minDate}
maxDate={maxDate}
weekdays={['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']}
months={[
'January',
'Febraury',
'March',
'April',
'May',

]}
previousTitle="Previous"
nextTitle="Next"
todayBackgroundColor="#e6ffe6"
selectedDayColor="#66ff33"
selectedDayTextColor="#000000"
scaleFactor={375}
textStyle={{
fontFamily: 'Cochin',
color: '#000000',
}}
onDateChange={this.onDateChange}
/>

<View style={{padding:16}}>
<Text style={{padding:16}}>SELECTED START DATE :</Text>
<Text style={{padding:16}}>{startDate}</Text>
<Text style={{padding:16}}>SELECTED END DATE : </Text>
<Text style={{padding:16}}>{endDate}</Text>
</View>
</ScrollView>
</View>




 
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
 
