import React from 'react';

import {
    View,
    Text,
    Switch,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Button
} from 'react-native';

import {
    Actions,
} from 'react-native-router-flux';

export default class Home extends React.Component {
    state = {
        username: '',
        toggleSwitch1: false,
        switchValuesArray: [false,false,false,false,false,false,false]
        // switchValuesArray: [{0:false},{1:false},{2:false},{3:false},{4:false},{5:false},{6:false}]
        // switchValue: false,
    };
    toggleSwitch = (value) => {
        //onValueChange of the switch this function will be called
        const switchValuesArray = this.state.switchValuesArray
        switchValuesArray[value] = !switchValuesArray[value]
        this.setState({ switchValuesArray })
        //state changes according to switch
        //which will result in re-render the text
    }
    render() {
        const promptArray = [
            'You have experienced or witnessed a life-threatening event that caused intense fear, helplessness, or horror.',
            'Acting or feeling as if the event were happening again (flashbacks or a sense of reliving it).',
            'Intense physical and/or emotional distress when you are exposed to things that remind you of the event.',
            'Avoiding activities and places or people who remind you of it.',
            'Avoiding thoughts, emotions, feelings, or conversations about it.',
            'Negative beliefs about oneself, others and the world and about the cause or consequences of the event.',
            'Feeling detached from other people, inability to feel positive emotions.',
        ]
        const placeholderValue = 'Full Name'
        return (
            <View>
                <Text style={styles.title}>
                    Enter your name:
                </Text>

                <TextInput
                    style={styles.nameInput}
                    placeholder='Full Name'
                    onChangeText={(text) => {
                        this.setState({
                            username: text,
                        })
                    }}
                    value={this.state.username}
                />
                <Text style={{ ...styles.prompt, fontSize: 16, marginTop: -5 }}>
                    Screening for Post Traumatic Stress Disorder
                </Text>
                <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>

                    {promptArray.map(prompt => (
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <View>
                                <Text style={{ ...styles.prompt, width: 325 }}>
                                    {prompt} 
                                </Text>
                            </View>
                            <View >
                                <Switch
                                    style={styles.buttonMargin}
                                    onValueChange={() => this.toggleSwitch(promptArray.indexOf(prompt))}
                                    value={this.state.switchValuesArray[promptArray.indexOf(prompt)]}
                                />
                            </View>
                        </View>
                    ))}

                    <Text style={{ ...styles.prompt, fontSize: 11, marginTop: 15 }}>
                        Source: Anxiety and Depression Association of America https://adaa.org/screening-posttraumatic-stress-disorder-ptsd
                </Text>





                    {/* 

                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <View>
                            <Text style={{ ...styles.prompt, width: 330 }}>
                                You have experienced or witnessed a life-threatening event that caused intense fear, helplessness, or horror.
                            </Text>
                        </View>
                        <View >
                            <Switch
                                style={styles.buttonMargin}
                                onValueChange={this.toggleSwitch}
                                value={this.state.switchValue}
                            />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <View>
                            <Text style={{ ...styles.prompt, width: 330 }}>
                                Acting or feeling as if the event were happening again (flashbacks or a sense of reliving it).
                            </Text>
                        </View>
                        <View >
                            <Switch
                                style={styles.buttonMargin}
                                onValueChange={this.toggleSwitch}
                                value={this.state.switchValue}
                            />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <View>
                            <Text style={{ ...styles.prompt, width: 330 }}>
                                Intense physical and/or emotional distress when you are exposed to things that remind you of the event.
                            </Text>
                        </View>
                        <View >
                            <Switch
                                style={styles.buttonMargin}
                                onValueChange={this.toggleSwitch}
                                value={this.state.switchValue}
                            />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <View>
                            <Text style={{ ...styles.prompt, width: 330 }}>
                                Avoiding activities and places or people who remind you of it.
                            </Text>
                        </View>
                        <View >
                            <Switch
                                style={styles.buttonMargin}
                                onValueChange={this.toggleSwitch}
                                value={this.state.switchValue}
                            />
                        </View>
                    </View> */}

                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', bottom: -30 }}>
                    <TouchableOpacity style={{ ...styles.buttonStyle, backgroundColor: 'purple' }}
                        onPress={() => {
                            // Actions.chat({
                            //     name: this.state.name,
                            // });
                        }}
                    >
                        <Text style={styles.buttonText}>
                            Call
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ ...styles.buttonStyle, backgroundColor: 'green' }}
                        onPress={() => {
                            Actions.chat({
                                name: this.state.name,
                            });
                        }}
                    >
                        <Text style={styles.buttonText}>
                            Chat
                    </Text>
                    </TouchableOpacity>
                </View>



            </View >
        )
    }
}

var styles = StyleSheet.create({
    title: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 20,
    },
    prompt: {
        marginTop: 15,
        marginLeft: 20,
        fontSize: 13,
    },
    buttonMargin: {
        marginTop: 16,
    },
    nameInput: {
        padding: 5,
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        margin: 20,
        marginTop: 5
    },
    buttonText: {
        marginLeft: 0,
        fontSize: 20,
        marginTop: -13,
        color: 'white'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'space-around',

        // alignItems: 'flex-left',
        // marginTop: 200,
        // flexDirection:'column',
        alignItems: 'flex-end',
        // position: 'absolute',
        // bottom: 0

    },
    buttonStyle: {
        padding: 20,
        // backgroundColor: 'blue',
        borderRadius: 10
    },

});

// style={{
//     position: 'absolute',
//     bottom: 20
// }}

// justifyContent: 'flex-end',
//                     marginBottom: 36, position: 'absolute', alignSelf: 'flex-end',marginEnd: 80