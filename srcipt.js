async function getRandomMeal(){
   const resp = await fetch("www.themealdb.com/api/json/v1/1/random.php")

   const resposeData = await resp.json()
   const randomMeals = resposeData.meals[0]
}

async function getMealById(id){
   const meal = await fetch("www.themealdb.com/api/json/v1/1/lookup.php?i=52772" + id)
}

async function getMealBySearch(term){
   const meals = await fetch("www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata" + term)
}