import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'E Não Sobrou Nenhum',
      resumo: 'Uma ilha misteriosa, um poema infantil, dez soldadinhos de porcelana e muito suspense são os ingredientes com que Agatha Christie constrói seu romance mais importante. Na ilha do Soldado, antiga propriedade de um milionário norte-americano, dez pessoas sem nenhuma ligação aparente são confrontadas por uma voz misteriosa com fatos marcantes de seus passados.',
      autores: ['Agatha Christie'],
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'Na Escuridão da Mente',
      resumo: 'A vida dos Barrett, uma família como qualquer outra, é virada do avesso quando Marjorie, de 14 anos, começa a demonstrar sinais de esquizofrenia aguda. Quando os médicos se mostram incapazes de deter os acessos bizarros e o declínio da sua sanidade, o lar se transforma em um circo de horrores, e os Barrett se veem recorrendo a um padre da região.',
      autores: ['Paul Tremblay'],
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'Noite sem Fim',
      resumo: 'Quando Michael encontra Ellie durante uma visita ao Passo do Cigano, é amor à primeira vista. Apaixonados, os dois decidem começar uma vida juntos comprando a propriedade abandonada. No entanto, o casal ignora o aviso de uma estranha senhora sobre a maldição que assola o local… e apesar de não acreditarem em seus augúrios, o mal começa a assombrá-los. Logo, o rapaz descobre que, no Passo do Cigano, muitos acidentes inexplicáveis acontecem. Mas quem ― ou o quê ― está por trás dessas desgraças?',
      autores: ['Agatha Christie'],
    },
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    livro.codigo = this.livros.length
      ? Math.max(...this.livros.map((l) => l.codigo)) + 1
      : 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex((l) => l.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
