import React, { Component } from 'react'
class Tabs extends React.Component {
  state = { 
    tabs: [],
    currentTab : null
   };
   componentDidMount = () => {
     this.setState({
       tabs : this.props.tabs
     })
   }
   renderSection = () => {
    if( this.state.currentTab !== null ){
      return this.state.tabs[this.state.currentTab].content ;
    }
    else{
      return "No tab selected yet!";
    }
   }
   handleClick = ( event, index ) => {
    this.setState({
      currentTab: index
    });
   }
  render() {
    const buttons = this.props.tabs.map((tab, index) => (
      <button key={index} onClick={(event) => this.handleClick( event, index )}>
        {tab.name}
      </button>
    ))
    return (
      <div>
        <div>
          {buttons}
        </div>
        <div>
          {this.renderSection()}
        </div>
      </div>
    )
  }
}
export default Tabs;