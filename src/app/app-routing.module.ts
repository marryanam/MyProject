import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Index1Component } from './pages/index1/index1.component';
import { Index2Component } from './pages/index2/index2.component';
import { Index3Component } from './pages/index3/index3.component';
import { Index4Component } from './pages/index4/index4.component';
import { Index5Component } from './pages/index5/index5.component';

const routes: Routes = [
  { path: '', component: Index1Component },
  { path: 'index_1', component: Index1Component },
  { path: 'index_2', component: Index2Component },
  { path: 'index_3', component: Index3Component },
  { path: 'index_4', component: Index4Component },
  { path: 'index_5', component: Index5Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
