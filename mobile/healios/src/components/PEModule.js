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
		return <View style={{ flex: 1, backgroundColor: '#1A2730' }}>{false}</View>;
	}
}
