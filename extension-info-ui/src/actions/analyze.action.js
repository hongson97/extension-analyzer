import axios from 'axios'
import config from '../config'
import { request } from 'http'

const BASE_ANALYZE_API_URL = config.BASE_API_URL + 'analyze' //where is this?
const BASE_ANALYZE_API_URL_2 = config.BASE_API_URL + 'analyze/dynamic' //where is this?
const BASE_ANALYZE_API_URL_RESULT = config.BASE_API_URL + 'analyze/get-result' //where is this?
const BASE_ANALYZE_API_URL_RESULT_STATIC = config.BASE_API_URL + 'analyze/get-static' //where is this?

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


            const intervalStatic = setInterval(async () => {
                const responseResultStatic = await axios.get(BASE_ANALYZE_API_URL_RESULT_STATIC, {
                    params: {
                        analyzeStaticId: response.data._id, 
                    }
                })
                if(responseResultStatic.data) {
                    clearInterval(intervalStatic)
                    // if(hasResultStatic) {
                        const response2 = await axios.post(BASE_ANALYZE_API_URL_2, {
                            params: {
                                link: extensionLink
                            }
                        }, {timeout: 999999999999999})
            
                        console.log('DCM', response, response2)
            
                        const xxx = setInterval(async () => {
                            const responseResult = await axios.get(BASE_ANALYZE_API_URL_RESULT, {
                                params: {
                                    analyzeStaticId: response.data._id, 
                                    analyzeDynamicId: response2.data._id
                                }
                            })
                            if(responseResult.data) {
                                const data = responseResult.data
                                console.log("DATA",data)
                                if(data.static.status && data.dynamic.Report.status) {
                                    dispatch(updateAnalyzeResult(data.static))
                                    dispatch(updateDynamic(data.dynamic))
                                    clearInterval(xxx)
                                }
                            }
                        }, 3000)
                    //    }
                }

            }, 3000)

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