import DocumentsSeed from "../seed/DocumentsSeed";

const documentReducer = (state = DocumentsSeed, action) => {
  switch (action.type) {
    case "ADD_DOCUMENT":
      return [...state, action.data];

    case "DELETE_DOCUMENT":
      return state.filter(document => document.id !== action.id);

    default:
      return state;
  }
};

export default documentReducer;
