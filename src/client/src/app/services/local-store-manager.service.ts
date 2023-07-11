import { Injectable } from '@angular/core';
import { Resume } from '../models/resume';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreManager {

    constructor() { }

    create(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    delete(key: string) {
        localStorage.removeItem(key);
    }
    get(key: string) {
        let result = localStorage.getItem(key);
        return result;
    }
    flush() { localStorage.clear(); }
}
