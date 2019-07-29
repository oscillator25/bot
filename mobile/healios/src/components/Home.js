import React from 'react';

import {
	View,
	Text,
	Switch,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Button,
	Picker,
	Image
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Home extends React.Component {
	state = {
		firstName: ''
	};

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Image source={require('../resources/healios.png')} />
				<Button style={{ marginBottom: 30 }} title="Chat with Casey" color="#9CD7FC" />
				<Button title="Chat with case worker" color="#53BFB8" />
			</View>
		);
	}
}

//								name: this.state.name
//});
