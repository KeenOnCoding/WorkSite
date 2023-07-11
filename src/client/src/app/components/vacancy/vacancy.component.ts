import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vacancy } from '../../models/vacancy';
import { DataStorageService } from '../../services/data-storage.service';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {

    //focus;

    //public vacancy: Vacancy ;

    constructor(private dataStorage: DataStorageService, private router: Router) { }

    ngOnInit(): void {

    }
    navigateCreateVacancy() {
        this.router.navigate(['/vacancy/create']);
    }
}
