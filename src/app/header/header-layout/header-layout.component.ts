import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'header-layout',
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.css'],
})
export class HeaderLayoutComponent implements OnInit {
  canStartGame = false;
  gameInProgress = false;
  _headsCount = 0;
  _tailsCount = 0;

  @Input()
  set headsCount(count: number) {
    this._headsCount = count;
  }

  @Input()
  set tailsCount(count: number) {
    this._tailsCount = count;
  }

  @Input()
  set startGameEvent(canStart: boolean) {
    this.canStartGame = canStart;
  }

  @Output() startDrawEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  startGame(): void {
    this.startDrawEvent.emit();
    this.gameInProgress = true;
  }
}
