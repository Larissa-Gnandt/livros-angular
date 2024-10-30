import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { ControleEditoraService } from './controle-editora.service';
import { ControleLivrosService } from './controle-livros.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    LivroListaComponent,
    FormsModule,
    RouterModule.forRoot(routes),
    CommonModule,
  ],
  providers: [ControleEditoraService, ControleLivrosService],
})
export class AppModule {}
