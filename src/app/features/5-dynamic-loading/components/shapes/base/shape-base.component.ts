import { Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';

export abstract class ShapeBaseComponent implements OnInit, OnChanges {
    private _color = 'green';

    @Input()
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
        this.setupStyle();
    }

    style: any;

    ngOnInit() {
        this.setupStyle();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.color) {
            this.setupStyle();
        }
    }

    /**
     * Setup share style
     */
    protected setupStyle() {
        this.style = {
            backgroundColor: this.color,
        };
    }
}
