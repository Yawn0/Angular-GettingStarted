import { Component, EventEmitter, Input, OnChanges, Output} from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{

    readonly DEFAULT_CROPWIDTH: number = 75; 
    readonly DEFAULT_RATING: number = 0;
    readonly MAX_STARS: number = 5; 

    cropWidth: number = this.DEFAULT_CROPWIDTH;
    @Input() rating: number = this.DEFAULT_RATING;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    
    ngOnChanges(): void {
        this.cropWidth = this.rating * this.DEFAULT_CROPWIDTH/this.MAX_STARS;
    }

    onClick(): void{
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}