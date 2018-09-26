import { Platform } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'

import CounterViewContainer from '../counter/CounterViewContainer'
import ColorViewContainer from '../colors/ColorViewContainer'
import CalcViewContainer from '../calc/CalcViewContainer'

const headerColor = 'green'//'#39babd'
const activeColor = 'white'

// TabNavigator is nested inside StackNavigator
export const MainScreenNavigator = TabNavigator(
  {
    Counter: { screen: CounterViewContainer },
    Color: { screen: ColorViewContainer },
    Calc:{screen: CalcViewContainer}
  },
  {
    tabBarOptions: {
      ...Platform.select({
        android: {
          activeTintColor: activeColor,
          indicatorStyle: { backgroundColor: activeColor },
          style: { backgroundColor: headerColor }
        }
      })
    }
  }
)

MainScreenNavigator.navigationOptions = {
  title: 'Super Calculator',
  headerTitleStyle: { color: 'white' },
  headerStyle: {
    backgroundColor: headerColor,
    elevation: 0 // disable header elevation when TabNavigator visible
  }
}

// Root navigator is a StackNavigator
const AppNavigator = StackNavigator({
  Home: { screen: CalcViewContainer },
  //InfiniteColorStack: { screen: ColorViewContainer }
})

export default AppNavigator
