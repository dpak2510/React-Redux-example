import actions from './types';

const addCreator = (payload) => {
    return {
        type: actions.ADD,
        payload
    }
}

const deleteCreator = (title) => {
    return {
        type: actions.DELETE,
        title
    }
}

const deleteInitCreator = (title) => {
    return {
        type: actions.DELETE_INIT,
        title
    }
}

const deleteActionCreator = (title) => {
    return (dispatch) => {
        dispatch(deleteInitCreator(title));
        setTimeout(()=>{
            dispatch(deleteCreator(title));
        }, 3000);
    }
}

const loadCreator = (payload) => {
    return {
        type: actions.LOAD,
        payload
    }
}

const loadActionCreator = () => {
    return dispatch => {
        setTimeout( () => {
            const store = {
                tasks: [
                    {
                        title: 'Task 1',
                        desc: 'Some Random Text',
                        deleting: false
                    },
                    {
                        title: 'Task 2',
                        desc: 'Some Random Text',
                        deleting: false
                    },
                    {
                        title: 'Task 3',
                        desc: 'Some Random Text',
                        deleting: false
                    }
                ]
            }
            dispatch(loadCreator(store));
        } ,1000);
    }
}

export default {
    addCreator,
    deleteActionCreator,
    loadActionCreator
};