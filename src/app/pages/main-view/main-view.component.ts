import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  board: Board = new Board('Tablero Principal', [
    new Column('Nueva', [
      "Validar codigo",
      "Revisar estado",
      "Enviar feedback"
    ]),
    new Column('En progreso', [
      "Creación de botones",
      "Animación logo",
      "Agregar ruta API"
    ]),
    new Column('Terminada', [
      'Creación de tabla cliente',
      'Carga de información',
      'Pruebas en iOS',
      'Corrección impresión'
    ]),
  ]);

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }


}
