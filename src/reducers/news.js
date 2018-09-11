const initialState={
    news:[],
    searchResults:[],
    country:'CO'
}
export default (state=initialState,action)=>{
    const {type,payload}=action;
    const {news,searchResults}=state;
    switch (type) {
        case "LOAD_NEWS":
            return{
                ...state,news:payload.news
            }
          case "SEARCH":
          return{
              ...state,searchResults:payload.searchResults,
          }
          case 'CHANGE_COUNTRY':
            return{
                ...state,country:payload,
            }

    
        default:
        return state
            
    }
}