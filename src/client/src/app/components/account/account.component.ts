import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ModeService } from '../../services/mode.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

    constructor(private router: Router, private emplMode: ModeService) { }

   
    currentEmplMode():boolean {
        return this.emplMode.getCurrentMode();
    }
    navigateResumes() {
        this.router.navigate(['/resumes']);
    }
    navigatePersonalInfo() {
            this.router.navigate(['/personal']);
    }
    navigateFavorites() {
        this.router.navigate(['/favorites']);
    }
    navigateVacancies() {
        this.router.navigate(['/vacancies']);
    }
}
