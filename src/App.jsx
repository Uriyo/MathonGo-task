import React, { useState, useEffect, useRef } from 'react';
import VideoPlayer from './components/VideoPlayer';
import NotesList from './components/NotesList';
import AddNote from './components/AddNote';
import './index.css';
import Header from './components/Header';

const App = () => {
  const [videoId, setVideoId] = useState('dQw4w9WgXcQ'); // Example video ID
  const [inputVideoId, setInputVideoId] = useState(videoId);
  const [notes, setNotes] = useState([]);
  const [currentTimestamp, setCurrentTimestamp] = useState(0);
  const playerRef = useRef(null);

  useEffect(() => {
    const savedNotes = localStorage.getItem(videoId);
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    } else {
      setNotes([]);
    }
  }, [videoId]);

  const handleProgress = state => {
    setCurrentTimestamp(Math.floor(state.playedSeconds));
  };

  const handleAddNote = note => {
    const updatedNotes = [...notes, note];
    setNotes(updatedNotes);
    localStorage.setItem(videoId, JSON.stringify(updatedNotes));
  };

  const handleDeleteNote = timestamp => {
    const updatedNotes = notes.filter(note => note.timestamp !== timestamp);
    setNotes(updatedNotes);
    localStorage.setItem(videoId, JSON.stringify(updatedNotes));
  };

  const handleEditNote = (timestamp, content) => {
    const updatedNotes = notes.map(note =>
      note.timestamp === timestamp ? { ...note, content } : note
    );
    setNotes(updatedNotes);
    localStorage.setItem(videoId, JSON.stringify(updatedNotes));
  };

  const handleJumpToTimestamp = timestamp => {
    if (playerRef.current) {
      playerRef.current.seekTo(timestamp, 'seconds');
    }
  };

  const handleVideoIdChange = () => {
    setVideoId(inputVideoId);
  };

  return (
    <div className="container mx-auto p-4 bg-black">
      <Header/>
      <div className="mb-6 flex flex-col items-center">
        <input
          type="text"
          value={inputVideoId}
          onChange={e => setInputVideoId(e.target.value)}
          className="p-2 border rounded mr-2"
          placeholder='Provide youtube videoID'
        />
        <button onClick={handleVideoIdChange} className="m-2  px-4 py-2 bg-blue-500 text-white rounded">
          Load Video
        </button>
      </div>
      <div className="mb-6">
        <VideoPlayer videoId={videoId} onProgress={handleProgress} ref={playerRef} />
      </div>
      <div className="space-y-6">
        <AddNote currentTimestamp={currentTimestamp} onAddNote={handleAddNote} />
        <NotesList
          notes={notes}
          onDeleteNote={handleDeleteNote}
          onEditNote={handleEditNote}
          onJumpToTimestamp={handleJumpToTimestamp}
        />
      </div>
    </div>
  );
};

export default App;
