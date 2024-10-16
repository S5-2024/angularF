import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Variável para controlar qual formulário será exibido
  isLogin: boolean = true;

  // Alternar entre login e registro
  toggleForm() {
    this.isLogin = !this.isLogin;
  }
}
