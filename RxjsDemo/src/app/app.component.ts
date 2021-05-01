import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RxjsDemo';

  ngOnInit(){
    console.log("init...");
    of(2,4,6,8).subscribe(console.log);
    from([20,15,10,5]).subscribe(
      item => console.log(`resulting item.. ${item}`), //back tick operator for ts template strings (string interpoletion)
      err => console.log(`error occured ${err}`),
      () => console.log("completed")
    )
  }
}