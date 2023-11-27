import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { InicioComponent } from './componentes/inicio/inicio.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgendaComponent } from './componentes/agenda/agenda.component';
import { DynamicDatePipe } from './pipes/dynamic-date.pipe';
import { MainComponent } from './componentes/main/main.component';
import { ListaFuncionariosComponent } from './componentes/lista-funcionarios/lista-funcionarios.component';
import { CsFormComponent } from './componentes/cs-form/cs-form.component';
import { PeriodoComponent } from './periodo/periodo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        InicioComponent,
        HeaderComponent,
        FooterComponent,
        RegistroComponent,
        AgendaComponent,
        DynamicDatePipe,
        MainComponent,
        ListaFuncionariosComponent,
        CsFormComponent,
        PeriodoComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        IonicModule.forRoot(),
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [DatePipe, DynamicDatePipe],
    bootstrap: [AppComponent]
})
export class AppModule { }
