import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-wemakeit',
  templateUrl: './wemakeit.component.html',
  styleUrls: ['./wemakeit.component.scss']
})
export class WemakeitComponent implements OnInit {
  status=false;

  constructor() { }

  @HostListener("window:scroll", ['$event'])
  onScroll(event:any) {
    if (this.bottomReached()) {
      this.status = true;
    }
    else{
      this.status = false;
    }
  }

  ngOnInit(): void {
  }

  bottomReached(): boolean {
    //console.log(document.documentElement.scrollTop)
    return Math.floor(window.scrollY)> 50;
  }

}
