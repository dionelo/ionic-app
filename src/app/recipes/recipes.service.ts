import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
	providedIn: 'root',
})
export class RecipesService {
	private recipes: Recipe[] = [
		{
			id: 'r1',
			title: 'Milanesa Napolitana con Fritas',
			imageUrl: 'https://static-agr.clickonar.com/205944/5da9b5db701c6sl.jpg',
			ingredients: ['Carne de ternera', 'Papas', 'Tomates', 'Mozzarella'],
		},
		{
			id: 'r2',
			title: 'Sorrentinos de Jamon y Queso',
			imageUrl:
				'https://cocinerosargentinos.com/content/recipes/500x500/sorrentinos-de-jamon-y-queso-con-estofado-de-paleta.6077.jpg',
			ingredients: ['Jamon Cocido', 'Mozzarella', 'Harina', 'Huevo'],
		},
	];

	constructor() {}

	getAllRecipes() {
		return [...this.recipes];
	}

	getRecipe(recipeId: string) {
		return {
			...this.recipes.find(recipe => {
				return recipe.id === recipeId;
			}),
		};
	}

	deleteRecipe(recipeId: string) {
		this.recipes = this.recipes.filter(recipe => {
			return recipe.id !== recipeId;
		});
	}
}
