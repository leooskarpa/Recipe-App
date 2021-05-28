import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/Header';
import RecipesListComponent from './components/RecipesListComponent';
import SearchFormComponent from './components/searchFormComponent'
import EditRecipe from './components/EditRecipe'
import Login from './components/Login'

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
                    id: 1,
                    name: "Chicken breasts",
                    amount: 2,
                    type: 'lbs'
                },
                {
                    id: 2,
                    name: "Salt",
                    amount: 2.5,
                    type: 'tsp'
                },
                {
                    id: 3,
                    name: "Pepper",
                    amount: 0.5,
                    type: 'tsp'
                },
                {
                    id: 4,
                    name: "Flour",
                    amount: 1,
                    type: 'cup'
                },
                {
                    id: 5,
                    name: "Butter, cut in pieces",
                    amount: 10,
                    type: 'tbsp'
                },
                {
                    id: 6,
                    name: "Olive oil",
                    amount: 4,
                    type: 'tbsp'
                },
                {
                    id: 7,
                    name: "Shallot, minced",
                    amount: 1,
                    type: ''
                },
                {
                    id: 8,
                    name: "Garlic, minced",
                    amount: 1,
                    type: ''
                },
                {
                    id: 9,
                    name: "Chicken stock",
                    amount: 1.5,
                    type: 'cup'
                },
                {
                    id: 10,
                    name: "Lemon, juiced",
                    amount: 1,
                    type: ''
                },
                {
                    id: 11,
                    name: "Lemon zest",
                    amount: 2,
                    type: 'tsp'
                },
                {
                    id: 12,
                    name: "Capers, drained",
                    amount: 2,
                    type: 'tbsp'
                }
            ],
            method: [
                {
                    id: 1,
                    step: 1,
                    desc: "Season the chicken with 2 teaspoons salt and pepper on both sides. Place the flour on a plate. Dredge the chicken in the flour and shake off any excess. Discard the flour when finished dredging."
                },
                {
                    id: 2,
                    step: 2,
                    desc: "Heat 3 tablespoons butter and 2 tablespoons oil in a large skillet set over medium-high until the butter has melted."
                },
                {
                    id: 3,
                    step: 3,
                    desc: "Working in batches, taking care not to crowd the pan, add half of the chicken and sauté until golden brown, about 2.5 - 3 minutes per side, until cooked through. Set the chicken aside on a plate when they finish cooking."
                },
                {
                    id: 4,
                    step: 4,
                    desc: "Add 3 more tablespoons of butter and 2 more tablespoons of olive oil and finish cooking the 2nd batch of chicken."
                },
                {
                    id: 5,
                    step: 5,
                    desc: "Add the shallot to the pan drippings and sauté until soft and fragrant, about 1 minute. Add garlic and saute for 1 minute longer."
                },
                {
                    id: 6,
                    step: 6,
                    desc: "Add the stock and simmer until reduced by half, about 4-5 minutes."
                },
                {
                    id: 7,
                    step: 7,
                    desc: "Reduce heat to low, then stir in the remaining 4 tablespoons butter, capers, lemon juice, and zest to taste. Season with remaining half teaspoon of salt. Garnish with parsley if using."
                },
                {
                    id: 8,
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
                    id: 1,
                    name: "Extra-virgin olive oil",
                    amount: 3,
                    type: 'tbsp'
                },
                {
                    id: 2,
                    name: "Carrots, diced",
                    amount: 2,
                    type: ''
                },
                {
                    id: 3,
                    name: "Small green bell pepper, diced",
                    amount: 1,
                    type: ''
                },
                {
                    id: 4,
                    name: "Small onion, chopped",
                    amount: 1,
                    type: ''
                },
                {
                    id: 5,
                    name: "Garlic cloves, thinly sliced",
                    amount: 3,
                    type: ''
                },
                {
                    id: 6,
                    name: "Long-grain rice",
                    amount: 2,
                    type: 'cup'
                },
                {
                    id: 7,
                    name: "Tomato paste",
                    amount: 1,
                    type: 'tbsp'
                },
                {
                    id: 8,
                    name: "Low-sodium chicken broth",
                    amount: 2.5,
                    type: 'cup'
                },
                {
                    id: 9,
                    name: "Fire-roasted diced tomatoes",
                    amount: 14,
                    type: 'oz'
                },
                {
                    id: 10,
                    name: "Tomato sauce",
                    amount: 8,
                    type: 'oz'
                },
                {
                    id: 11,
                    name: "Ground cumin",
                    amount: 0.75,
                    type: 'tsp'
                },
                {
                    id: 12,
                    name: "Dried oregano",
                    amount: 0.5,
                    type: 'tsp'
                },
                {
                    id: 13,
                    name: "Kosher salt",
                    amount: 0,
                    type: ''
                },
                {
                    id: 14,
                    name: "Black pepper",
                    amount: 0,
                    type: ''
                },
                {
                    id: 15,
                    name: "Cilantro, chopped",
                    amount: 0.25,
                    type: 'cup'
                }

            ],
            method: [
                {
                    id: 1,
                    step: 1,
                    desc: "In a large skillet over medium-high heat, heat oil. Add carrots, bell pepper, onion, and garlic, and cook, stirring frequently, until onions have become translucent, about 5 minutes. Add rice and tomato paste and cook, stirring, until grains are toasted, 2 to 3 minutes."
                },
                {
                    id: 2,
                    step: 2,
                    desc: "Pour in broth, diced tomatoes, and tomato sauce and season with cumin, oregano, 1 teaspoon salt, and ½ teaspoon pepper. Bring to a boil. Cover and reduce heat to low."
                },
                {
                    id: 3,
                    step: 3,
                    desc: "Simmer until rice is cooked through and liquid is absorbed, stirring occasionally, about 17 minutes."
                },
                {
                    id: 4,
                    step: 4,
                    desc: "Stir in cilantro before serving."
                }
            ]
        }
    ]);

    const [loged, setLoged] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [showFavs, setShowFavs] = useState(false);
    const [editRecipeId, setEditRecipeId] = useState(0);
    const [addNewRecipeId, setAddNewRecipeId] = useState(0);
    const newRecipeTemplate = {
        id: recipes.length + 1,
        name: "",
        pictureUrl: "",
        favourite: false,
        prep: "",
        cook: "",
        servings: "",
        difficulty: "",
        briefDesc: "",
        ingredients: [{
            id: 1,
            name: "",
            amount: "",
            type: ""
        }],
        method: [{
            id: 1,
            step: 1,
            desc: ""
        }]
    };

    const isLoged = () => {
        setLoged(!loged);
    }

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

    const addNewRecipe = () => {
        setAddNewRecipeId(recipes.length + 1);
    }

    const cancelAdd = () => {
        setAddNewRecipeId(0);
    }

    const switchFav = (id) => {
        setRecipes(recipes.map(recipe => recipe.id === id ? { ...recipe, favourite: !recipe.favourite } : recipe));
    }

    const deleteRecipe = (id) => {
        setRecipes(recipes.filter(recipe => recipe.id !== id))
    }

    const editRecipe = (id) => {
        setEditRecipeId(id);
    }

    const changeRecipe = (id, newRecipe) => {
        setEditRecipeId(0);
        setRecipes(recipes.map(recipe => recipe.id === id ? newRecipe : recipe))
    }

    const cancelEdit = () => {
        setEditRecipeId(0);
    }

    return (
        <div className="App">
            <Router>
                <Header loged={loged} logOut={() => setLoged(!loged)} />
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/login" />
                    </Route>
                    <Route exact path="/login">
                        <Login isLoged={isLoged} />
                    </Route>
                    <Route exact path="/home">
                        <SearchFormComponent
                            searchRecipes={searchRecipes}
                            showFavsClick={showFavsFunc}
                            addNewRecipeFunc={addNewRecipe}
                            cancelNewRecipeFunc={cancelAdd} />

                        {addNewRecipeId ?
                            <EditRecipe
                                recipe={newRecipeTemplate}
                                changeRecipe={changeRecipe}
                                cancelChanges={cancelAdd} /> :
                            null
                        }

                        {(editRecipeId && !addNewRecipeId) ?
                            <EditRecipe
                                recipe={recipes.filter(recipe => recipe.id === editRecipeId)[0]}
                                changeRecipe={changeRecipe}
                                cancelChanges={cancelEdit} /> :
                            <RecipesListComponent
                                recipes={searchResults}
                                switchFav={switchFav}
                                deleteRecipe={deleteRecipe}
                                editRecipe={editRecipe} />
                        }
                    </Route>
                </Switch>
            </Router>
        </div>

    );
}

export default App;
