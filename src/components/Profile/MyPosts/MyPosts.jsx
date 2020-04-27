import React from 'react';

import m from './MyPosts.module.css';

import Post from './Post/Post';

const MyPosts = (props) => {

    let Posts = 
    props.PostData.map( postdates => <Post message={postdates.message} like={postdates.like} key={postdates.id} /> );

    let newPostElement = React.createRef(); //создаем ссылку

    let onAddPost = () => {
        props.addPost(); 
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={m.postsWrapper}>
            <div className={m.enterPost}>
                <textarea onChange={onPostChange} className = 'formControl' ref={newPostElement} value={props.newPostText} />
                <button className = 'btn' onClick = { onAddPost } >Send</button>
            </div>
            <div className={m.posts}>
                {Posts}
            </div>
        </div>
    );
}

export default MyPosts;