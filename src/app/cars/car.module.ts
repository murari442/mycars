import { NgModule } from '@angular/core';
import { CarListComponent } from './car-list.component';
import { CarDetailComponent } from './car-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { CarGuardService } from './car-guard.service';
import { CarService } from './car.service';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
        { path: 'cars', component: CarListComponent },
        { path: 'cars/:id',
          canActivate: [ CarGuardService ],
          component: CarDetailComponent }
    ]),
    SharedModule
  ],
  declarations: [
    CarListComponent,
    CarDetailComponent,
    ConvertToSpacesPipe
  ],
  providers: [
    CarService,
    CarGuardService
  ]
})
export class CarModule { }
