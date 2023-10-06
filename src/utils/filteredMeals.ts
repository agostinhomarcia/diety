import { MealStorageDTO } from "@storage/meals/MealStorageDTO";

export function filteredMeals(mealsList: MealStorageDTO[]) {
  const filteredMealsDates = [
    ...new Set(
      mealsList.map(({ date }) =>
        date.split("/").reverse().join().replaceAll(",", "")
      )
    ),
  ].sort();

  const meals = filteredMealsDates.map((date) => {
    return {
      date,
      data: mealsList
        .filter((meal) => {
          const mealDate = meal.date
            .split("/")
            .reverse()
            .join()
            .replaceAll(",", "");

          return mealDate.includes(date);
        })
        .sort((a, b) => {
          if (a.hour > b.hour) {
            return 1;
          }
          if (a.hour < b.hour) {
            return -1;
          }
          return 0;
        }),
    };
  });

  return meals;
}
