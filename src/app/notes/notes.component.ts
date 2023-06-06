import { Component } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  notes: string[] = []
  newNote: string = ""

  // onNewNoteChange (event: Event) {
  //   this.newNote = event?.target?.value
  // }
  addNote() {
    this.notes = [...this.notes, this.newNote]
    this.newNote = ''
  }

  removeNote(removeIndex: number) {
    this.notes = this.notes.filter((note, index) => index !== removeIndex)
  }
}
