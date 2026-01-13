import { useEffect, useState } from "react";

function Home() {
    const [data, setData] = useState([]);

    async function getRecipes(category) {
        try {
            if (category === "Dessert") {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert`);
                const jsonData = await response.json();
                setData(jsonData.meals || []);
            } else {
                // FETCHING 3 DIFFERENT COFFEE-SPECIFIC LISTS
                const [res1, res2, res3] = await Promise.all([
                    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=coffee`), // Name search
                    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Coffee_/_Tea`), // Category filter
                    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=coffee`) // Ingredient filter
                ]);

                const data1 = await res1.json();
                const data2 = await res2.json();
                const data3 = await res3.json();

                // MERGE ALL THREE LISTS
                const combined = [
                    ...(data1.drinks || []), 
                    ...(data2.drinks || []), 
                    ...(data3.drinks || [])
                ];
                console.log(combined)

                // DEDUPLICATE: Remove items with the same idDrink
                const uniqueDrinks = Array.from(
                    new Map(combined.map(item => [item.idDrink, item])).values()
                );

                console.log(`--- Total Unique Coffee Found: ${uniqueDrinks.length} ---`);
                setData(uniqueDrinks);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        getRecipes("Dessert");
    }, []);

    return (
        <div style={{ textAlign: "center", padding: "20px", fontFamily: "sans-serif" }}>
            <div style={{ marginBottom: "30px" }}>
                <button 
                    onClick={() => getRecipes("Dessert")}
                    style={{ margin: "0 10px", padding: "10px 20px", cursor: "pointer" }}
                >
                    Desserts (MealDB)
                </button>
                <button 
                    onClick={() => getRecipes("Coffee")}
                    style={{ margin: "0 10px", padding: "10px 20px", cursor: "pointer" }}
                >
                    Max Coffee (CocktailDB)
                </button>
            </div>

            <div style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", 
                gap: "20px" 
            }}>
                {data.map((item, index) => (
                    <div key={item.idMeal || item.idDrink || index} style={{ border: "1px solid #eee", borderRadius: "10px", overflow: "hidden" }}>
                        <img 
                            src={item.strMealThumb || item.strDrinkThumb} 
                            alt="recipe" 
                            style={{ width: "100%", height: "180px", objectFit: "cover" }}
                            onError={(e) => {
                                e.target.onerror = null; 
                                e.target.src = "https://placehold.co/400x400?text=No+Image";
                            }}
                        />
                        <div style={{ padding: "10px" }}>
                            <p style={{ fontWeight: "bold", fontSize: "14px" }}>
                                {item.strMeal || item.strDrink}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;