import React from "react";
import { Link } from "react-router-dom";
import AddDocumentForm from "../documents/addDocumentForm";

const DocumentCreate = () => {
  return (
    <div>
      <h1>Create Document Page</h1>
      <AddDocumentForm />
      <h3>
        <Link to="/">Voltar para a lista de documentos</Link>
      </h3>
    </div>
  );
};

export default DocumentCreate;
