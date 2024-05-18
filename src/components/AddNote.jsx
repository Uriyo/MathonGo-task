import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddNote = ({ currentTimestamp, onAddNote }) => {
  const [noteContent, setNoteContent] = useState('');
  const [noteImage, setNoteImage] = useState('');

  const handleAddNote = () => {
    if (noteContent.trim() || noteImage) {
      onAddNote({
        timestamp: currentTimestamp,
        content: noteContent,
        image: noteImage,
        date: Date.now(),
      });
      setNoteContent('');
      setNoteImage('');
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setNoteImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col space-y-2 mb-4 bg-gray-200 p-4 m-10 rounded-lg">
      <ReactQuill value={noteContent} onChange={setNoteContent} />
      <input type="file" accept="image/*" onChange={handleImageUpload} className="mt-2" />
      <button
        className="px-4 w-28 md:w-40 rounded-lg py-2 bg-blue-500 text-white "
        onClick={handleAddNote}
      >
        Add Note
      </button>
    </div>
  );
};

export default AddNote;
