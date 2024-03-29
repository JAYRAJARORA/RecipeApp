import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Test Recipe', 
            'This is test recipe', 
            'https://hips.hearstapps.com/hmg-prod/images/crepes-index-64347419e3c7a.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*',
            [ 
                new Ingredient('French Fries', 100),
                new Ingredient('Burger', 1)
            ]),
        new Recipe(
            'Test Recipe 2', 
            'Another Recipe', 
            'https://www.foodandwine.com/thmb/tAS-x_IC4ss1cb9EdDpsr0UExdM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bucatini-with-mushroom-ragu-dandelion-greens-and-tarragon-FT-RECIPE0421-3a5f0d29f7264f5e9952d4a3a51f5f58.jpg',
            [
                new Ingredient('Noodles', 1),
                new Ingredient('Tomatos', 100)
            ])
        
    ];

    constructor(private shoppingListService: ShoppingListService) {}
    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingCart(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    getRecipe(id:number) {
        return this.recipes[id];
    }     
}