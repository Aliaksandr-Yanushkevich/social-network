import React from "react";
import { reduxForm, Field } from "redux-form";
import { required, maxLengthCreator } from "../../utils/validators/validators";
import { Input } from "../FormsControl/FormsControl";

const onSubmit = (fomData) => {
  console.log(fomData);
};

const maxLength10 = maxLengthCreator(10)

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder="login" name="login" component={Input} validate={[required, maxLength10]}/>
      </div>
      <div>
        <Field placeholder="password" name="password" component={Input} validate={[required, maxLength10]}/>
      </div>
      <div>
        <Field type="checkbox" name="rememberMe" component="input" />
        Remember me
      </div>
      <button>Login</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

export default Login;
