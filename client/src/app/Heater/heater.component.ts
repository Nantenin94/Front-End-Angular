import {Component, OnInit, ViewChild} from '@angular/core';
import { Http, Headers } from '@angular/http';
import {ModalDirective} from "ng2-bootstrap";
import {Heater} from "./heater.model";

@Component({
  selector: 'heater',
  templateUrl: './Heater.component.html',
  styleUrls: ['./Heater.component.css']
})
export class HeaterComponent implements OnInit {

  power:any;
  consomation:any;
  idHome:any;

  filter:Heater = new Heater();

  heaters;
  homes;


  @ViewChild('autoShownModal') public autoShownModal:ModalDirective;
  public isModalShown:boolean = false;


  constructor(private http: Http) { }

  ngOnInit() {
      this.getHeaters();
      this.getHomes();
  }

  public showModal():void {
    this.isModalShown = true;

  }

  public hideModal():void {
    this.autoShownModal.hide();
  }

  public onHidden():void {
    this.isModalShown = false;
  }

  addHeater() {
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');

      var content = JSON.stringify({
        power: this.power,
        consomation: this.consomation,
        idHome: this.idHome,
      });

      return this.http.put('/rest/Heater/create', content, {
        headers: headers
      }).map(res => res.json()).subscribe(
        data => { console.log(data); },
        err => { console.log(err); }
      );
  }

  getHeaterById(){
    this.heaters = this.http.get('/rest/Heater/search/1');
  }

  getHeaters(){
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');

      return this.http.get('/rest/Heater/', {
        headers: headers
      }).map(res => res.json()).subscribe(
        data => { this.heaters = data; console.log(data); },
        err => { console.log(err); }
      );
  }

  getHomes(){
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');

      return this.http.get('/rest/home/', {
        headers: headers
      }).map(res => res.json()).subscribe(
        data => { this.homes = data; console.log(data); },
        err => { console.log(err); }
      );
  }
}
