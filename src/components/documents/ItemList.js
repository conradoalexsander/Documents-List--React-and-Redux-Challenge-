import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ItemList extends React.Component {
  deleteDocument = document => {
    return this.props.dispatch({
      type: "DELETE_DOCUMENT",
      id: document.id
    });
  };

  renderList() {
    return this.props.documents.map(document => {
      return (
        <li key={document.id}>
          Status: {document.status}, Descrição: {document.description}{" "}
          <button onClick={() => this.deleteDocument(document)}>Apagar</button>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>List Document Page</h1>
        <h3>
          <Link to="/create"> Criar novo documento </Link>{" "}
        </h3>
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { documents: state };
};

export default connect(mapStateToProps)(ItemList);
