import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faFaceLaughBeam as farBeam } from '@fortawesome/free-regular-svg-icons';
import { faTrash as fasTrash } from '@fortawesome/free-solid-svg-icons';
import { GoalComponent } from './components/goal/goal.component';
import { GoalDetailComponent } from './components/goal-detail/goal-detail.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalDetailComponent,
    ButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(farBeam, fasTrash);
  }
}
