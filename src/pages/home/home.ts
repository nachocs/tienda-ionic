import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Service } from '../../services/service';

@Component({
  selector: 'app-page-home',
  templateUrl: 'home.html'
})
export class HomePageComponent {
  productos: Array<any> = [];
  constructor(public navCtrl: NavController, public service: Service) {
    this.service.getList().subscribe((data) => {
      data = data.map((d) => {
        d.subject = d.subject.replace(/<(?:.|\n)*?>/gm, '');
        return d;
      });
      data.forEach((prod) => {
        this.productos.push(prod);
      });
    });
  }
  onScroll() {
    console.log('scroll');
  }

}
