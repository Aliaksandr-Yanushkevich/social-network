import React from "react";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages";
import { connect } from "react-redux";
import {
  sendMessageCreator,
  updateMessageTextCreator
} from "../../redux/messagesReducer";

const mapStateToProps = ({ messagesReducer }) => {
  return {
    messagesReducer: messagesReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateMessageText: text => {
      const action = updateMessageTextCreator(text);
      dispatch(action);
    },
    onSendNewMessage: () => dispatch(sendMessageCreator())
  };
};
const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default MessagesContainer;
