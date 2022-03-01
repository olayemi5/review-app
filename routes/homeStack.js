import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation"
import Home from '../screens/home'
import ReviewDetails  from "../screens/reviewDetails";

const screen = {
    Home: {
        screen: Home
    },
    ReviewDetails: {
        screen: ReviewDetails
    }
}

const HomeStack = createStackNavigator(screen);

export default createAppContainer(HomeStack);