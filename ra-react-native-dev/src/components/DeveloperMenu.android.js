import React, { Component } from 'react'
import * as snapshot from '../utils/snapshot'

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

/**
 * Simple developer menu, which allows e.g. to clear the app state.
 * It can be accessed through a tiny button in the bottom right corner of the screen.
 * ONLY FOR DEVELOPMENT MODE!
 */
class DeveloperMenu extends Component {
  constructor (props) {
    super(props)
    this.state = { visible: false }
    this.showDeveloperMenu = this.showDeveloperMenu.bind(this)
    this.clearState = this.clearState.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
    this.renderMenuItem = this.renderMenuItem.bind(this)
  }

  showDeveloperMenu () {
    this.setState({ isVisible: true })
  }

  clearState () {
    return async () => {
      await snapshot.clearSnapshot()
      console.warn(
        '(╯°□°）╯︵ ┻━┻ \nState cleared, Cmd+R to reload the application now'
      )
      this.closeMenu()
    }
  }

  closeMenu () {
    this.setState({ isVisible: false })
  }

  renderMenuItem (text, onPress) {
    return (
      <TouchableOpacity key={text} onPress={onPress} style={styles.menuItem}>
        <Text style={styles.menuItemText}>{text}</Text>
      </TouchableOpacity>
    )
  }

  render () {
    if (!__DEV__) {
      return null
    }

    if (!this.state.isVisible) {
      return (
        <TouchableOpacity
          style={styles.circle}
          onPress={this.showDeveloperMenu}
        />
      )
    }

    const buttons = [
      this.renderMenuItem('Clear state', this.clearState),
      this.renderMenuItem('Cancel', this.closeMenu)
    ]

    return <View style={styles.menu}>{buttons}</View>
  }
}

DeveloperMenu.displayName = 'DeveloperMenu'

const styles = StyleSheet.create({
  circle: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#fff'
  },
  menu: {
    backgroundColor: 'white',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  },
  menuItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    padding: 10,
    height: 60
  },
  menuItemText: {
    fontSize: 20
  }
})

export default DeveloperMenu
