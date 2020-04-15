import React from "react";
import s from "./NewMessage.module.scss";
import { reduxForm, Field } from "redux-form";
import { TextArea } from "../../FormsControl/FormsControl";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
// import Avatar from "../../Profile/Avatar/Avatar";

const maxLength500 = maxLengthCreator(500)

const NewMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.message}>
        {/* <Avatar/> */}
        <Field
          className={s.inputField}
          name="newMessage"
          // id={id}
          cols="120"
          rows="3"
          placeholder="Write message..."
          component={TextArea}
          validate={[required, maxLength500]}
        />
      </div>
      <div className={s.buttonWrapper}>
        <button className={s.button}>Send</button>
      </div>
    </form>
  );
};

const NewMessageReduxForm = reduxForm({
  form: "newMessage",
})(NewMessageForm);

const NewMessage = ({
  onSendNewMessage
}) => {
  const sendNewMessage = (values) => {
    onSendNewMessage(values.newMessage)
  };
  
  return (
    <div className={s.newPost}>
      <NewMessageReduxForm onSubmit={sendNewMessage}/>
    </div>
  );
};

export default NewMessage;
