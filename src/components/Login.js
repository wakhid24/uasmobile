import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';


import {Actions} from 'react-native-router-flux';

export default class Login extends React.Component{

	main() {
		Actions.main()
	}

	render(){
		return(
			<View style={styles.container}>
				<View style={styles.udahRata}> 
          			<Text style={styles.signupText}>LOGIN</Text>
          		</View>
            	<TextInput style={styles.inputBox}/>
            	<TextInput style={styles.inputBox}/>
	
            	<TouchableOpacity style={styles.button} onPress={this.main}>
              		<Text style={styles.buttonText}>Login</Text>
            	</TouchableOpacity>


        		<View style={styles.penempatan}>
					<Text style={styles.signupButton}>Already have an account?</Text>
					<Text style={styles.signupButton}>Sign in</Text>
        		</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({

	container:{
		backgroundColor : '#00838f',
	    flex: 1,
	    alignItems: 'center',
	   	justifyContent: 'center',
	    paddingVertical: 200,
	},

	udahRata : {
	    flex: 1,
	    alignItems: 'center',
	    justifyContent: 'center',
	    paddingVertical: 100,
  	},

  	inputBox : {
	    width: 350,
	    backgroundColor: 'rgba(255,255,255,0.5)',
	    borderRadius: 12,
	    paddingHorizontal: 16,
	    fontSize: 16,
	    marginVertical: 9,
  	},

  	button  : {
	    width: 350,
	    backgroundColor: 'rgba(0, 117, 39, 1)',
	    borderRadius: 12,
	    marginVertical: 8,
	    paddingVertical: 9,
	    justifyContent: 'center',
  	},

  	buttonText : {
	    fontSize: 18,
	    fontWeight: '500',
	    color: '#bdbdbd',
	    textAlign: 'center',
  	},

  	signupText : {
  	color: 'rgba(255,255,255,1)',
  	fontSize: 30,
  	},


});
