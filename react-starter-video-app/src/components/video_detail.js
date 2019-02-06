import React from 'react';

const VideoDetail = ({video}) => {  
  if (!video) { //to handle rendering of child when there is no data  from parent
    return <div>Loading...</div>;
  } 
    const videoId = video.id.videoId;
 // const url = 'https://www.youtube.com/embed/'+ videoId; ES6 have string interpolation where we can use javascript variable into the string by using back ticks as below.

 const url = `https://www.youtube.com/embed/${videoId}`;
  
  return (
    <div className="video-detail col-md-8">
    <div className= "embed-responsive embed-responsive-16by9">
      <iframe className = "embed-responsive-item" src = {url}></iframe>
    </div>
    <div className= "details">
      <div>{video.snippet.title}</div>
      <div>{video.snippet.description}</div>
    </div>

    </div>
  );
};

export default VideoDetail;