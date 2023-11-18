import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumListarComponent } from './album-listar/album-listar.component';
import { GeneroListaComponent } from './genero-lista/genero-lista.component';
import { HomeComponent } from './home/home.component';
import { RecomendarListaComponent } from './recomendar-lista/recomendar-lista.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';

import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';
import { MenuClienteComponent } from './menu-cliente/menu-cliente.component';

import { MenuAdminAlbumComponent } from './menu-admin/menu-admin-album/menu-admin-album.component';
import { MenuAdminGeneroComponent } from './menu-admin/menu-admin-genero/menu-admin-genero.component';
import { TrackDeAlbumComponent } from './track-de-album/track-de-album.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UsuarioVotanteListComponent } from './usuario-votante-list/usuario-votante-list.component';
import { VotoListaComponent } from './voto-lista/voto-lista.component';

const routes: Routes = [
  { path: 'cliente/album-lista', component: AlbumListarComponent },
  {path: 'cliente/album-lista/:id', component: TrackDeAlbumComponent},
  { path: 'cliente/genero-lista', component: GeneroListaComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cliente/recomendar-lista', component: RecomendarListaComponent },
  { path: 'registrar-usuario', component: RegistrarUsuarioComponent },
  { path: 'usuario-votante-list', component: UsuarioVotanteListComponent },
  { path: 'voto-lista', component: VotoListaComponent },
  {path: 'registroUsuario', component: RegistrarUsuarioComponent},
  {path: 'registroUsuario', component: RegistrarUsuarioComponent},
  {path: 'menu', component: MenuClienteComponent},
{path: 'loginAdmin', component: LoginAdminComponent},
  {path: '', component: LoginClienteComponent},
  {path: 'user-page', component: UserPageComponent},
  {path: 'admin/menu-admin-genero', component: MenuAdminGeneroComponent},
  {path: 'admin/menu-admin-album', component: MenuAdminAlbumComponent},
  // Si se ingresa una ruta no existente, redirecciona a 'home'
  { path: '**', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
