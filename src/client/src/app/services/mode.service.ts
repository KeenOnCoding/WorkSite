import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModeService {

    private EmpMode: boolean = true;

    getCurrentMode() {
        return this.EmpMode;
    }

    isEmpoyer() {
        this.EmpMode = false;
    }

    isEmpoyee() {
        this.EmpMode = true;
    }

}
