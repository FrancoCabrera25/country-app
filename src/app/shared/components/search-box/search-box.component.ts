import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;
  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';

  @Output()
  public onValueEvent = new EventEmitter<string>();

  @Output()
  public onDebounceEvent = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
      .pipe(debounceTime(300))
      .subscribe((value) => {
        this.onDebounceEvent.emit(value);
      });
  }

  ngOnDestroy(): void {
    if (this.debouncerSuscription) {
      this.debouncerSuscription.unsubscribe();
    }
  }
  public emitValue(value: string): void {
    this.onValueEvent.emit(value);
  }

  public onKeyPress(value: string): void {
    this.debouncer.next(value);
  }
}
