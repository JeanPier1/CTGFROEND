import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfigurarEvaluacionComponent } from './pages/configurar-evaluacion/configurar-evaluacion.component';
import { EvaluarseComponent } from './pages/evaluarse/evaluarse.component';
import { ListarEvaluacionComponent } from './pages/listar-evaluacion/listar-evaluacion.component';

const routes: Routes = [
  {path: '', redirectTo: 'central', pathMatch: 'full'},
  {path: 'central', component: DashboardComponent,
    children: [
    {path: 'configurarevaluacion', component: ConfigurarEvaluacionComponent},
    {path: 'evaluarse', component: EvaluarseComponent},
    {path: 'listarevaluacion', component: ListarEvaluacionComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
