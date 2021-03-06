import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../modelos/noticia';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {
  @Input() noticia:  Article;
  @Input() indice: number;
  constructor(private iab: InAppBrowser) { }

  ngOnInit() {}

  abrirNoticia(){
    const browser = this.iab.create(this.noticia.url,'_system');
    // console.log("Abriendo noticia", this.noticia.url);
  }
}
