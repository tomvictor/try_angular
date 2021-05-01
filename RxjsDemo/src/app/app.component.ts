import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RxjsDemo';

  ngOnInit(){
    console.log("of function");
    of(2,4,6,8).subscribe(console.log);
    console.log("from function");
    from([20,15,10,5]).subscribe(
      item => console.log(`resulting item.. ${item}`), //back tick operator for ts template strings (string interpoletion)
      err => console.log(`error occured ${err}`),
      () => console.log("completed")
    )
    console.log("map operator");
    of(2,4,6).pipe(
      map(item => item*2)
    ).subscribe(console.log)

  }
}