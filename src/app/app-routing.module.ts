import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyComponent } from './currency/currency.component';
import { DateformatComponent } from './dateformat/dateformat.component';
import { JsonformatComponent } from './jsonformat/jsonformat.component';
import { NumberformatComponent } from './numberformat/numberformat.component';
import { SliceComponent } from './slice/slice.component';
import { CustomeComponent } from './custome/custome.component';

const routes: Routes = [
  {path:"currency",component:CurrencyComponent},
  {path:"dateformat",component:DateformatComponent},
  {path:"json",component:JsonformatComponent},
  {path:"numberformat",component:NumberformatComponent},
  {path:"slice",component:SliceComponent},
  {path:"custome",component:CustomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
