import actions from './../Actions/types'

let store = {
    loaded: false,
    tasks: []
}

const addReducer = (state, action) => {
    console.log('inside addreducer:', state, action);
    let arr = state.tasks.filter((task) => task.title === action.payload.title);
    if(arr.length === 0)
        return { ...state, tasks: state.tasks.concat([action.payload]) } ;
    return state;
}

const deleteReducer = (state, action) => {
    return { ...state, tasks: state.tasks.filter((task) => task.title !== action.title ) }
}

const deleteInitReducer = (state, title) => {
    return { ...state, tasks: state.tasks.map((task) => {
        if(task.title !== title)
            return task;
        return { ...task, deleting: true };
    }) }
}

const loadReducer = (payload) => {
    return { loaded: true, tasks: payload.tasks};
}

const reducer = (state = store, action) => {
    switch(action.type)
    {
        case actions.ADD: return addReducer(state, action);
        case actions.DELETE: return deleteReducer(state, action);
        case actions.DELETE_INIT: return deleteInitReducer(state, action.title);
        case actions.LOAD: return loadReducer(action.payload);
        default: return state;
    }
}

export default reducer;