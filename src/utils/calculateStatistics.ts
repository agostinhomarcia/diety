import { MealStorageDTO } from "@storage/meals/MealStorageDTO";

export function calculateNumberOfMeals(mealsList: MealStorageDTO[]) {
  let bestSequenceMealsCount = 0;

  const numberOfMeals = mealsList.reduce(
    (acc, meal) => {
      if (meal.isOnTheDiet) {
        acc.onTheDiet++;
        bestSequenceMealsCount++;

        if (bestSequenceMealsCount > acc.bestSequenceMeals) {
          acc.bestSequenceMeals = bestSequenceMealsCount;
        }
      } else {
        acc.offTheDiet++;
        bestSequenceMealsCount = 0;
      }

      acc.totalMeals += 1;

      return acc;
    },
    {
      onTheDiet: 0,
      offTheDiet: 0,
      bestSequenceMeals: 0,
      totalMeals: 0,
    }
  );

  return numberOfMeals;
}

export function calculatePercentage(mealsList: MealStorageDTO[]) {
  const { onTheDiet, totalMeals } = calculateNumberOfMeals(mealsList);

  const percentage = (onTheDiet * 100) / totalMeals;

  return percentage;
}
