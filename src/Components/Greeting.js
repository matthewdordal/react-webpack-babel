import React from "react/addons";

export default React.createClass({

  render: function() {
    return (
      <div className="greeting">
        Hello, {this.props.name}!
      </div>
    );
  }

});
