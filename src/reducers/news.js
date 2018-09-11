const initialState={
    news:[],
    searchResults:[],
    country:'co',
    language:"es",
}
export default (state=initialState,action)=>{
    const {type,payload}=action;
    // const {news,searchResul}=state;
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