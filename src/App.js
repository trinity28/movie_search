// const xyz = react.createClas({}) this is depracated 
import React from 'react';
import Logo from './Logo.js';
import { Slide } from 'react-slideshow-image';

import './App.css';
var Carousel = require('nuka-carousel');
//////// /////////////
 ///   Components ///
/////////////////

// Container 
let App = React.createClass({
  apiKey: 'e479f5f0113be84a1258a45b89771cec',
  getInitialState: function() {
    return {searchTerm: "", searchUrl: ""}; 
  }, 
  handleKeyUp: function(e) {
    if (e.key === 'Enter' && this.state.searchTerm !== '') {
      let searchUrl = "search/multi?query=" + this.state.searchTerm +'&page=1'; 
     console.log(searchUrl)
      this.setState({searchUrl:searchUrl}); 

    }
  }, 
  handleChange: function(e) {
    console.log( e.target.value)
    this.setState({searchTerm: e.target.value}); 

  }, 
  render() {
    return (
      <div>
        <header className="Header">
          <Logo />
          <Navigation />
          <div id="search" className="Search">
            <input onKeyUp={this.handleKeyUp} onClick={this.handleChange} onChange={this.handleChange} type="search" placeholder="Search for a title..." value={this.state.searchTerm} />
          </div>
          <UserProfile />
        </header>
        <Hero />
        <TitleList title="Search Results" url={this.state.searchUrl} />

       
        <TitleList title="Trending now" url='discover/movie?sort_by=popularity.desc&page=1' />
        <TitleList title="Most watched in Horror" url='genre/27/movies?sort_by=popularity.desc&page=1' />
        <TitleList title="Sci-Fi greats" url='genre/878/movies?sort_by=popularity.desc&page=1' />
        <TitleList title="Comedy magic" url='genre/35/movies?sort_by=popularity.desc&page=1' />*/}
         <TitleList title="Best Drama" url='genre/18/movies?sort_by=popularity.desc&page=1' />*/}
      </div>
   ); 
  }
});

// Navigation 
class Navigation extends React.Component {
  render() {
    return (
      <div id="navigation" className="Navigation">
        <nav>
          <ul>
            <li>Browse</li>
            <li>My List</li>
            <li>Top picks</li>
            <li>Recent</li>
          </ul>
        </nav>
      </div>
    ); 
  }
}

// User Profile 
class UserProfile extends React.Component {
  render() {
    return (
      <div className="UserProfile">
        <div className="User">
          <div className="name">Jack Sparrow</div>
          <div className="image"><img src="data:image/jpeg;base64,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" alt="profile" /></div>
        </div>
      </div> 
    );
  }
}

//////// HERO //////////

class Hero extends React.Component {
  render() {
  
    return (
  
      <div id="hero" className="Hero" style={{backgroundImage: 'url(https://images2.alphacoders.com/509/thumb-1920-509099.jpg)' }}>
        <div className="content">
          <img className="logo" src="https://www.returndates.com/backgrounds/sherlock.logo.png" alt="sherlock background" />
          <h2>Season 4 now available</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id quam sapiente unde voluptatum alias vero debitis, magnam quis quod.</p>
          <div className="button-wrapper">
            <HeroButton primary={true} text="Watch Now" />
            <HeroButton primary={false} text="+ My List" />
          </div>
        </div>
        <div className="overlay"></div>
      </div>  
   
     
    );
  }
}

// Hero Button 
class HeroButton extends React.Component {
  render() {
    return (
      <a href="#" className="Button" data-primary={this.props.primary}>{this.props.text}</a>
    );
  }
}

/////////// Title List ///////////
class TitleList extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      apiKey: 'e479f5f0113be84a1258a45b89771cec',
      data: [], 
      mounted: false
    };
  }
  loadContent() {
    let requestUrl = 'https://api.themoviedb.org/3/' + this.props.url + '&api_key=' + this.state.apiKey;
    fetch(requestUrl).then((res) => {
      return res.json(); 
    }).then((data) => {
      this.setState({data : data}); 
    }).catch((err) => {
      console.log("there has been an error");
    });
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.url !== this.props.url && nextProps.url !== '') {
      this.setState({mounted: true, url: nextProps.url}, () => {
        this.loadContent(); 
      }); 
    }
  }
  componentDidMount() {
    if(this.props.url !== ''){
      this.loadContent(); 
      this.setState({mounted: true});
    }
  }
  render() {
    let titles = '';
    if(this.state.data.results) {
      titles = this.state.data.results.map((title,i) => {
        if( i < 5) {
            let name = ""; 
            let backDrop = 'http://image.tmdb.org/t/p/original' + title.backdrop_path; 
            if(!title.name) {
              name = title.original_title; 
            } else {
              name = title.name; 
            }

            return (
              <Item key ={title.id} title={name} score={title.vote_average} overview={title.overview} backdrop={backDrop} />
            );

            } else {
              return (<div key={title.id}></div>); 
            }
          });  
      }
      
      return (
          <div ref="titlecategory" className="TitleList" data-loaded={this.state.mounted}>
            <div className="Title">
              <h1>{this.props.title}</h1>
              <div className="titles-wrapper">
                {titles}
              </div>
            </div>
          </div>
      );
  }
}

// Title List Item 
class Item extends React.Component {
  constructor(props) {
    super(); 
  }
  render() {
    return (
        <div className="Item" style={{backgroundImage: 'url(' + this.props.backdrop + ')'}} >
          <div className="overlay" >
            <div className="title">{this.props.title}</div>
            <div className="rating">{this.props.score} / 10</div>
            <div className="plot">{this.props.overview}</div>
            <ListToggle />
          </div>
        </div>
    );
  }
}

// List Toggle 
class ListToggle extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      toggled: false
    }
  } 
  // property initializer syntax to correctly bind callbacks. 
  handleClick = () => {
    (this.state.toggled) ? this.setState({ toggled: false}) : this.setState({ toggled: true }); 
  }
  render() {
    return (
      <div onClick={this.handleClick} data-toggled={this.state.toggled} className="ListToggle">
        <div>
          <i className="fa fa-fw fa-plus"></i>
          <i className="fa fa-fw fa-check"></i>
        </div>
      </div>
    );
  }
}

export default App;

