import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  loanFinal="100000";
  emiFinal="15000";
  monthlyIncome:number=500000;
  constructor() { }

  ngOnInit(): void {
  }

}
