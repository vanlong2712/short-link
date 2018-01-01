import React, { Component } from 'react';
import Modal from 'react-modal';
import { Meteor } from 'meteor/meteor';

export default class AddLink extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
      isOpen: false,
      error: ''
    };
  }
  onSubmit = e => {
    const { url } = this.state;
    e.preventDefault();
    if (url) {
      Meteor.call('links.insert', url, (err, res) => {
        if (!err) {
          this.onCallModal();
        } else {
          this.setState({ error: err.reason });
        }
      });
    }
  };
  onChange = e => {
    this.setState({ url: e.target.value.trim() });
  };
  onCallModal = () => {
    this.setState({ isOpen: !this.state.isOpen, url: '', error: '' });
  };
  render() {
    return (
      <div>
        <button className="button" onClick={this.onCallModal}>
          + Add Link
        </button>
        <Modal
          ariaHideApp={false}
          isOpen={this.state.isOpen}
          contentLabel="Add link"
          onAfterOpen={() => this.refs.url.focus()}
          onRequestClose={this.onCallModal}
          className="boxed-view__box"
          overlayClassName="boxed-view boxed-view--modal"
        >
          <h1>Add Link</h1>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.onSubmit} className="boxed-view__form">
            <input
              type="text"
              placeholder="URL"
              ref="url"
              value={this.state.url}
              onChange={this.onChange}
            />
            <button className="button">Add Link</button>
            <button
              type="button"
              className="button button--secondary"
              onClick={this.onCallModal}
            >
              Cancel
            </button>
          </form>
        </Modal>
      </div>
    );
  }
}
