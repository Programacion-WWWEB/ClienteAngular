import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumListarComponent } from './front-admin/album-listar/album-listar.component';
import { GeneroListaComponent } from './genero-lista/genero-lista.component';
import { HomeComponent } from './home/home.component';
import { RecomendarListaComponent } from './recomendar-lista/recomendar-lista.component';
import { RegistrarUsuarioComponent } from './front-cliente/registrar-usuario/registrar-usuario.component';
import { MenuClienteComponent } from './front-cliente/menu-cliente/menu-cliente.component';
import { LoginClienteComponent } from './front-cliente/login-cliente/login-cliente.component';
import { LoginAdminComponent } from './front-admin/login-admin/login-admin.component';
import { TrackDeAlbumComponent } from './track-de-album/track-de-album.component';
import { UsuarioVotanteListComponent } from './usuario-votante-list/usuario-votante-list.component';
import { VotoListaComponent } from './voto-lista/voto-lista.component';
import { MenuAdminComponent } from './front-admin/menu-admin/menu-admin.component';
import { MenuAdminAlbumComponent } from './front-admin/menu-admin-album/menu-admin-album.component';
import { MenuAdminCancionComponent } from './front-admin/menu-admin-cancion/menu-admin-cancion.component';
import { MenuAdminGeneroComponent } from './front-admin/menu-admin-genero/menu-admin-genero.component';
import { EditarAlbumComponent } from './front-admin/editar-album/editar-album.component';
import { EditarCancionComponent } from './front-admin/editar-cancion/editar-cancion.component';
import { EditarGeneroComponent } from './front-admin/editar-genero/editar-genero.component';

const routes: Routes = [
  { path: 'album-lista', component: AlbumListarComponent },
  { path: 'album-lista/:id', component: TrackDeAlbumComponent},
  { path: 'genero-lista', component: GeneroListaComponent },
  { path: 'home', component: HomeComponent },
  { path: 'recomendar-lista', component: RecomendarListaComponent },
  { path: 'registrar-usuario', component: RegistrarUsuarioComponent },
  { path: 'usuario-votante-list', component: UsuarioVotanteListComponent },
  { path: 'voto-lista', component: VotoListaComponent },
  { path: 'registroUsuario', component: RegistrarUsuarioComponent},
  { path: 'menu-admin', component: MenuAdminComponent},
  { path: 'menu', component: MenuClienteComponent},
  { path: 'loginAdmin', component: LoginAdminComponent},
  { path: 'menu-admin-album', component: MenuAdminAlbumComponent},
  { path: 'menu-admin-genero', component: MenuAdminGeneroComponent},
  { path: 'menu-admin-cancion', component:MenuAdminCancionComponent},
  { path: 'editar-admin-album/:id', component:EditarAlbumComponent},
  { path: 'editar-admin-track/:id', component:EditarCancionComponent},
  { path: 'editar-admin-genero/:id', component:EditarGeneroComponent},
  { path: '', component: LoginClienteComponent},

  // Si se ingresa una ruta no existente, redirecciona a 'home'
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
