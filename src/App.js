import { useState } from 'react'
import Header from './components/Header';
import RecipesListComponent from './components/RecipesListComponent';
import SearchFormComponent from './components/searchFormComponent'

function App() {

    const [recipes, setRecipes] = useState([
        {
            id: 1,
            name: 'Chicken Piccata',
            pictureUrl: "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Chicken-Picatta-8.jpg?w=1200&auto=compress%2Cformat&fit=crop&fp-x=0.5&fp-y=0.5&dm=1599767276&s=2aa0bf00be2c34de44c1fb93a32ca68f",
            favourite: false,
            prep: 10,
            cook: 30,
            servings: 6,
            difficulty: 3,
            briefDesc: "Lemony, caper-topped, and just buttery enough, chicken piccata is an easy weeknight supper that’s easy to love, and so very fast—just ten minutes from sauté pan to table.",
            ingredients: [
                {
                    name: "Chicken breasts",
                    amount: 2,
                    type: 'lbs'
                },
                {
                    name: "Salt",
                    amount: 2.5,
                    type: 'tsp'
                },
                {
                    name: "Pepper",
                    amount: 0.5,
                    type: 'tsp'
                },
                {
                    name: "Flour",
                    amount: 1,
                    type: 'cup'
                },
                {
                    name: "Butter, cut in pieces",
                    amount: 10,
                    type: 'tbsp'
                },
                {
                    name: "Olive oil",
                    amount: 4,
                    type: 'tbsp'
                },
                {
                    name: "Shallot, minced",
                    amount: 1,
                    type: ''
                },
                {
                    name: "Garlic, minced",
                    amount: 1,
                    type: ''
                },
                {
                    name: "Chicken stock",
                    amount: 1.5,
                    type: 'cup'
                },
                {
                    name: "Lemon, juiced",
                    amount: 1,
                    type: ''
                },
                {
                    name: "Lemon zest",
                    amount: 2,
                    type: 'tsp'
                },
                {
                    name: "Capers, drained",
                    amount: 2,
                    type: 'tbsp'
                }
            ],
            method: [
                {
                    step: 1,
                    desc: "Season the chicken with 2 teaspoons salt and pepper on both sides. Place the flour on a plate. Dredge the chicken in the flour and shake off any excess. Discard the flour when finished dredging."
                },
                {
                    step: 2,
                    desc: "Heat 3 tablespoons butter and 2 tablespoons oil in a large skillet set over medium-high until the butter has melted."
                },
                {
                    step: 3,
                    desc: "Working in batches, taking care not to crowd the pan, add half of the chicken and sauté until golden brown, about 2.5 - 3 minutes per side, until cooked through. Set the chicken aside on a plate when they finish cooking."
                },
                {
                    step: 4,
                    desc: "Add 3 more tablespoons of butter and 2 more tablespoons of olive oil and finish cooking the 2nd batch of chicken."
                },
                {
                    step: 5,
                    desc: "Add the shallot to the pan drippings and sauté until soft and fragrant, about 1 minute. Add garlic and saute for 1 minute longer."
                },
                {
                    step: 6,
                    desc: "Add the stock and simmer until reduced by half, about 4-5 minutes."
                },
                {
                    step: 7,
                    desc: "Reduce heat to low, then stir in the remaining 4 tablespoons butter, capers, lemon juice, and zest to taste. Season with remaining half teaspoon of salt. Garnish with parsley if using."
                },
                {
                    step: 8,
                    desc: "Serve the chicken with the piccata sauce poured over the top of the pan-fried chicken, alongside your favorite pasta or salad."
                }
            ]
        }
    ]);


    return (
        <div className="App">
            <Header />
            <SearchFormComponent />
            <RecipesListComponent recipes={recipes} />
        </div>
    );
}

export default App;
