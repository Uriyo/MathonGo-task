
import NoteItem from './NoteItem';

const NotesList = ({ notes, onDeleteNote, onEditNote, onJumpToTimestamp }) => {
  return (
    <div className="flex flex-col space-y-4">
      {notes.map(note => (
        <NoteItem
          key={note.timestamp}
          note={note}
          onDeleteNote={onDeleteNote}
          onEditNote={onEditNote}
          onJumpToTimestamp={onJumpToTimestamp}
        />
      ))}
    </div>
  );
};

export default NotesList;
