import Messages from "./Messages";
import { connect } from "react-redux";
import {
  sendMessageCreator,
  updateMessageTextCreator,
} from "../../redux/messagesReducer";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = ({ messagesPage, auth }) => {
  return {
    messagesPage: messagesPage,
    isAuth: auth.isAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateMessageText: (text) => {
      const action = updateMessageTextCreator(text);
      dispatch(action);
    },
    onSendNewMessage: () => dispatch(sendMessageCreator()),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Messages);
