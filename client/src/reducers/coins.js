import axios from 'axios'

const COINS = 'COINS'
const ADD_COIN = 'ADD_COIN'
const REMOVE_COIN = 'REMOVE_COIN'

export const getCoins = () => {
    return (dispatch) => {
        axios.get('/api/coins')
            .then( res => dispatch({ type: COINS, coins: res.data }))
    }
}

export const addCoin = (coin) => {
    return (dispatch) => {
        axios.post('/api/coins', { coin })
            .then( res => dispatch { type: ADD_COIN, coin: res.data })
    }
    
}

export const removeCoin = (id) => {
    return (dispatch) => {
        axios.put(`/api/coins/${id}`)
            .then( () => dispatch({ type: REMOVE_COIN, id}))
    }
}

//Do NOT chang data types in reducers... even if it works it WILL break things later
export default ( state = [], action ) => {
    switch(action.type) {
        case COINS:
            // { type: COINS, coins: [{},{}] }
            return action.coins
        case ADD_COIN:
            // { type: ADD_COIN, coin: {} }
            return [...state, action.coin ]
        case REMOVE_COIN:
            // { type: REMOVE_COIN, id: 7 }
            return state.filter( c => c.id !== action.id ) //filter returns an array so were good.
        default:
            return state
    }
}