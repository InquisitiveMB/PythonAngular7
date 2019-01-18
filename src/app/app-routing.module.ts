import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import {LoginComponent} from './ui/login/login.component';
import {CardsComponent} from './cards/cards.component';
import {RemCardsComponent} from './rem-cards/rem-cards.component';
import { ModalComponent } from './modal/modal.component';

const routes: Routes = [
  { path:'', component : HeaderComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: LoginRegisterComponent },
  { path: 'cards', component: RemCardsComponent }
  // { path: 'cards2', component: CardsComponent },
  // { path: 'twitterId', component: ModalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HeaderComponent, LoginRegisterComponent, LoginComponent, CardsComponent, RemCardsComponent, ModalComponent];
