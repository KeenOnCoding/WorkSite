import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SearchComponent } from './components/search/search.component';
import { JobComponent } from './components/job/job.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccountComponent } from './components/account/account.component';
import { ResumeComponent } from './components/resume/resume.component';
import { InfoComponent } from './components/info/info.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { ResumesComponent } from './components/resumes/resumes.component';
import { CreateresumeComponent } from './components/createresume/createresume.component';
import { ResumeToSendComponent } from './components/resume/resume-to-send/resume-to-send.component';
import { PersonalComponent } from './components/personal/personal.component';
import { MaterialModule } from './material/material.module';
import { VacancyComponent } from './components/vacancy/vacancy.component';
import { NewVacancyComponent } from './components/vacancy/new-vacancy/new-vacancy.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { OverlayModule } from '@angular/cdk/overlay';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe } from './filter.pipe';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { AutocompleteModule } from './components/autocomplete/autocomplete.module';
import { AutocompleteDirective } from './components/autocomplete/autocomplete.directive';
import { AutocompleteContentDirective } from './components/autocomplete/autocomplete-content.directive';
import { OptionComponent } from './components/autocomplete/option/option.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    SearchComponent,
    JobComponent,
    LoginComponent,
    FooterComponent,
    AccountComponent,
    ResumeComponent,
    InfoComponent,
    FavoriteComponent,
    ResumesComponent,
    CreateresumeComponent,
    ResumeToSendComponent,
    PersonalComponent,
    VacancyComponent,
    NewVacancyComponent,
    FilterPipe
    ],
    entryComponents: [AutocompleteComponent],
  imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      BrowserModule,
      NgbModule,
      FormsModule,
      BrowserAnimationsModule,
      Ng2SearchPipeModule,
      RouterModule,
      ReactiveFormsModule,
      OverlayModule,
      AutocompleteModule,
      MatFormFieldModule,
      MatInputModule,
      MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
