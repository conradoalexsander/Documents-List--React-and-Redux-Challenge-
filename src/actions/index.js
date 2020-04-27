export const createDocument = document => {
  return {
    type: "DOCUMENT_CREATE",
    payload: document
  };
};

export const deleteDocument = document => {
  //Return an action
  return {
    type: "DOCUMENT_DELETE",
    payload: document
  };
};
