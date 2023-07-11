import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, startWith, Subject } from 'rxjs';
import { Router } from "@angular/router";
import { Vacancy } from '../../models/vacancy';
import { DataStorageService } from '../../services/data-storage.service';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-seatch',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit, OnDestroy {
    focus;
    focus2;
    control = new FormControl();
    searchLocation: string;
    searchText: string;
    vacantions: Array<Vacancy>;
    result: Array<Vacancy>;
    keyword = 'name';
    public countries = [
        {
            id: 1,
            name: 'Albania',
        },
        {
            id: 2,
            name: 'Belgium',
        },
        {
            id: 3,
            name: 'Denmark',
        },
        {
            id: 4,
            name: 'Montenegro',
        },
        {
            id: 5,
            name: 'Turkey',
        },
        {
            id: 6,
            name: 'Ukraine',
        },
        {
            id: 7,
            name: 'Macedonia',
        },
        {
            id: 8,
            name: 'Slovenia',
        },
        {
            id: 9,
            name: 'Georgia',
        },
        {
            id: 10,
            name: 'India',
        },
        {
            id: 11,
            name: 'Russia',
        },
        {
            id: 12,
            name: 'Switzerland',
        }
    ];
    private destroy$ = new Subject();
    //options = [
    //   { id: 1, label: 'Manager' },
    //    { id: 2, label: 'Developer' },
    //    { id: 3, label: 'CEO' }
    //];
    options: string[] = ['Manager', 'Developer', 'CEO'];
    filteredOptions: Observable<any>;

    constructor(private router: Router, private data: DataStorageService) { }

    ngOnDestroy() {
        this.destroy$.next(null);
        this.destroy$.unsubscribe();
    }
    ngOnInit() {
        this.filteredOptions = this.control.valueChanges.pipe(
            startWith(''),
            map(() => this._filter()),
        );
        this.vacantions = this.data.vacantions;
    }
    checkInputForNull() {
        if (this.searchText == undefined) {
            return false;
        }
        if (this.searchText == null) {
            return false;
        }
        if (this.searchText == '') {
            return false;
        }
        return true;
    }
    filter() {return this.options }
    goJob(id: any) {
        this.router.navigate(['/job'], { queryParams: { id: id } });
    }
    onSubmit(value: any) {
        this.result = this.vacantions.filter((vacantion) => {
            console.log(vacantion['title'].toLowerCase().includes(value));
            return vacantion.title.toLowerCase().includes(value.toLowerCase());
        })
    }
    private _filter(){
        const filterValue = this.searchText.toLowerCase();

        return this.options.filter(option => option.toLowerCase()
            .includes(filterValue))
            .slice(0, 5);
    }
}

