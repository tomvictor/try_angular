import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, tap,take } from 'rxjs/operators'

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
    ).subscribe(console.log);

    console.log("tap operator");
    of(2,3,4,5).pipe(
      tap(item=> console.log(`taped item: ${item}`))
    ).subscribe(console.log);

    console.log("take operator");
    // only emit first 2 item from the sequene
    of(2,4,6).pipe(
      take(2)
    ).subscribe(console.log)

    console.log("take example 2");
    of(2,4,6).pipe(
      tap(item => console.log(item)),
      map(item => item*2),
      take(2),
      map(item=>item-3),
      tap(item => console.log(item))
    ).subscribe()

    console.log("error handling");
    from([20,15,10,5]).pipe(
      tap(item => console.log(`emited item ...${item}`)),
      map(item => item*2),
      map(item => item-10),
      map(item => {
        if (item === 0) {
          throw new Error('zero is detected');
        }
        return item
      }),
      take(3)
    ).subscribe(
      item => console.log(`resulting item is ${item}`),
      err => console.error(`error occure ${err}`),
      () => console.log("complete")
    )
  }
}