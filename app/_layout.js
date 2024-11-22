import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Hello from './hello.js';
import MyLanguages from './myLanguages.js';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={Hello}
                />
                <Tab.Screen
                    name="languages"
                    component={MyLanguages}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
