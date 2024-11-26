import { Component } from '@angular/core';
import { RecipeComponent } from "./recipe/recipe.component";

@Component({
  selector: 'app-root',
  imports: [ RecipeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularRecipeGrid';
}
