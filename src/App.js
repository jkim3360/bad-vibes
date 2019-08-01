import React from 'react';
import { Route, withRouter } from "react-router-dom";
import './App.css';
import MainPage from './components/MainPage'
import Navbar from './components/Navbar'
import Charts from './components/Charts'


const axios = require('axios');

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      searchItem: '',
      searchResult: [],
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
    let corsProxy = "https://cors-anywhere.herokuapp.com/";
    event.preventDefault()
    axios.get(corsProxy + `https://itunes.apple.com/search?country=us&term=${this.state.searchItem}&limit=30`)
      .then(responseData => {
        const searchResult = responseData.data.results;
        this.setState({
          searchResult: searchResult,
        });
      })
      .catch(error => {
        console.error(error);
      })
      this.fetchArtistNews()
  }

  componentDidMount() {
    const API_TOKEN = process.env.REACT_APP_API_TOKEN
  
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=music&apiKey=${API_TOKEN}`)
      .then(responseData => {
        const searchResult = responseData.data.articles;
        this.setState({
          newsSearchResult: searchResult,
        });
      })
      .catch(error => {
        console.error(error);
      })
    
    axios.get(`https://rss.itunes.apple.com/api/v1/us/apple-music/coming-soon/all/10/non-explicit.json`)
      .then(responseData => {
        const charts = responseData;
        this.setState({
          charts: charts,
        });
      })
      .catch(error => {
        console.error(error);
      })
  }

  fetchArtistNews = () => {
    const API_TOKEN = process.env.REACT_APP_API_TOKEN
    axios.get(`https://newsapi.org/v2/everything?q=${this.state.searchItem}&apiKey=${API_TOKEN}`)
    .then(responseData => {
      const searchResult = responseData.data.articles;
      this.setState({
        newsSearchResult: searchResult,
      });
    })
    .catch(error => {
      console.error(error);
    })

  }

  render() {
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
            />)} />

        <Route
          path="/"
          render={props => (
            <MainPage
              {...props}
              value={this.state.searchItem}
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
              searchResults={this.state.searchResult}
              news={this.state.newsSearchResult} />)}
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
