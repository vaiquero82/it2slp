import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { merge } from '../../../node_modules/rxjs';
// import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataSchmierstelleLinearAchseX: JSON;
  dataSchmierstelleLinearAchseY: JSON;
  dataSchmierstelleRundtisch: JSON;


  private dataURL = 'http://it2wi1.if-lab.de/rest';

  constructor(private http: HttpClient) {}

  getDataX() {
    return this.http.get(this.dataURL + '/Aufgabe6-1');
  }

  getDataY() {
    return this.http.get(this.dataURL + '/Aufgabe6-2');
  }

  getDataRundtisch() {
    return this.http.get(this.dataURL + '/Aufgabe6-3');
  }
  /*
  constructor(private http: HttpClient) {
    this.http.get(this.dataURL + '/Aufgabe6-1').subscribe((res) => {
      this.dataSchmierstelleLinearAchseX = res.json();
    });
    this.http.get(this.dataURL + '/Aufgabe6-2').subscribe(
      da => {
        this.dataSchmierstelleLinearAchseX = da.json();
    });
    this.http.get(this.dataURL + '/Aufgabe6-3').subscribe((res) => this.onChange(this.dataSchmierstelleLinearAchseX, res));

  }
  // service.getsth().subscribe(x => onSubscription(this.variableToAccess, x));



  onChange(a, b) {
    a = b;
    console.log('constructor' + b.json());
  }

  getAllDpi(): Observable<JSON> {
    return new Observable<JSON>((observer: Subscriber<JSON>) => {
        this.http.get(this.dataURL + '/Aufgabe6-1').map(resp => resp.json());
    });
  }

  getLast10Dpi(): Observable<JSON> {
    return new Observable<JSON>((observer: Subscriber<JSON>) => {
      // 1 second interval
       // Changer to Interval/timeout
        this.http.get(this.dataURL + '/Aufgabe6-1').map(resp => resp.json())
          .subscribe((teamJson) => {
            this.dataSchmierstelleLinearAchseX = teamJson;
            observer.next(this.dataSchmierstelleLinearAchseX);
            observer.next(this.dataSchmierstelleLinearAchseX);
      });
      this.http.get(this.dataURL + '/Aufgabe6-1').map(resp => resp.json())
          .subscribe((teamJson) => {
            this.dataSchmierstelleLinearAchseX = teamJson;
            observer.next(this.dataSchmierstelleLinearAchseX);
            observer.next(this.dataSchmierstelleLinearAchseX);
      });
      this.http.get(this.dataURL + '/Aufgabe6-1').map(resp => resp.json())
      .subscribe((teamJson) => {
        this.dataSchmierstelleLinearAchseX = teamJson;
        observer.next(this.dataSchmierstelleLinearAchseX);
        observer.next(this.dataSchmierstelleLinearAchseX);
  });
  this.http.get(this.dataURL + '/Aufgabe6-1').map(resp => resp.json())
  .subscribe((teamJson) => {
    this.dataSchmierstelleLinearAchseX = teamJson;
    observer.next(this.dataSchmierstelleLinearAchseX);
    observer.next(this.dataSchmierstelleLinearAchseX);
});
    });
  }



  getDataSchmierstelleLinearAchseX(): JSON {
    console.log(this.dataSchmierstelleLinearAchseX);
    return this.dataSchmierstelleLinearAchseX;
  }

  getDataSchmierstelleLinearAchseY(): JSON {
    return this.dataSchmierstelleLinearAchseY;
  }

  getDataSchmierstelleRundtisch(): JSON {
    return this.dataSchmierstelleRundtisch;
  }*/
}
