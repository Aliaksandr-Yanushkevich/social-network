import React from "react";
import { reduxForm, Field } from "redux-form";

const onSubmit = (fomData) => {
  console.log(fomData);
};

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
        <Field placeholder="login" name="login" component="input" />
      </div>
      <div>
        <Field placeholder="password" name="password" component="input" />
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
