import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {
  @Input()
  public placeholder: string = '';

  @Output()
  public onValueEvent = new EventEmitter<string>();

  public emitValue(value: string): void {
    this.onValueEvent.emit(value);
  }
}
