import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { ControleEditoraService } from './controle-editora.service';
import { ControleLivrosService } from './controle-livros.service';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [BrowserModule, LivroListaComponent],
  providers: [ControleEditoraService, ControleLivrosService],
})
export class AppModule {}
