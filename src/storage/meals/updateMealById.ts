import AsyncStorage from "@react-native-async-storage/async-storage";
import { getlAllMeals } from "./getAllMeals";

import { MealStorageDTO } from "./MealStorageDTO";
import { MEAL_LIST } from "@storage/storageConfig";

export async function updateMealById(
  mealId: string,
  updatedMeal: MealStorageDTO
) {
  const mealsStored = await getlAllMeals();

  const filteredMeal = mealsStored.map((meal) => {
    if (meal.id === mealId) {
      return {
        ...updatedMeal,
      };
    }

    return meal;
  });


  AsyncStorage.setItem(MEAL_LIST, JSON.stringify(filteredMeal));
}
