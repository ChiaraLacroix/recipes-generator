import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { RecipeComponent } from "./recipe/recipe.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { RouterModule } from "@angular/router";

import {
  FontAwesomeModule,
  FaIconLibrary
} from "@fortawesome/angular-fontawesome";
import { faSquare, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import {
  faSquare as farSquare,
  faCheckSquare as farCheckSquare
} from "@fortawesome/free-regular-svg-icons";
import {
  faStackOverflow,
  faGithub,
  faMedium
} from "@fortawesome/free-brands-svg-icons";
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { VegRecipesComponent } from './veg-recipes/veg-recipes.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent },
      { path: 'recipe', component: RecipeComponent },
      { path: 'all-recipes', component: AllRecipesComponent },
      { path: 'veg-recipes', component: VegRecipesComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    RecipeComponent,
    WelcomeComponent,
    AllRecipesComponent,
    VegRecipesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(
      faSquare,
      faCheckSquare,
      farSquare,
      farCheckSquare,
      faStackOverflow,
      faGithub,
      faMedium,
    );
  }
}
