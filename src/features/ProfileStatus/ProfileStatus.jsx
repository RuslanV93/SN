import React from 'react';

class ProfileStatus extends React.Component {
  statusInputRef = React.createRef();
  state = {
    editMode: false,
    status: this.props.userStatus,
  };

  activateEditMode = () => {
    this.setState({ editMode: true });
  };

  deactivateEditMode = () => {
    this.setState({ editMode: false });
    if (this.state.status) {
      this.props.updateStatus(this.state.status);
    }
  };
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.userStatus !== this.props.userStatus) {
      this.setState({
        status: this.props.updateStatus,
      });
    }
  }

  render() {
    return (
      <div>
        {!this.state.editMode ? (
          <span onDoubleClick={this.activateEditMode}>
            {this.props.userStatus || 'Write something...'}
          </span>
        ) : (
          <input
            onChange={this.onStatusChange}
            autoFocus={true}
            type="text"
            value={this.state.status}
            onBlur={this.deactivateEditMode}
            ref={this.statusInputRef}
          />
        )}
        <p>
          {this.props.profile.loockingForAJob
            ? 'Looking for some job'
            : 'working at the moment'}
        </p>
        <ul>
          {this.props.profile.contacts &&
            Object.entries(this.props.profile.contacts).map(([key, value]) => (
              <li key={key}>{`${key}: ${value ? value : 'not specified'}`}</li>
            ))}
        </ul>
      </div>
    );
  }
}

export default ProfileStatus;
