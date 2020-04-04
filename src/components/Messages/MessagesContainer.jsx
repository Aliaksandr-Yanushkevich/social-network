import Messages from "./Messages";
import { connect } from "react-redux";
import {
  sendMessageCreator,
  updateMessageTextCreator
} from "../../redux/messagesReducer";

const mapStateToProps = ({ messagesPage }) => {
  return {
    messagesPage: messagesPage
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
