const initialState = {
    dataFilms:[],
    loading:false,
    dataSearch: ''
}

export const filmReducer = (state = initialState, action)=>{
    switch(action.type){
      case 'GET_FILM':
          return {
              ...state,
              dataFilms:action.payload
          }
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