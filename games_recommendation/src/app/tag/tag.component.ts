import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent {

  @Input() tags!: string[];
  @Input() warntags!: string[];

  @Output() tagValueEvent = new EventEmitter<string>();
  @Output() warntagValueEvent = new EventEmitter<string>();

  public TagComponent(){}

  addNewTag(tag: string){
    this.tagValueEvent.emit(tag);
  }

  addNewWarntag(warntag: string){
    this.warntagValueEvent.emit(warntag);
  }
}
