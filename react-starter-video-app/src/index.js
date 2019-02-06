import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';
import './style.css';
import _ from 'lodash';

const API_KEY = 'AIzaSyCr5WMZpJtkWFSrWcJ1bJa_va3SyIYXCZo';

//create new component which will produce HTML
/*const MyApp = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}*/

class MyApp extends Component {
  // state is required here to update the list of videos based on   search
  constructor (props) {
    super(props);
    this.state = { 
      videos: [],
      selectedVideo : null
       };
       this.videoSearch('anime');

  }

    videoSearch =  (term) => {
 //whenevr  instance is created, search will be called.
    YTSearch({key : API_KEY, term: term}, (videos) => {
      this.setState({ videos : videos,
      selectedVideo : videos[0] }); // this.setState({videos}) implies this.setState({videos:videos});
    
});
  }
  render () {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300); // debounce throttles the api. Effectively means you can trigger a new search once every 300 ms.Google Search also works in similar way.


    // passing data from pareant to child in VideoList is done as below. This is referred as passing props to VideoList
    return (
    <div>
      <SearchBar onSearchTermChange = {videoSearch}/>
      <VideoDetail  video={this.state.selectedVideo}/>
      <VideoList 
      onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
      videos = {this.state.videos}/>
    </div>
  );
  }

}

//take this components generated HTML  and put in the dom.
ReactDOM.render(<MyApp />, document.getElementById('root'));
