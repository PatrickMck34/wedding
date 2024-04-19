import { csrfFetch } from './csrf';
import Dialogue from '../resources/dialogue'
const READ_CHAT = '/chat'
const DELETE_CHAT = '/chat/:ChatcreateChatId';
const CREATE_CHAT = '/chat/new'


export const createChat = (chat) => async (dispatch) => {
    const { chats } = chat
    const data = await csrfFetch(`/api/chat`, {
        method: "POST",
        body: JSON.stringify({
            chats
        }),
    });
    const response = await data.json()

    dispatch(createChats(response))
    return response
}
export const getChat = (spotId) => async (dispatch) => {
    const data = await csrfFetch(`/api/spots/${spotId}/reviews`)
    const response = await data.json()
    dispatch(getChats(response))
    return response
}
export const getChats = (rev) => ({
    type: READ_CHAT,
    payload: rev
})
export const createChats = (chat) => ({
    type: CREATE_CHAT,
    payload: chat
})





const initialState = { allChat: Dialogue }
export const chatReducer = (state = initialState, action) => {
    let newState = {}

    switch (action.type) {
        case CREATE_CHAT:
            newState = { allChat: { ...state.allChat } }
            newState.allChat[action.payload.id] = action.payload
            return newState


        case READ_CHAT:

            newState = { allChat: { ...state.allChat } }
            return newState



        case DELETE_CHAT:
            newState = { ...state }
            delete newState[action.payload]
            break;
        default:
            return state
    }
}
export default chatReducer