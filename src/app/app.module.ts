import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { ConfigurarEvaluacionComponent } from './pages/configurar-evaluacion/configurar-evaluacion.component';
import { ListarEvaluacionComponent } from './pages/listar-evaluacion/listar-evaluacion.component';
import { EvaluarseComponent } from './pages/evaluarse/evaluarse.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    ConfigurarEvaluacionComponent,
    ListarEvaluacionComponent,
    EvaluarseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
