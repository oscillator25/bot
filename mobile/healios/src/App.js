import React from 'react';

import Home from './components/Home';
import Chat from './components/Chat';
import TimerFix from './utilities/TimerFix';

import { Router, Scene } from 'react-native-router-flux';

// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
	return <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>;
};

class App extends React.Component {
	render() {
		return (
			<Router>
				<Stack key="root">
					{/* Tab Container */}
					<Scene key="home" component={Home} title="Home" />
				</Stack>
				<Stack>
					<Scene key="caseyChat" component={Chat} title="Chat" />
					<Scene key="humanChat" component={Chat} title="Chat" />
				</Stack>
			</Router>
		);
	}
}
//					<Scene key="tabbar" tabs={true} tabBarStyle={{ backgroundColor: '#FFFFFF' }}>

export default App;
