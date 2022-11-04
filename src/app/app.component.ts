import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-noticias';
  listNoticias: any[] = [];

  constructor(private noticiaService: NoticiaService) {}
  buscarNoticias(param: any) {
    console.log(param);
    this.noticiaService.getNoticias(param).subscribe((data) => {
      console.log(data);
      this.listNoticias = data.articles;
    }, error => console.log(`Oh no, we got cracked! (${error})`));
  }
}
