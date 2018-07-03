import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataSchmierstelleLinearAchseX: JSON;
  dataSchmierstelleLinearAchseY: JSON;
  dataSchmierstelleRundtisch: JSON;


  private dataURL = 'http://it2wi1.if-lab.de/rest';

  constructor(private http: Http) {
    this.http.get(this.dataURL + '/Aufgabe6-1').subscribe((res) => {
      this.dataSchmierstelleLinearAchseX = res.json();
    });
    this.http.get(this.dataURL + '/Aufgabe6-2').subscribe((res) => {
      this.dataSchmierstelleLinearAchseY = res.json();
    });
    this.http.get(this.dataURL + '/Aufgabe6-3').subscribe((res) => {
      this.dataSchmierstelleRundtisch = res.json();
    });
  }


  getDataSchmierstelleLinearAchseX(): JSON {
    return this.dataSchmierstelleLinearAchseX;
  }

  getDataSchmierstelleLinearAchseY(): JSON {
    return this.dataSchmierstelleLinearAchseY;
  }

  getDataSchmierstelleRundtisch(): JSON {
    return this.dataSchmierstelleRundtisch;
  }
}
