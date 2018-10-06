import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItemVM } from '../../../shared/models';

@Component({
    selector: 'i-r-steps',
    templateUrl: './i-r-steps.component.html',
    styleUrls: ['./i-r-steps.component.css']
})
export class IRStepsComponent implements OnInit {

    @Input() activeIndex: number = 0;
    @Output() activeIndexChange: EventEmitter<number> = new EventEmitter<number>();

    @Input() steps: MenuItemVM[] = [];

    constructor() { }

    ngOnInit() {
    }

    public changePage(index: number): void {
        this.activeIndex = index;
        this.activeIndexChange.emit(this.activeIndex);
    }
}
