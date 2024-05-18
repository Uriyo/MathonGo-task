import React from 'react';
import ReactQuill from 'react-quill';

const NoteItem = ({ note, onDeleteNote, onEditNote, onJumpToTimestamp }) => {
  const { timestamp, content, image, date } = note;

  return (
    <div className="p-4 border rounded-lg shadow-sm bg-gray-200 m-10">
      <div className="flex justify-between items-center mb-2">
        <span
          className="text-blue-500 cursor-pointer"
          onClick={() => onJumpToTimestamp(timestamp)}
        >
          {new Date(timestamp * 1000).toISOString().substr(11, 8)}
        </span>
        <span className="text-gray-500 text-sm">{new Date(date).toLocaleString()}</span>
      </div>
      <ReactQuill value={content} onChange={value => onEditNote(timestamp, value)} readOnly={false} theme="snow" />
      {image && <img src={image} alt="Note" className="mt-2 max-w-full h-auto rounded-md" />}
      <button
        className="mt-2 w-28 md:w-32 px-4 py-2 bg-red-500 text-white rounded-lg"
        onClick={() => onDeleteNote(timestamp)}
      >
        Delete
      </button>
    </div>
  );
};

export default NoteItem;
