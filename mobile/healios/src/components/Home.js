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
			<View style={{ flex: 1, backgroundColor: 'white' }}>
				<View style={{ flex: 2 }}>
					<Image
						style={{
							alignSelf: 'center',
							resizeMode: 'contain',
							width: 300,
							marginTop: -50
						}}
						source={require('../resources/healios.png')}
					/>
					<Text
						style={{
							marginTop: -50,
							alignSelf: 'center',
							fontSize: 24
						}}
					>
						Welcome back, John.
					</Text>
				</View>
				<View style={{ flex: 1, justifyContent: 'space-evenly', margin: 30 }}>
					<Button
						title="Chat with Casey"
						color="#9CD7FC"
						onPress={() => {
							Actions.caseyChat({
								name: this.state.firstName
							});
						}}
					/>
					<Button
						title="Chat with case worker"
						color="#53BFB8"
						onPress={() => {
							Actions.humanChat({
								name: this.state.firstName
							});
						}}
					/>
					{true && (
						<View hide>
							<Button
								title="Prolonged Exposure Module"
								color="#B7B78B"
								onPress={() => {
									Actions.peModule({
										name: this.state.firstName
									});
								}}
							/>
						</View>
					)}
				</View>
			</View>
		);
	}
}

//								name: this.state.name
//});
