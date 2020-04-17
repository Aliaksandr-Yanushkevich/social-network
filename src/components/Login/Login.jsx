import React from "react";
import { reduxForm, Field } from "redux-form";
import { required, maxLengthCreator } from "../../utils/validators/validators";
import { Input } from "../FormsControl/FormsControl";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";
import s from "../FormsControl/FormsControl.module.scss";

const maxLength50 = maxLengthCreator(50);

const Login = (props) => {
  const onSubmit = (fomData) => {
    props.login(fomData.email, fomData.password, fomData.rememberMe);
  };
  if (props.isAuth) return <Redirect to="/profile" />;
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
        <Field
          placeholder="email"
          name="email"
          component={Input}
          validate={[required, maxLength50]}
        />
      </div>
      <div>
        <Field
          placeholder="password"
          name="password"
          component={Input}
          validate={[required, maxLength50]}
          type="password"
        />
      </div>
      <div>
        <Field type="checkbox" name="rememberMe" component="input" />
        Remember me
      </div>
      {props.error && <div className={s.formSummaryError}>{props.error}</div>}
      <button>Login</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
