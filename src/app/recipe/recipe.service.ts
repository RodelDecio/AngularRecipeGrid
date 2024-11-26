import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  getRecipes(): Recipe[] {
    return [
      {
        id: 1,
        title: 'Pancakes',
        imageUrl: 'images/recipe.jpg',
      },
      {
        id: 2,
        title: 'Waffles',
        imageUrl: 'images/recipe.jpg',
      },
      {
        id: 3,
        title: 'Omelette',
        imageUrl: 'images/recipe.jpg',
      },
      {
        id: 4,
        title: 'Spaghetti Carbonara',
        imageUrl: 'images/recipe.jpg',
      },
      {
        id: 5,
        title: 'Caesar Salad',
        imageUrl:'images/recipe.jpg',
      },
      {
        id: 6,
        title: 'Grilled Cheese Sandwich',
        imageUrl:'images/recipe.jpg',
      },
      {
        id: 7,
        title: 'Beef Stroganoff',
        imageUrl: 'images/recipe.jpg',
      },
      {
        id: 8,
        title: 'Chicken Curry',
        imageUrl: 'images/recipe.jpg',
      },
      {
        id: 9,
        title: 'Chocolate Brownies',
        imageUrl: 'images/recipe.jpg',
      },
      {
        id: 10,
        title: 'Tacos',
        imageUrl: 'images/recipe.jpg',
      },
    ];
  }
}
