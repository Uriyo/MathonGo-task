import React, { forwardRef } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = forwardRef(({ videoId, onProgress }, ref) => {
  return (
    <div className="w-full h-96 bg-gray-800 rounded-lg shadow-md">
      <ReactPlayer
        ref={ref}
        url={`https://www.youtube.com/watch?v=${videoId}`}
        controls
        onProgress={onProgress}
        width="100%"
        height="100%"
      />
    </div>
  );
});

export default VideoPlayer;
