import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  loanFinal="100000";
  emiFinal="15000";
  calculator:FormGroup;

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm(){
    this.calculator=this.fb.group({
      monthlyIncome: new FormControl(500000),
      monthlyExpense: new FormControl(70000),
      repaymentTenure: new FormControl(),
      loans: new FormControl(),
      EMI: new FormControl()
    });
  }
}
