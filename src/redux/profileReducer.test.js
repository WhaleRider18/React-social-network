import profileReducer, {addPostActionCreator, deletePost} from './profileReducer';
import React from 'react';


let state = {
    PostData : [
        { id: 1, message: "Hi, this is message 1", like: "10" },
        { id: 2, message: "Hi, this is message 2", like: "3" },
        { id: 3, message: "Hi, this is message 3", like: "5" },
        { id: 4, message: "Hi, this is message 4", like: "0" },
        { id: 5, message: "Hi, this is message 5", like: "42" }
    ],
    profile : null,
    status: ''
};

it('length of posts should be incremented', () => {
    
    // 1. Start Data
    let action = addPostActionCreator('Post Text 1');

    //2. Action
    let newState = profileReducer(state , action);

    //3. Expectation
    expect(newState.PostData.length).toBe(6);
    expect(newState.PostData[5].message).toBe('Post Text 1');
    expect(newState.PostData[5].like).toBe(0);
});

it('after deleting length of messages schould be decrement', () => {
    
    // 1. Start Data
    let action = deletePost('Post Text 1');

    //2. Action
    let newState = profileReducer(state , action);

    //3. Expectation
    expect(newState.PostData.length).toBe(5);
});