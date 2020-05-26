import { Component } from '@angular/core';

import { Note } from '../note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  providers: [NotesService],
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  notes: Note[];

  constructor(private notesService: NotesService) {}

  share() {
    window.alert('The product has been shared!');
  }

  ngOnInit() {
    this.getNotes();
  }

  getNotes(): void {
    this.notesService.getNotes()
      .subscribe(notes => (this.notes = notes));
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/