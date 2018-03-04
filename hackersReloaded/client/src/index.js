import React from 'react';
import ReactDOM from 'react-dom';
/*import DummieData from './database/dummie.data.js';*/
import $ from 'jquery';
import Home from './components/Home.js';
import Header from './components/Header.js';
import Search from './components/Search.js';


class App extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       list: []
     }
     this.getTools = this.getTools.bind(this);
   }

   getTools(){
     $.ajax({
       url:'http://10.177.6.209:4101/products',
       method: 'GET',
       success: (results) => {
         this.setState({list:results});
       },
       error: (xhr, err) => {
         console.log('err', err);
       }
     })
   }

   componentDidMount() {
  this.getTools();
}

  render() {

    return (<div className="container">
        <div className="row">
           <div className="col-xs-20 col -xs-offset-5">
         <Header header={"OneStopHardware"}></Header>
       </div>
       <div>
            <div>
            <Search />
            </div>
            <div>
              <div>
             <Home item={this.state.list}/>
             </div>
             </div>

        </div>


        </div>
      </div>)

   }
};
ReactDOM.render(<App />, document.getElementById("app"));
