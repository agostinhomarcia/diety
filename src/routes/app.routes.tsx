import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/home";
import { EditMeal } from "@screens/editMeal";
import { MealDetails } from "@screens/mealDetails";
import { Feedback } from "@screens/feedback";
import { NewMeal } from "@screens/newMeal";
import { Statistics } from "@screens/statistics";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="newMeal" component={NewMeal} />
      <Screen name="feedback" component={Feedback} />
      <Screen name="mealDetails" component={MealDetails} />
      <Screen name="editMeal" component={EditMeal} />
    </Navigator>
  );
}
