import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  activateEditMode = () => {
    this.setState({ editMode: true });
  };

  deactivateEditMode = () => {
    this.setState({ editMode: false });
  };

  render() {
    return (
      <div>
        {!this.state.editMode ? (
          <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
        ) : (
          <input
            autoFocus={true}
            type="text"
            value={this.props.status}
            onBlur={this.deactivateEditMode}
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
