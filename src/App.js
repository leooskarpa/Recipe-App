import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
        },
        {
            id: 2,
            name: 'Mexican Rice',
            pictureUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190412-mexican-rice-horizontal-2-1555972502.png?crop=0.668xw:1.00xh;0.143xw,0&resize=768:*",
            favourite: true,
            prep: 15,
            cook: 45,
            servings: 8,
            difficulty: 5,
            briefDesc: "This easy recipe for Mexican rice is so full of flavor and better than any we've had from a Tex-Mex restaurant. Make some to go with your chicken enchiladas or tamale pie, and call it a night! ",
            ingredients: [
                {
                    name: "Extra-virgin olive oil",
                    amount: 3,
                    type: 'tbsp'
                },
                {
                    name: "Carrots, diced",
                    amount: 2,
                    type: ''
                },
                {
                    name: "Small green bell pepper, diced",
                    amount: 1,
                    type: ''
                },
                {
                    name: "Small onion, chopped",
                    amount: 1,
                    type: ''
                },
                {
                    name: "Garlic cloves, thinly sliced",
                    amount: 3,
                    type: ''
                },
                {
                    name: "Long-grain rice",
                    amount: 2,
                    type: 'cup'
                },
                {
                    name: "Tomato paste",
                    amount: 1,
                    type: 'tbsp'
                },
                {
                    name: "Low-sodium chicken broth",
                    amount: 2.5,
                    type: 'cup'
                },
                {
                    name: "Fire-roasted diced tomatoes",
                    amount: 14,
                    type: 'oz'
                },
                {
                    name: "Tomato sauce",
                    amount: 8,
                    type: 'oz'
                },
                {
                    name: "Ground cumin",
                    amount: 0.75,
                    type: 'tsp'
                },
                {
                    name: "Dried oregano",
                    amount: 0.5,
                    type: 'tsp'
                },
                {
                    name: "Kosher salt",
                    amount: 0,
                    type: ''
                },
                {
                    name: "Black pepper",
                    amount: 0,
                    type: ''
                },
                {
                    name: "Cilantro, chopped",
                    amount: 0.25,
                    type: 'cup'
                }

            ],
            method: [
                {
                    step: 1,
                    desc: "In a large skillet over medium-high heat, heat oil. Add carrots, bell pepper, onion, and garlic, and cook, stirring frequently, until onions have become translucent, about 5 minutes. Add rice and tomato paste and cook, stirring, until grains are toasted, 2 to 3 minutes."
                },
                {
                    step: 2,
                    desc: "Pour in broth, diced tomatoes, and tomato sauce and season with cumin, oregano, 1 teaspoon salt, and ½ teaspoon pepper. Bring to a boil. Cover and reduce heat to low."
                },
                {
                    step: 3,
                    desc: "Simmer until rice is cooked through and liquid is absorbed, stirring occasionally, about 17 minutes."
                },
                {
                    step: 4,
                    desc: "Stir in cilantro before serving."
                }
            ]
        }
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [showFavs, setShowFavs] = useState(false);

    const searchRecipes = (newSearchTerm) => {
        setSearchTerm(newSearchTerm);
    }

    useEffect(() => {
        const results = !searchTerm ?
            recipes :
            recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()));
        setSearchResults(showFavs ? results.filter(recipe => recipe.favourite === showFavs) : results);
    }, [searchTerm, recipes, showFavs]);

    const showFavsFunc = () => {
        setShowFavs(!showFavs);
    }

    const switchFav = (id) => {
        setRecipes(recipes.map(recipe => recipe.id === id ? { ...recipe, favourite: !recipe.favourite } : recipe));
    }

    const deleteRecipe = (id) => {
        setRecipes(recipes.filter(recipe => recipe.id !== id))
    }

    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <SearchFormComponent searchRecipes={searchRecipes} showFavsClick={showFavsFunc} />
                        <RecipesListComponent recipes={searchResults} switchFav={switchFav} deleteRecipe={deleteRecipe} />
                    </Route>
                </Switch>
            </Router>
        </div>

    );
}

export default App;
