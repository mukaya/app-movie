const initialState = {
    loading:false,
    dataSearch: ''
}
export const filmReducer = (state = initialState, action)=>{
    switch(action.type){
      case 'LOADING':
          return {
              ...state,
              loading: action.payload
          }
      case 'SEARCH_FILM':
          return {
             ...state,
             dataSearch: action.payload
            }
      default:
          return state
    }
}
