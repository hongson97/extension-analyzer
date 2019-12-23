import axios from 'axios'
import config from '../config'
import { request } from 'http'

const BASE_ANALYZE_API_URL = config.BASE_API_URL + 'analyze' //where is this?
const BASE_ANALYZE_API_URL_2 = config.BASE_API_URL + 'analyze/dynamic' //where is this?

export function sendAnalyzeRequest(extensionLink) {
    return async dispatch => {
        dispatch(startAnalyze())
        console.log(extensionLink)
        try {
            const response = await axios.post(BASE_ANALYZE_API_URL, {
                params: {
                    link: extensionLink
                }
            }, { timeout: 99999999999999})
            const response2 = await axios.post(BASE_ANALYZE_API_URL_2, {
                params: {
                    link: extensionLink
                }
            }, {timeout: 999999999999999})

            if (response.data.result)
                dispatch(updateAnalyzeResult(response.data.result))

            if (response2.data) {
                dispatch(updateDynamic(response2.data))
                console.log("Response2")
                console.log(response2.data.result)
            }


        } catch (err) {
            console.error(err)
        }
        return 0;
    }
}

export function changeViewState(state) {
    return dispatch => {
        dispatch(changeView(state))
    }
}

const changeView = state => ({
    type: 'CHANGE_VIEW_STATE',
    payload: { 'state': state }
})

const startAnalyze = () => ({
    type: 'SEND_ANALYZE_REQUEST',
})

const updateAnalyzeResult = (result) => ({
    type: 'UPDATE_ANALYZE_RESULT',
    payload: { 'result': result }
})

const updateDynamic = (payload) => ({
    type: 'UPDATE_DYNAMIC',
    payload: payload
})