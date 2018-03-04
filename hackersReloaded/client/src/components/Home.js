import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // price: props.tool.price
      price: 34
    };

  }
  onHotDeals() {
    this.setState({
      // price: this.state.price * 1.0825
      price : 242
    });

  }

  render() {
    return (
      <div>
    <h1>  testing Home: </h1>
    {this.props.item.map((itemx)=>(


      <div className="card">
          <div className="card text-white bg-success mb-3" style={{width: "18rem"}}>
            <img className="card-img-top" src="Tools.jpg" alt="Card image cap"></img>
              <p className="card-text">{"Name: " + itemx.item}</p>
          </div>
          <div className="card-body">
          <p className="card-text">{"Description: " + itemx.description}</p>
            <p className="card-text">{"Quantity: " + itemx.quantity}</p>
            <p className="card-text">{"Price: " + itemx.price}</p>
            <a href="https://www.homedepot.com/" className="btn btn-primary">More Options!</a>
            <hr />
             <button onClick={() => this.onHotDeals()} className="btn btn-danger">Hot Deals!</button>
        </div>
      </div>


    ))}

      </div>



    )


  }
};
export default Home;
