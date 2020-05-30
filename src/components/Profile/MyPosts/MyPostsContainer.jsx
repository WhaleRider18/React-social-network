import {connect} from 'react-redux';

import MyPosts from './MyPosts';

import {addPostActionCreator} from "../../../redux/profileReducer";


/*const MyPostsContainer = () => {

    //let state = props.store.getState();

    /*let addPost = () => {
        props.store.dispatch( addPostActionCreator() );
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch( action );
    };

    return ( 
            <StoreContext.Consumer>
                {
                (store) => {
                    let state = store.getState();

                    let addPost = () => {
                        store.dispatch( addPostActionCreator() );
                    }
                
                    let onPostChange = (text) => {
                        let action = updateNewPostTextActionCreator(text);
                        store.dispatch( action );
                    };

                    return (
                        <MyPosts 
                            addPost={addPost} 
                            updateNewPostText={onPostChange}
                            PostData={state.profilePage.PostData} 
                            newPostText={state.profilePage.newPostText} />
                        );
                    }
                }
            </StoreContext.Consumer>
        );
}*/

let mapStateToProps = (state) => {
    return {
        PostData: state.profilePage.PostData,
        newPostText: state.profilePage.newPostText
    }
} // данные, которые мы берем из store 

let mapDispatchToProps = (dispatch/* dispatch, binded на store */) => {
    return {
        addPost: (newPostBody) => {
            dispatch( addPostActionCreator(newPostBody) );
        }
    }
} // коллбеки, которые мы будем dispatch

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;