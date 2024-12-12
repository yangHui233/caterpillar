import React from 'react'
import FirstComponent from 'process.env.platformDef.index.FirstComp.path'
import SecondComponent from 'process.env.platformDef.index.SecondComp.path'
export default class Index extends React.Component {
  render() {
    return (
      <div>
        This is Home Page
        <br />
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
      </div>
    )
  }
}
