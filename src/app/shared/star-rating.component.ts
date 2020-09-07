import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'star-rating',
    templateUrl: './star-rating.component.html',
    styleUrls: ['./star-rating.component.css']
})

export class StarRatingComponent implements OnChanges{
    @Input() rating: number;
    starWidth: number;
    @Output() starClicked: EventEmitter<string> = new EventEmitter <string>();

    ngOnChanges(): void{
        this.starWidth = this.rating * 75 / 5;
    }
    onClick(): void{
        this.starClicked.emit(`The star clicked has rating: ${this.rating}`);
        console.log(`The star clicked has rating: ${this.rating}`);
    }
}