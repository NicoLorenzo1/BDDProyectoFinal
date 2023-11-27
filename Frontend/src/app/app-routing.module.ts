import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AgendaComponent } from './componentes/agenda/agenda.component';
import { MainComponent } from './componentes/main/main.component';
import { ListaFuncionariosComponent } from './componentes/lista-funcionarios/lista-funcionarios.component';
import { CsFormComponent } from './componentes/cs-form/cs-form.component';
import { PeriodoComponent } from './componentes/periodo/periodo.component';


const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'main', component: MainComponent },
  { path: 'list', component: ListaFuncionariosComponent },
  { path: 'csForm', component: CsFormComponent },
  { path: 'periodo', component: PeriodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
