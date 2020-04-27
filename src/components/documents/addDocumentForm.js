import React from "react";
import { connect } from "react-redux";

class AddDocumentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: "Não iniciado", description: "" };
  }

  handleChange = event => {
    this.setState({ status: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const action = {
      type: "ADD_DOCUMENT",
      data: {
        id: Math.floor(Math.random() * 100),
        status: this.getStatus.value,
        description: this.getDescription.value
      }
    };

    this.props.dispatch(action);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Status: </label>
          <select
            value={this.state.status}
            onChange={this.handleChange}
            ref={select => (this.getStatus = select)}
          >
            <option value="Não iniciado">Não iniciado</option>
            <option value="Em andamento">Em andamento</option>
            <option value="Finalizado">Finalizado</option>
          </select>

          <label>Descrição</label>
          <input
            type="text"
            value={this.state.textValue}
            onChange={this.handleChange}
            ref={input => (this.getDescription = input)}
          />
          <button>Salvar documento</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { documents: state };
};

export default connect(mapStateToProps)(AddDocumentForm);
