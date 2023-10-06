import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_LIST } from "@storage/storageConfig";
import { MealStorageDTO } from "./MealStorageDTO";

export async function getlAllMeals() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_LIST);
    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : [];
    return meals;
  } catch (error) {
    throw error;
  }
}
