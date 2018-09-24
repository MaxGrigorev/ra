import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableOpacity, Image, Text, View } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'



class CalcView extends Component {
  constructor (props) {
    super(props)
    this.reset = this.reset.bind(this)
    this.renderUserInfo = this.renderUserInfo.bind(this)

    this.state={
      op1:'',
      op:'+',
    }
  }

  reset () {
    this.props.calcStateActions.reset()
  }

  calcButtClearHandler=(textVal)=>{
    this.setState({op:'+',op1:''})
    this.props.calcStateActions.reset()
    console.log('calcButtClearHandler')
    
  }

  calcButtRavnoHandler=(textVal)=>{
    if (this.state.op1!==''){
      let textCalcString=this.props.calc+' '+this.state.op+' '+this.state.op1
      this.props.calcStateActions.calc(textCalcString)
      this.setState({op:'+',op1:''})
    }
  }

  calcButtCmdHandler=(textVal)=>{
    if (this.state.op1=='' || this.state.op==''){
      this.setState({op:textVal,})
    }
    if (this.state.op1!==''){
      let textCalcString=this.props.calc+' '+this.state.op+' '+this.state.op1
      this.props.calcStateActions.calc(textCalcString)
      this.setState({op:textVal,op1:''})
    }
  }

  calcButt0Handler=(textVal)=>{
    if (this.state.op1!==''){
      let val=this.state.op1+textVal
      this.setState({op1:val,})
    }
  }

  calcButtHandler=(textVal)=>{
    let val=this.state.op1+textVal
    this.setState({op1:val,})
  }

  calcButt (textVal='',handlerPress=f=>f,colorTouchBackground='#DFDFDF',colorText='black') {
    return (
      <TouchableOpacity style={{flex:1,justifyContent: 'center',alignItems: 'center',borderColor:'white',borderWidth:1,backgroundColor:colorTouchBackground}}
        onPress={handlerPress.bind(this,textVal)}
        >
          <Text 
            style={{fontSize:20,color:colorText,}}
            >
            {textVal}
          </Text>
      </TouchableOpacity>
    )
  }

  renderUserInfo () {
    if (!this.props.userName) {
      return null
    }

    return (
      <View style={styles.userContainer}>
        <Image
          style={styles.userProfilePhoto}
          source={{
            uri: this.props.userProfilePhoto,
            width: 80,
            height: 80
          }}
        />
        <Text style={styles.linkButton}>Welcome, {this.props.userName}!</Text>
      </View>
    )
  }
  
  render () {
    const loadingStyle = this.props.loading ? { backgroundColor: '#eee' } : null

    return (
      <View style={styles.container}>
        {this.renderUserInfo()}
        <View style={{flex:3,flexDirection:'row',}}>
          <Text style={{flex:1,textAlign:'center',textAlignVertical:'center',fontSize:30}}>{this.state.op} </Text>
          <View style={{flex:10,flexDirection:'column',borderColor:'white',borderWidth:0}}>
            <Text style={{flex:1,textAlign:'right',fontSize:30}}>{this.props.calc}</Text>
            <Text style={{flex:1,textAlign:'right',fontSize:45}}>{this.state.op1}</Text>
          </View>
        </View>
        <View style={{flex:12,flexDirection:'row',borderColor:'white',borderWidth:1}}>
          <View style={{flex:3,flexDirection:'column',}}>
              {this.calcButt('CLEAR',this.calcButtClearHandler,'green','white')}
            <View style={{flex:1,flexDirection:'row',}}>
              {this.calcButt('7',this.calcButtHandler)}
              {this.calcButt('8',this.calcButtHandler)}
              {this.calcButt('9',this.calcButtHandler)}
            </View>
            <View style={{flex:1,flexDirection:'row',}}>
              {this.calcButt('4',this.calcButtHandler)}
              {this.calcButt('5',this.calcButtHandler)}
              {this.calcButt('6',this.calcButtHandler)}
            </View>
            <View style={{flex:1,flexDirection:'row',}}>
              {this.calcButt('1',this.calcButtHandler)}
              {this.calcButt('2',this.calcButtHandler)}
              {this.calcButt('3',this.calcButtHandler)}
            </View>
            <View style={{flex:1,flexDirection:'row',}}>
              {this.calcButt('0',this.calcButtHandler)}
              {this.calcButt('00',this.calcButt0Handler)}
              {this.calcButt('.',this.calcButt0Handler)}
            </View>
          </View>
          <View style={{flex:1,flexDirection:'column',}}>
            {this.calcButt('/',this.calcButtCmdHandler,'green','white')}
            {this.calcButt('*',this.calcButtCmdHandler,'green','white')}
            {this.calcButt('-',this.calcButtCmdHandler,'green','white')}
            {this.calcButt('+',this.calcButtCmdHandler,'green','white')}
            {this.calcButt('=',this.calcButtRavnoHandler,'green','white')}
          </View>
        </View>
      </View>
    )
  }
}

CalcView.displayName = 'CalcView'
CalcView.navigationOptions = {
  title: 'Super Calculator',
  // TODO: move this into global config?
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: 'green'
  }
}
CalcView.propTypes = {
  calc: PropTypes.string,
  userName: PropTypes.string,
  userProfilePhoto: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  calcStateActions: PropTypes.shape({
    reset: PropTypes.func.isRequired,
    calc: PropTypes.func.isRequired
  }).isRequired,
  navigate: PropTypes.func.isRequired
}

const circle = {
  borderWidth: 0,
  borderRadius: 40,
  width: 80,
  height: 80
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  userContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  userProfilePhoto: {
    ...circle,
    alignSelf: 'center'
  },
  linkButton: {
    textAlign: 'center',
    color: '#CCCCCC',
    marginBottom: 10,
    padding: 5
  }
})


export default CalcView
