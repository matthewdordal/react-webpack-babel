import React from "react/addons";

export default React.createClass({

  render: function() {
    return (
      <div className="greeting">
        hi
        Hello, {this.props.name}!
      </div>
    );
  }

});
