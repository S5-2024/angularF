// app.routes.ts
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  // Adicione "export" aqui
  {
    path: '',
    component: AppComponent, // Define o componente raiz
    children: [
      { path: 'home', component: HomeComponent }, // Página com layout do AppComponent
    ]},
  { path: 'login', component: LoginComponent }, // Página sem layout do AppComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModdule {}