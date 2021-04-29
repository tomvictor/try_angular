import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";


@Component({
    selector : 'pm-star',
    templateUrl : './star.component.html',
    styleUrls : ['./star.component.css']
})
export class StarComponent implements OnChanges{

    @Input() rating : number = 0;
    @Output() ratingClicked : EventEmitter <string> = new EventEmitter<string>() ;
    cropWidth : number = 75;

    ngOnChanges() : void {
        this.cropWidth = this.rating * 75/5;
    }

    onClick(){
        console.log('rating clicked')
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`)
    }
}