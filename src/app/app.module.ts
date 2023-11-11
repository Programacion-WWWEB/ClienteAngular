import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlbumListarComponent } from './front-admin/album-listar/album-listar.component';
import { AppComponent } from './app.component';
import { GeneroListaComponent } from './genero-lista/genero-lista.component';
import { HomeComponent } from './home/home.component';
import { LoginAdminFormComponent } from './front-admin/login-admin/login-admin-form.component';
import { LoginAdminComponent } from './front-admin/login-admin/login-admin.component';
import { LoginFormComponent } from './front-cliente/login-cliente/login-cliente-form.component';
import { LoginClienteComponent } from './front-cliente/login-cliente/login-cliente.component';
import { MenuClienteComponent } from './front-cliente/menu-cliente/menu-cliente.component';
import { RecomendacionService } from './service/recomendacion.service';
import { RecomendarListaComponent } from './recomendar-lista/recomendar-lista.component';
import { RegistrarUsuarioComponent } from './front-cliente/registrar-usuario/registrar-usuario.component';
import { TokenAuthComponentComponent } from './token-auth-component/token-auth-component.component';
import { ToolBarHeaderComponent } from './tool-bar-header/tool-bar-header.component';
import { TrackDeAlbumService } from './track-de-album.service';
import { TrackDeAlbumComponent } from './track-de-album/track-de-album.component';
import { UsuarioVotanteListService } from './usuario-votante-list.service';
import { UsuarioVotanteListComponent } from './usuario-votante-list/usuario-votante-list.component';
import { VotoListaService } from './voto-lista.service';
import { VotoListaComponent } from './voto-lista/voto-lista.component';
import { MenuAdminComponent } from './front-admin/menu-admin/menu-admin.component';
import { AlbumService } from './service/album.service';
import { GeneroService } from './service/genero.service';
import { MenuAdminAlbumComponent } from './front-admin/menu-admin-album/menu-admin-album.component';
import { MenuAdminGeneroComponent } from './front-admin/menu-admin-genero/menu-admin-genero.component';
import { MenuAdminCancionComponent } from './front-admin/menu-admin-cancion/menu-admin-cancion.component';
import { FormAlbumComponent } from './front-admin/form-album/form-album.component';
import { EditarAlbumComponent } from './front-admin/editar-album/editar-album.component';


@NgModule({
  declarations: [
    AppComponent,
    GeneroListaComponent,
    UsuarioVotanteListComponent,
    RecomendarListaComponent,
    AlbumListarComponent,
    VotoListaComponent,
    RegistrarUsuarioComponent,
    LoginFormComponent,
    MenuClienteComponent,
    LoginClienteComponent,
    LoginAdminComponent,
    LoginAdminFormComponent,
    HomeComponent,
    ToolBarHeaderComponent,
    TrackDeAlbumComponent,
    TokenAuthComponentComponent,
    MenuAdminComponent,
    MenuAdminAlbumComponent,
    MenuAdminGeneroComponent,
    MenuAdminCancionComponent,
    FormAlbumComponent,
    EditarAlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule

  ],
  providers: [
    UsuarioVotanteListService,
    RecomendacionService,
    VotoListaService,
    TrackDeAlbumService,
    AlbumService,
    GeneroService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
