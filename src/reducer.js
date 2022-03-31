
export const reducer = (state, { type, payload }) => {
   switch (type) {
      case "SET_FILMS": {
         return {
            ...state,
            films: payload || [],
            loading: false
         }
      }
      default:
         return state;
   }
}