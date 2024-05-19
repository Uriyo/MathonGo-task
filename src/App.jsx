import { useState, useEffect, useRef } from 'react';
import VideoPlayer from './components/VideoPlayer';
import NotesList from './components/NotesList';
import AddNote from './components/AddNote';
import Header from './components/Header';
import './index.css';

const App = () => {
  const [videoUrl, setVideoUrl] = useState('https://www.youtube.com/watch?v=7JZP345yVjw'); // Example video URL
  const [videoId, setVideoId] = useState('7JZP345yVjw');
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

  const extractVideoId = (url) => {
    const urlObj = new URL(url);
    return urlObj.searchParams.get("v");
  };

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

  const handleVideoUrlChange = () => {
    const id = extractVideoId(videoUrl);
    if (id) {
      setVideoId(id);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Header/>
      <div className="mb-6 flex flex-col md:flex-row justify-center">
        <input
          type="text"
          value={videoUrl}
          onChange={e => setVideoUrl(e.target.value)}
          className="p-2 border rounded m-3 text-black placeholder-gray-700"
          placeholder="Enter the YouTube video URL"
        />
        <button onClick={handleVideoUrlChange} className="px-4 py-0 w-28 mt-3 h-11 bg-blue-500 text-white rounded-md">
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
