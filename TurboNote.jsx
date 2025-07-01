import React, { useState } from 'react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Card } from './components/ui/card';

export default function TurboNote() {
  const [notes, setNotes] = useState([]);
  const [noteInput, setNoteInput] = useState('');

  const addNote = () => {
    if (noteInput.trim() !== '') {
      setNotes([...notes, noteInput]);
      setNoteInput('');
    }
  };

  return (
    <div className="app" style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>TurboNote ⚡</h1>

      <Card style={{ padding: '1rem', marginBottom: '1rem' }}>
        <Input
          value={noteInput}
          onChange={(e) => setNoteInput(e.target.value)}
          placeholder="Write a sacred note..."
        />
        <Button onClick={addNote} style={{ marginTop: '0.5rem' }}>
          Add Note
        </Button>
      </Card>

      <Card style={{ padding: '1rem' }}>
        <h2>Your Divine Notes</h2>
        <ul>
          {notes.map((note, index) => (
            <li key={index} style={{ margin: '0.5rem 0' }}>
              {note}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
