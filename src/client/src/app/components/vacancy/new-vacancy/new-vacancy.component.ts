import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vacancy } from '../../../models/vacancy';
import { DataStorageService } from '../../../services/data-storage.service';


@Component({
  selector: 'app-new-vacancy',
  templateUrl: './new-vacancy.component.html',
  styleUrls: ['./new-vacancy.component.css']
})

export class NewVacancyComponent implements OnInit {

    focus;

    public vacancy: Vacancy;

    constructor(private dataStorage: DataStorageService, private router: Router) { }

    ngOnInit(): void {
        this.vacancy = new Vacancy();
        this.vacancy.description = null;
    }
    createVacancy()
    {
        this.vacancy.id = this.getRandomInt(100000),

        this.dataStorage.vacantions.push(this.vacancy);

        this.dataStorage.setJob(this.vacancy);

        this.router.navigate(['/home/']);
    }
    private getRandomInt(max)
    {
        return Math.floor(Math.random() * max);
    }

}
