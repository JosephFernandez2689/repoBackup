import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1"></div>
              <img id="Logo" src="HackersReloaded.jpeg"></img>
          </div>
           <h1 id="Title">One Stop Hardware</h1>
            <p id="Subtitle">The Only Place to Shop for Your Favorite Tools</p>
      </div>
    )
  }
}
export default Header;
