import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: []
})
export class SearchComponent implements OnInit {
  @Input("placeholderComponent") placeholderText: string = "";
  @Output() emitValor: EventEmitter<string> = new EventEmitter();
  debounce: Subject<string> = new Subject;


  ngOnInit(): void {
    this.debounce.pipe(debounceTime(100))
      .subscribe(valor => this.emitValor.emit(valor))
  }

  getInfo(escrito: any) {
    this.debounce.next(escrito.target.value)
  }

  constructor() { }

}
