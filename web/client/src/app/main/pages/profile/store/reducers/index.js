import {combineReducers} from 'redux';
import files from './files.reducer';
import selectedItemId from './selectedItemIdReducer';
import sidebars from './sidebars.reducer';
import user from './user.reducer';
import contacts from './contacts.reducer';
import chat from './chat.reducer';

const reducer = combineReducers({
    files,
    selectedItemId,
    sidebars,
    user,
    contacts,
    chat
});

export default reducer;
