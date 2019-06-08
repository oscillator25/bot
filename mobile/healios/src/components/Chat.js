import React from 'react';

import {
    View,
    Text
} from 'react-native';

import {GiftedChat} from 'react-native-gifted-chat';

class Chat extends React.Component {
    state = {
        messages: []
    };
    render() {
        return (
            // <View>
            //     <Text>
            //         Hello {this.props.username}
            //     </Text>
            // </View>

            <GiftedChat
                messages={this.state.messages}
                onSend={(message) => {
                    //send message to backend
                }}
                // onSend={messages => this.onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
        );


    }
}

Chat.defaultProps = {
    username: 'John',
};

// Chat.propTypes = {
//     name: React.PropTypes.string,
// };

export default Chat;