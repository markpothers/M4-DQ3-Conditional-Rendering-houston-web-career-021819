import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state={
    profile: 'item active',
    photo: 'item',
    cocktail:'item',
    pokemon: 'item'
  }

  updateActive = (item) => {
      this.setState({
        profile: 'item',
        photo: 'item',
        cocktail: 'item',
        pokemon: 'item'
      })
    this.setState({[item]: 'item active'})
  }

  findActive = () => {
    switch ('item active'){
      case this.state.profile: return <Profile />
      case this.state.photo: return <Photos />
      case this.state.cocktail: return <Cocktails />
      case this.state.pokemon: return <Pokemon />
    }
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    return (
      <div>
        <MenuBar {...this.state} updateActive={this.updateActive}/>
        {this.findActive()}
      </div>
    )
  }

}

export default MainBox
