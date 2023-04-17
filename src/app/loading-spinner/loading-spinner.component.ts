import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent {
  /*
  public loadingText: string = 'Loading';
  public dots: string = '';

  updateDots() {
    this.dots = this.dots.length < 3 ? this.dots + '.' : '';
    this.loadingText = 'Loading' + this.dots;
  }

  ngOnInit() {
    setInterval(() => this.updateDots(), 1000);
  }
  */
}
