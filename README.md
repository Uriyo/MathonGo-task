# NotePlay

NotePlay is a responsive video player application that allows users to play YouTube videos and add notes with text and images at specific timestamps. The notes are tied to the video ID, making it easy to manage and review notes for different videos.

## Features

- Play YouTube videos by entering a video ID.
- Add notes with text and images linked to specific timestamps.
- Edit and delete notes.
- Notes are saved in local storage and tied to the video ID.
- Rich text editor for notes with options to style text (bold, italics, underline, colors).
- Responsive design.

## Tech Stack

- React JS
- TailwindCSS
- React Player
- React Quill

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/noteplay.git
   cd noteplay

2. **Installing the dependecies:**
    ```bash
   npm install

3. **Run the development server:**
    ```bash
   npm start

4. **Open the Browser:**
   Open http://localhost:3000 to view the application.

## Usage

### Change the video:

Enter a YouTube video ID in the input field and click "Load Video" to change the video.

Add a note:

- Use the rich text editor to add text.
- Upload an image if desired.
- Click "Add Note" to save the note at the current timestamp.
- Edit a note:

- Modify the text in the rich text editor.
- Changes are saved automatically.
- Delete a note:

- Click the "Delete" button to remove the note.
