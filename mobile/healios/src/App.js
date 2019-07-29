import React from 'react';

import Registration from './components/Registration';
import Chat from './components/Chat';
import Home from './components/Home';
import TimerFix from './utilities/TimerFix';

import { Router, Scene, Stack } from 'react-native-router-flux';

// // Simple component to render something in place of icon
// const TabIcon = ({ selected, title }) => {
// 	return <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>;
// };

class App extends React.Component {
	render() {
		return (
			<Router>
				<Scene key="root">
					{/* Tab Container */}
					<Scene key="registration" component={Registration} title="Registration" />
					<Scene key="home" component={Home} title="Home" />
					<Scene key="caseyChat" component={Chat} title="Casey" />
					<Scene key="humanChat" component={Chat} title="Sarah" />
				</Scene>
			</Router>
		);
	}
}
//					<Scene key="tabbar" tabs={true} tabBarStyle={{ backgroundColor: '#FFFFFF' }}>

export default App;
