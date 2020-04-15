//Navigation/Navigation.js
import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import {StyleSheet,Image} from 'react-native'
import ReportingList from '../Components/ReportingList'
import Report from '../Components/Report'
import DetailReport from '../Components/DetailReport'
import Accueil from '../Components/Accueil'
import Idees from '../Components/Idees'
import IdeesList from '../Components/IdeesList'
import DetailIdee from '../Components/DetailIdee'
import PDFExample from '../Components/PDFExample'

const ReportStackNavigator = createStackNavigator ({
  ReportingList:{
    screen: ReportingList,
    navigationOptions: {
      headerShown:false,
    }
  },
  DetailReport: {
    screen:DetailReport,
    navigationOptions:{
      title:''
    }
  }
})
const IdeesStackNavigator = createStackNavigator ({
  IdeesList:{
    screen: IdeesList,
    navigationOptions: {
      headerShown:false,
    }
  },
  DetailIdee: {
    screen:DetailIdee,
    navigationOptions:{
      title:''
    }
  }
})

const ReportTabNavigator = createBottomTabNavigator({
  Saisie: {
    screen: Report,
    navigationOptions:{
    }
  },
  Liste: {
    screen: ReportStackNavigator,
    navigationOptions:{
    }
  }
},
  {
    tabBarOptions: {
     labelStyle:{
       fontSize:20,
    },
     showLabel: true,
     showIcon: false
   }
  }
)

const IdeesTabNavigator = createBottomTabNavigator({
  Saisie: {
    screen: Idees,
    navigationOptions:{
    }
  },
  Liste: {
    screen: IdeesStackNavigator,
    navigationOptions:{
    }
  }
},
  {
    tabBarOptions: {
     labelStyle:{
       fontSize:20,
    },
     showLabel: true,
     showIcon: false
   }
  }
)

const AccueilStackNavigator = createStackNavigator ({
  Accueil:{
    screen: Accueil,
    navigationOptions: {
      headerShown:false,
    }
  },
  Report: {
    screen:ReportTabNavigator,
    navigationOptions:{
      headerShown:false,
      title:''
    }
  },
    Idees: {
      screen:IdeesTabNavigator,
      navigationOptions:{
        headerShown:false,
        title:''
      }
    },
      PDFExample: {
        screen:PDFExample,
        navigationOptions:{
          headerShown:false,
          title:''
        }
      }

})

//export default createAppContainer(IdeesTabNavigator)
export default createAppContainer(AccueilStackNavigator)
