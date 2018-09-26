import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ICar } from './car';
import { CarService } from './car.service';

@Component({
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  pageTitle: string = 'Car Details';
  errorMessage: string;
  car: ICar;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _carService: CarService) {
  }

  ngOnInit() {
    const param = this._route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getCar(id);
    }
  }

  getCar(id: number) {
    this._carService.getCar(id).subscribe(
      car => this.car = car,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/cars']);
  }

}
