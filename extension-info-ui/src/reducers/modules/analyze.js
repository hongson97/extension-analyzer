const initState = {
    result: {

    },
    analyzeItem: {
        isShow: false
    },
    state: 0, // -1: loading; 0: render; 1: permission; 2: scp; 3: conent_script; 4: api
    result_dynamic: {}
}

const analyze = (state = initState, action) => {
    switch (action.type) {
        case 'SEND_ANALYZE_REQUEST':
            return {
                ...state,
                'state': -1
            }
        case 'UPDATE_ANALYZE_RESULT':
            return {
                ...state,
                result: action.payload.result,
                state: 1,
                analyzeItem: {
                    ...state.analyzeItem,
                    isShow: true
                }
            }
        case 'CHANGE_VIEW_STATE':
            return {
                ...state,
                state: action.payload.state
            }
        case 'UPDATE_DYNAMIC':
            return {
                ...state,
                result_dynamic: action.payload
            }
        default:
            return state
    }
}

export default analyze