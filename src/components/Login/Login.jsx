import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { Redirect } from 'react-router-dom';
import {FormControl} from '../common/FormControls/FormControls';
import {required} from '../../utils/validators/validators';
import {connect} from 'react-redux';
import { login } from "../../redux/auth-reducer";

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <Field  className='formControl' 
                        name={'email'} 
                        placeholder={'email'} 
                        component={FormControl}
                        types={'input'}
                        validate={[required]} />
            </div>
            <div className='form-group'>
                <Field  className='formControl' 
                        name={'password'}
                        type={'password'} 
                        placeholder={'Password'} 
                        component={FormControl}
                        types={'input'}
                        validate={[required]}/>
            </div>
            <div className='form-group'>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'} />
                <small>remember me</small>
            </div>
            {error &&
                <div className="error">
                    {error}
                </div>
            }
            <div>
                <button className='btn' type={'submit'}>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className="logoCard">
            <img alt="pic" src="https://images.unsplash.com/photo-1590725142996-b945054db724?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80" />
            <div className="card">
                <div className="cardHeader"><h1>Welcome!</h1></div>
                <div className="cardContent">
                    <LoginReduxForm onSubmit={onSubmit} />
                </div>
            </div>
        </div>
    );
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login} )(Login);