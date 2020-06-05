const initState = {
    post : [{ id: 1 , name: 'Riyad' }],
}

const rootReducer = ( state=initState , action )=>{
    console.log(action);

    return state;
}

export default rootReducer;