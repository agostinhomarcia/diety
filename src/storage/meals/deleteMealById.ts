import AsyncStorage from "@react-native-async-storage/async-storage";
import { getlAllMeals } from "./getAllMeals";
import { MEAL_LIST } from "@storage/storageConfig";

export async function deleteMealById(id: string) {
  try {
    const mealsStored = await getlAllMeals();

    const filteredMeals = mealsStored.filter((meal) => !meal.id.includes(id));

    AsyncStorage.setItem(MEAL_LIST, JSON.stringify(filteredMeals));
  } catch (error) {
    throw error;
  }
}
