import React, { Component } from "react"
import PropTypes from "prop-types"
import { Provider } from "./StepContext"

class StepProvider extends Component {
  static propTypes = {
    currentStep: PropTypes.number.isRequired,
    prevStep: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
    handleChange: PropTypes.func,
    children: PropTypes.node.isRequired,
  }

  render() {
    const { currentStep, prevStep, nextStep, handleChange } = this.props

    const providedValue = {
      currentStep,
      prevStep,
      nextStep,
      handleChange,
    }
    return <Provider value={providedValue}>{this.props.children}</Provider>
  }
}

export default StepProvider
