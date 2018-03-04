import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleInputChange(e) {
    //this.props.handleInputChange(e, target, value);
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div id="Search" className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange.bind(this)}
        />
        {console.log(" this is SEARCH ")}
        <button className="btn hidden-sm-down">Search
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}
var UncontrolledSearch = ({handleSearchInputChange}) => (
  <div className="search-bar form-inline">
    <input
      className="form-control"
      type="text"
      onChange={(e) => handleSearchInputChange(e.target.value)}
    />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

export default Search;
