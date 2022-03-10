import jsonplaceholder from "../apis/jsonplaceholder";
export const fetchPosts = () => {
  return async (dispatch) => {
    const response = jsonplaceholder.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: response });
  };
};
