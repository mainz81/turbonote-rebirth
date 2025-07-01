import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function TurboNote() {
  const [note, setNote] = useState('');
  const [log, setLog] = useState([]);

  const handleSave = () => {
    if (note.trim()) {
      setLog([note, ...log]);
      setNote('');
    }
  };

  return (
    <div className="flex flex-col items-center p-8 space-y-4">
      <h1 className="text-2xl font-bold">🌀 TurboNote</h1>
      <Input
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Type your quick thought..."
        className="w-full max-w-md"
        onKeyDown={(e) => { if (e.key === 'Enter') handleSave(); }}
      />
      <Button onClick={handleSave} className="w-full max-w-md">
        Save Note
      </Button>
      <Card className="w-full max-w-md mt-6">
        <CardContent className="space-y-2 p-4">
          <h2 className="font-semibold text-lg">📜 Saved Notes</h2>
          {log.length === 0 ? (
            <p className="text-sm text-muted">No notes yet.</p>
          ) : (
            <ul className="list-disc pl-5">
              {log.map((entry, idx) => (
                <li key={idx}>{entry}</li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
