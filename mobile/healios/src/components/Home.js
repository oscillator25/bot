import React from 'react';

import {
	View,
	Text,
	Switch,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Button,
	Picker
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Home extends React.Component {
	state = {
		firstName: '',
		lastName: '',
		age: '',
		gender: '',
		phoneNumber: '',
		addressLine1: '',
		addressLine2: '',
		city: '',
		stateAbbr: '',
		zipCode: '',
		toggleSwitch1: false,
		switchValuesArray: [false, false, false, false, false, false, false]
	};
	toggleSwitch = value => {
		//onValueChange of the switch this function will be called
		const switchValuesArray = this.state.switchValuesArray;
		switchValuesArray[value] = !switchValuesArray[value];
		this.setState({ switchValuesArray });
		//state changes according to switch
		//which will result in re-render the text
	};
	render() {
		const promptArray = [
			'You have experienced or witnessed a life-threatening event that caused intense fear, helplessness, or horror.',
			'Acting or feeling as if the event were happening again (flashbacks or a sense of reliving it).',
			'Intense physical and/or emotional distress when you are exposed to things that remind you of the event.',
			'Avoiding activities and places or people who remind you of it.',
			'Avoiding thoughts, emotions, feelings, or conversations about it.',
			'Negative beliefs about oneself, others and the world and about the cause or consequences of the event.',
			'Feeling detached from other people, inability to feel positive emotions.'
		];
		const placeholderValue = 'Full Name';
		return (
			<View style={{ margin: 20, flex: 1 }}>
				<Text style={styles.title}>Sign Up</Text>
				<View style={{ flexDirection: 'row' }}>
					<TextInput
						style={{ ...styles.textInput, flex: 1 }}
						placeholder="First Name"
						onChangeText={text => {
							this.setState({
								firstName: text
							});
						}}
						value={this.state.firstName}
					/>
					<TextInput
						style={{ ...styles.textInput, flex: 1 }}
						placeholder="Last Name"
						onChangeText={text => {
							this.setState({
								lastName: text
							});
						}}
						value={this.state.lastName}
					/>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<TextInput
						style={{ ...styles.textInput, width: 50 }}
						placeholder=" Age"
						onChangeText={text => {
							this.setState({
								age: text
							});
						}}
						value={this.state.age}
						keyboardType={'numeric'}
					/>
					<Picker
						style={{ ...styles.textInput, width: 150 }}
						selectedValue={this.state.gender}
						onValueChange={(itemValue, itemIndex) =>
							this.setState({ gender: itemValue })
						}
					>
						<Picker.Item label="Male" value="Male" />
						<Picker.Item label="Female" value="Female" />
						<Picker.Item label="Non-binary" value="Non-binary" />
						<Picker.Item label="Prefer not to say" value="Prefer not to say" />
					</Picker>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<TextInput
						style={{ ...styles.textInput, width: 200 }}
						placeholder="Phone Number"
						onChangeText={text => {
							this.setState({
								phone: text
							});
						}}
						value={this.state.phoneNumber}
						keyboardType={'numeric'}
					/>
				</View>

				<View style={{ flexDirection: 'row', marginTop: 20 }}>
					<TextInput
						style={{ ...styles.textInput, flex: 1 }}
						placeholder="Address Line 1"
						onChangeText={text => {
							this.setState({
								addressLine1: text
							});
						}}
						value={this.state.addressLine1}
					/>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<TextInput
						style={{ ...styles.textInput, flex: 1 }}
						placeholder="Address Line 2"
						onChangeText={text => {
							this.setState({
								addressLine2: text
							});
						}}
						value={this.state.addressLine1}
					/>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<TextInput
						style={{ ...styles.textInput, flex: 3 }}
						placeholder="City"
						onChangeText={text => {
							this.setState({
								city: text
							});
						}}
						value={this.state.city}
					/>
					<Picker
						style={{ ...styles.textInput, flex: 2 }}
						selectedValue={this.state.stateAbbr}
						onValueChange={(itemValue, itemIndex) =>
							this.setState({ stateAbbr: itemValue })
						}
					>
						<Picker.Item label="TX" value="TX" />
						<Picker.Item label="NV" value="NV" />
						<Picker.Item label="LA" value="LA" />
					</Picker>
					<TextInput
						style={{ ...styles.textInput, flex: 2 }}
						placeholder="ZIP"
						onChangeText={text => {
							this.setState({
								zipCode: text
							});
						}}
						value={this.state.zipCode}
						keyboardType={'numeric'}
					/>
				</View>

				<View style={{ ...styles.bottom }}>
					<Button
						// style={{ justifyContent: 'flex-end' }}
						color="darkturquoise"
						onPress={() => {
							Actions.caseyChat({
								name: this.state.name
							});
						}}
						title="Next"
					/>
				</View>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	title: {
		margin: 10,
		fontSize: 20
	},

	textInput: {
		padding: 5,
		height: 40,
		borderWidth: 1,
		borderColor: 'gray',
		margin: 10
	},
	bottom: {
		flex: 1,
		justifyContent: 'flex-end',
		marginBottom: 10
	}
});
