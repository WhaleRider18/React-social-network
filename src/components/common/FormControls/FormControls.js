import React from 'react';
import f from './FormControls.module.css';

export const FormControl = ({input, meta: {touched, error}, ...props}) => {

    let hasError = touched && error;
    return (
        <div className={hasError ? f.error : ' '} >
            { props.types === 'input' ? 
                <input className={'formControl'} {...input} {...props} /> : 
                <textarea className={'formControl'} {...input} {...props} />
            }
            { hasError && <span>{error}</span> }
        </div>
    )
}

/*
export const CreateField = (placeholder, name, validators, component, props = {}, text = "") => {
    (
    <div>
        <Field    className='formControl' 
            name={name}
            type={'password'} 
            placeholder={placeholder} 
            component={component}
            types={'input'}
            validate={validators}
            {...props}
        />
        {text}
    </div> 
    )
}*/