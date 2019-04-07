import React from 'react';

class WelcomeModal extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.state = {modal: false}
  }
  closeModal(){
    this.setState({modal: false});
  }
  componentDidMount(){
    console.log("componentDidMount()");
    this.setState({modal: true});
  }
  render() {
    const isShow = this.state.modal;

    if (isShow) {
      return (
        <React.Fragment>
          <div className="modal fade show" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{display:'block'}}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Welcome!</h5>
                  <button onClick={this.closeModal} type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>Welcome</p>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
    else {
      return <React.Fragment/>
    }
  }
}

export default WelcomeModal;