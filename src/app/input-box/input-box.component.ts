import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  providers: [NotesService],
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent implements OnInit {
  notes: Note[];
  editNote: Note; // the hero currently being edited

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
  }

  add(text: string): void {
    this.editNote = undefined;
    text = text.trim();
    if (!text) {
      return;
    }

    // The server will generate the id for this new hero
    const newNote: Note = { text } as Note;
    this.notesService
      .addNote(newNote)
      .subscribe(note => this.notes.push(note));
  }
}
