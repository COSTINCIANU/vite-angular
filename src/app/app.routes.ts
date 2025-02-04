import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ListFriendsComponent } from './list-friends/list-friends.component';
import { OneFriendComponent } from './one-friend/one-friend.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  // { path: 'list-freinds', component: ListFreindsComponent},
  { path: 'one-friend', component: OneFriendComponent},

  { path: 'list-friends', component: ListFriendsComponent },
  { path: '', redirectTo: '/list-friends', pathMatch: 'full' },

  { path: '**', loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent) }
];
