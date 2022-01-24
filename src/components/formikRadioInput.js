import React from "react"
import { useField } from "formik"
import withStep from "../components/Onboarding/StepContext/withStep"

const MyRadio = ({
  children,
  htmlFor,
  prevStep,
  nextStep,
  handleChange,
  ...props
}) => {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify type to useField(), it will
  // return the correct bag of props for you -- a checked prop will be included
  // in field alongside name, value, onChange, and onBlur
  const [field] = useField({ ...props, type: "radio" })

  const handleClick = () => {
    nextStep()
  }

  return (
    <label className="radio-input" htmlFor={htmlFor}>
      <input
        type="radio"
        {...field}
        onClick={handleClick}
        onChange={handleChange}
        {...props}
      />
      <div className="input-box">{children}</div>
    </label>
  )
}

export default withStep(MyRadio)
