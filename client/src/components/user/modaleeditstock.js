import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { putListe } from "../../js/actions/actions";
import "./list.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class EditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      StockInitial: "",
      StockMinimum: "",
      StockSecurite: ""
    };
  }

  render() {
    const { isOpen, toggle } = this.props;
    const {
      _id,
      StockInitial,
      StockMinimum,
      StockSecurite,
      

    } = this.props.liste;
    return (
      <div>
        <Modal
          isOpen={isOpen}
          onRequestClose={() => toggle(false)}
          style={customStyles}
          contentLabel='Example Modal'
        >
          <input
            defaultValue={StockInitial}
            type='text'
            class='form-control'
            placeholder='StockInitial'
            id='StockInitial'
            name=''
            onChange={e => this.setState({ StockInitial: e.target.value })}
          />
          <input
            defaultValue={StockMinimum}
            type='text'
            class='form-control'
            placeholder='StockMinimum'
            id='StockMinimum'
            name=''
            onChange={e => this.setState({ StockMinimum: e.target.value })}
          />
          <input
            defaultValue={StockSecurite}
            type='text'
            class='form-control'
            placeholder='StockSecurite'
            id='StockSecurite'
            name=''
            onChange={e => this.setState({ StockSecurite: e.target.value })}
          />
         

          <button
            className='btn btn-outline-dark'
            onClick={() => toggle(false)}
          >
            close
          </button>
          <button
            className='btn'
            onClick={() =>
              this.props.putListe({
                id: _id,
                StockInitial: this.state.StockInitial,
                StockMinimum: this.state.StockMinimum,
                StockSecurite: this.state.StockSecurite,
               
              })
            }
          >
            Update
          </button>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
  putListe: payload => dispatch(putListe(payload))
});
export default connect(mapStateToProps, mapDispatchToProps)(EditModal);
