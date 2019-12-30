import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';


import Login from './components/Login';
import Main from './components/Main';



export default class Routes extends Component<{}> {
	render() {
		return (
			<Router>
		    <Stack key="root" hideNavBar={true}>
		      <Scene key="login" component={Login} title="Login" initial={true}/>
		      <Scene key="main" component={Main} title="Main" />
		    </Stack>
		  </Router>
			)
	}
}