import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input() compteur: number;

  @Output() incrementValue = new EventEmitter<number>();
  @Output() decrementValue = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onclickIncrement(): void {
    this.incrementValue.emit();
  }

  onclickDecrement(): void {
    this.decrementValue.emit();
  }

}
