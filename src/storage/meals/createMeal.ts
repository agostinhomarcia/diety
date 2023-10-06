import AsyncStorage from "@react-native-async-storage/async-storage";

import { getlAllMeals } from "./getAllMeals";

import { MealStorageDTO } from "./MealStorageDTO";
import { MEAL_LIST } from "@storage/storageConfig";

export async function createMeal(meal: MealStorageDTO) {
  try {
    const storageMeals = await getlAllMeals();

    await AsyncStorage.setItem(
      MEAL_LIST,
      JSON.stringify([...storageMeals, meal])
    );
  } catch (error) {
    throw error;
  }
}
