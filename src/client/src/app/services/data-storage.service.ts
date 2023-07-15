import { Injectable, OnInit } from '@angular/core';
import { Vacancy } from '../models/vacancy';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClientService } from './http-client-wservice.service';
@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

   // private currentUser = new BehaviorSubject<string | null>(null);
    //public currentUserChanged$ = this.currentUser.asObservable();

    public vacantions: Vacancy[] = new Array<Vacancy>();

    constructor(private http: HttpClient, private httpClient: HttpClientService) {
        this.http.get<Vacancy[]>("https://localhost:5001/" + 'api/Vacancy/GetAllVacancies')
            .pipe(catchError((error) => of(error)))
            .subscribe(data => {
                for (var i = 0; i < data.length; i++) {
                    this.vacantions[i] = data[i]
                    this.setJob(data[i]);
                }
            });

        this.handleGet().pipe(catchError((error) => of(error)))
            .subscribe(data => {
                 console.log('possible: global handle success with toast');
                console.log(data);
            });
        //this.vacantions =    [
        //    { id: 1, title: 'Manager', company: 'Microsoft', description: 'Raw denim you probably have heard of them jean shorts Austin.Nesciunt tofu stumptown aliqua, retro synth master cleanse.Mustache cliche tempor, williamsburg carles vegan helvetica.Reprehenderit butcher retro keffiyeh dreamcatcher synth.', wage: '10K' },
        //    { id: 2, title: 'Developer Developer Developer Developer Developer Developer', company: 'Microsoft', description: 'Raw denim you probably have heard of them jean shorts Austin.Nesciunt tofu stumptown aliqua, retro synth master cleanse.Mustache cliche tempor, williamsburg carles vegan helvetica.Reprehenderit butcher retro keffiyeh dreamcatcher synth.', wage: '9K' },
        //    { id: 3, title: 'Plumber', company: 'Microsoft', description: 'Raw denim you probably have heard of them jean shorts Austin.Nesciunt tofu stumptown aliqua, retro synth master cleanse.Mustache cliche tempor, williamsburg carles vegan helvetica.Reprehenderit butcher retro keffiyeh dreamcatcher synth.', wage: '11K' },
        //    { id: 4, title: 'Doctor', company: 'Microsoft', description: 'Raw denim you probably have heard of them jean shorts Austin.Nesciunt tofu stumptown aliqua, retro synth master cleanse.Mustache cliche tempor, williamsburg carles vegan helvetica.Reprehenderit butcher retro keffiyeh dreamcatcher synth.', wage: '7K' },
        //    { id: 5, title: 'Director', company: 'Microsoft', description: 'Raw denim you probably have heard of them jean shorts Austin.Nesciunt tofu stumptown aliqua, retro synth master cleanse.Mustache cliche tempor, williamsburg carles vegan helvetica.Reprehenderit butcher retro keffiyeh dreamcatcher synth.', wage: '3K' },
        //    { id: 6, title: 'CEO', company: 'Microsoft', description: 'Raw denim you probably have heard of them jean shorts Austin.Nesciunt tofu stumptown aliqua, retro synth master cleanse.Mustache cliche tempor, williamsburg carles vegan helvetica.Reprehenderit butcher retro keffiyeh dreamcatcher synth.', wage: '12K' },
        //    { id: 7, title: 'Architect', company: 'Microsoft', description: 'MRaw denim you probably have heard of them jean shorts Austin.Nesciunt tofu stumptown aliqua, retro synth master cleanse.Mustache cliche tempor, williamsburg carles vegan helvetica.Reprehenderit butcher retro keffiyeh dreamcatcher synth.', wage: '16K' },
        //    { id: 8, title: 'DevOps', company: 'Microsoft', description: 'Raw denim you probably have heard of them jean shorts Austin.Nesciunt tofu stumptown aliqua, retro synth master cleanse.Mustache cliche tempor, williamsburg carles vegan helvetica.Reprehenderit butcher retro keffiyeh dreamcatcher synth.', wage: '13K' },
        //    { id: 9, title: 'Q&A', company: 'Microsoft', description: 'Raw denim you probably have heard of them jean shorts Austin.Nesciunt tofu stumptown aliqua, retro synth master cleanse.Mustache cliche tempor, williamsburg carles vegan helvetica.Reprehenderit butcher retro keffiyeh dreamcatcher synth.', wage: '14K' },
        //    { id: 10, title: 'Tester', company: 'Microsoft', description: 'Raw denim you probably have heard of them jean shorts Austin.Nesciunt tofu stumptown aliqua, retro synth master cleanse.Mustache cliche tempor, williamsburg carles vegan helvetica.Reprehenderit butcher retro keffiyeh dreamcatcher synth.', wage: '2K' }
        //];
        

    }
    handleGet() {
      return  this.httpClient.get("https://localhost:5001/" + 'api/Vacancy/GetAllVacancies')
            .pipe(
                map(resp => {
                    console.log(resp.data);
                })
            );
    }
    setJob(vacancy: Vacancy) {
        console.log(vacancy);
            sessionStorage.setItem(vacancy.id, JSON.stringify(vacancy));
        }
    getJob(id): Vacancy{
        return JSON.parse(sessionStorage.getItem(id));
    }
}
