import React from 'react';
import { Link } from 'react-router';


export default class IdolsList extends React.Component {
  componentWillMount() {
    this.props.fetchIdols();
  }

  renderIdols(idols) {
    return idols.map((idol) => {
      return (
        <div className="col-md-3 col-sm-6">
          <div className="thumbnail">
            <img src={ idol.image }/>
            <div className="caption">
              <h4>{ idol.nickname }</h4>
            </div>
            <p>
              <Link className="btn btn-primary btn-lg" to={"/idols/" + idol.id}>More INFO</Link>
            </p>
          </div>
        </div>
      );
    });
  }

  render() {
    
    const { idols, loading, error } = this.props.idolsList;

    if(loading) {
      return <div className="container"><h1>Idols</h1><h3>Loading...</h3></div>      
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }
    
    return (
      <div>
      <div className="jumbotron">
        <div className="container">
          <h1><span className="glyphicon glyphicon-tent"></span> Welcome To BNK48 App</h1>
          <p>a community which Ota share their beloved idol story</p>
          <p>
            <Link className="btn btn-primary btn-lg" to="/shareidol">Share your Idol on our App</Link>
          </p>
        </div>
      </div>
      <div className="row text-center">
        {this.renderIdols(idols)}
      </div>
      </div>
    );
  }
}