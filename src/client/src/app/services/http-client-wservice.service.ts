import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

    constructor(private httpClient: HttpClient) {
    }
    get(url: string): Observable<any> {
        const get$ = new BehaviorSubject<any>({ data: undefined, isLoading: true });
        
this.httpClient.get(url)
            .subscribe(
            (response) => {

                get$.next({ data: response, isLoading: false });
            },
            (err) => {
              
                get$.next(err);
            }
        );
        return get$.asObservable();
    }
}
