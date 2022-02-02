import { CovidInBrazilService } from './services/covid-in-brazil.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  public casosBrasil: any;
  public mortesBrasil: any;
  public casosGlobal: any;
  public mortesGlobal: any;

  constructor(private service: CovidInBrazilService) {}

  ngOnInit(): void {
    this.service.buscaDados().subscribe(
      (data: any): void => {

        this.casosBrasil = data['confirmed']['value'];
        this.mortesBrasil = data['deaths']['value'];

        console.log(this.casosBrasil)
        console.log(this.mortesBrasil)
      },
      (error) => {
        console.log(error);
      });

    this.service.buscaDadosGlobal().subscribe(
      (data: any) => {
        this.casosGlobal = data['confirmed']['value'];
        this.mortesGlobal = data['deaths']['value'];

        console.log(this.casosGlobal)
        console.log(this.mortesGlobal)
      },
      (error) => {
        console.log(error)
      }
    )
  }


}

