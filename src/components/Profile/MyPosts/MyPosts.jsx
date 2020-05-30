import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {required,maxLengthCreator} from '../../../utils/validators/validators';
import {FormControl} from '../../../components/common/FormControls/FormControls';

import m from './MyPosts.module.css';

import Post from './Post/Post';

let maxlength10 = maxLengthCreator(10);

const MyPosts = React.memo((props) => {

    let Posts = 
    props.PostData.map( postdates => <Post message={postdates.message} like={postdates.like} key={postdates.id} /> );

    let addNewPost = (values) => {
        props.addPost(values.newPostBody);
    }

    return (
        <div className={m.postsWrapper}>
            <AddPostFormRedux onSubmit={addNewPost}/>
            <div className={m.posts}>
                {Posts}
            </div>
        </div>
    );
});

const AddPostForm = (props) => {
    return (
        <form className={m.enterPost} onSubmit={props.handleSubmit}>
            <Field  component={FormControl}
                    types={'textarea'}
                    name={'newPostBody'}
                    validate = { [required, maxlength10]} />
            <button className='btn'>Send</button>
        </form>
    )
} 

const AddPostFormRedux = reduxForm({
    form: 'postAddMessageForm'
})(AddPostForm)


export default MyPosts;