import { Component, OnInit } from '@angular/core';

import { ICar } from './car';
import { CarService } from './car.service';

@Component({
    templateUrl: './car-list.component.html',
    styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
    pageTitle: string = 'Cars List';
    imageWidth: number = 100;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredCars = this.listFilter ? this.performFilter(this.listFilter) : this.cars;
    }

    filteredCars: ICar[];
    cars: ICar[] = [];

    constructor(private _carService: CarService) {

    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Cars List: ' + message;
    }

    performFilter(filterBy: string): ICar[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.cars.filter((car: ICar) =>
              car.carName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._carService.getCars()
                .subscribe(cars => {
                    this.cars = cars;
                    this.filteredCars = this.cars;
                },
                    error => this.errorMessage = <any>error);
    }
}
