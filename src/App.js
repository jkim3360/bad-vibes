import React from 'react';
import { Route, withRouter } from "react-router-dom";
import './App.css';
import MainPage from './components/MainPage'
import Navbar from './components/Navbar'
import Charts from './components/Charts'
import SongPage from './components/SongPage';

const axios = require('axios');

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      searchItem: '',
      searchResult: [],
      chart: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
    event.preventDefault()
  }

  handleSubmit(event) {
    event.preventDefault()
    axios.get(`https://itunes.apple.com/search?country=us&term=${this.state.searchItem}&limit=30`)
      .then(responseData => {
        const searchResult = responseData.data.results;
        // console.log(searchResult)
        this.setState({
          searchResult: searchResult,
        });
        // console.log(this.state)
        // this.props.history.push('/search-results')
        // console.log(this.state.searchResult)
      })
      .catch(error => {
        console.error(error);
      })
  }

  componentDidMount() {
    const API_TOKEN = process.env.REACT_APP_API_TOKEN
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=music&apiKey=${API_TOKEN}`)
      .then(responseData => {
        const searchResult = responseData.data.articles;
        // console.log(searchResult)
        this.setState({
          newsSearchResult: searchResult,
        });
      })
      .catch(error => {
        console.error(error);
      })
  }


  // https://rss.itunes.apple.com/api/v1/us/apple-music/top-songs/all/25/explicit.json


  render() {
    // console.log(this.state.searchResult)
    const React = require('react');

    return (
      <div className="app-container">

        <Route
          path="/"
          render={props => (
            <Navbar
              {...props}
              value={this.state.searchItem}

              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
            />)}
        />
        {/*         
        <Route path='/favorites'
      component={Favorites} /> */}

        <Route path='/:song_id'
          component={(props) =>
            <SongPage {...props} />} />

        <Route
          path="/" state={this.state}
          render={(props) =>
            <MainPage {...props} searchResults={this.state.searchResult} news={this.state.newsSearchResult} />}
        />

        <Route
          path="/home" state={this.state}
          component={
            Charts}
        />




      </div>




    );
  }
}

export default withRouter(App);
