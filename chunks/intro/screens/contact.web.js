import React from 'react'
import { Screen } from 'react-dom-chunky'
import * as CustomComponents from '../components'

export default class ContactScreen extends Screen {
  constructor(props) {
    super(props)
    this.state = { ...this.state }
  }

  componentDidMount() {
    super.componentDidMount()
  }

  loadCustomComponent(props) {
    return props => {
      const CustomComponent = CustomComponents[props.source]
      return <CustomComponent {...props} />
    }
  }

  components() {
    return super.components().concat([])
  }
}
