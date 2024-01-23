/**
* Les Petits Plats JS : Recipes Template
**/
export const displayRecipes = recipes => {
    
    const createCard = recipe => {
        const cookingSection = document.querySelector('.cooking__section');
        let article = document.createElement('article');
        article.classList.add('recipe');
        
        // const recipeIngredients = recipes.map(recipe => recipe.ingredients);
        // console.log(recipeIngredients);

        article.innerHTML = `
            <div class="recipe__image">
                <img src="./assets/images/recettes/`+recipe.image+`" alt="`+recipe.name+`">
            </div>
            <div class="recipe__content">
                <div class="recipe__title">
                    <h2>`+recipe.name+`</h2>
                </div>

                <div class="recipe__wrapper">
                    <div class="recipe__description">
                        <h3>RECETTE</h3>
                        <p class="description__txt">
                            `+recipe.description+`
                        </p>
                    </div>
                    <div class="recipe__ingredients">
                        <h3>Ingrédients</h3>
                        <div class="ingredients">
                        `+
                            recipe.ingredients.map(ingredients => {
                                const ingredient = ingredients.ingredient;
                                let quantity = ingredients.quantity; 
                                let unit = ingredients.unit; 

                                if (quantity === undefined) {
                                    quantity = '-';
                                }

                                if (unit === undefined) {
                                    unit = ' ';
                                }
                                
                                return '<div class="col-6"><p class="ingredients__text"><strong>'+ingredient+'</strong></p><p class="ingredients__quantity">'+quantity+' '+unit+'</p></div>';
                            }).join('');
                        +`
                        </div>
                    </div>
                </div>
            </div>
        `;

        return cookingSection.appendChild(article);
    }

    recipes.forEach((element) =>
        createCard(element)
    );
}