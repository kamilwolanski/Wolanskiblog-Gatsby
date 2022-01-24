import React, { useState } from "react"
// import { AboutMeWrapper } from "../components/about-me.styles"
import { Row, Col } from "reactstrap"
import Main from "../components/organisms/Main/Main"
import { ThemeProvider } from "styled-components"
import { Formik, Form } from "formik"
import { theme } from "../styles/theme"
import { GlobalStyles } from "../styles/globalStyles"
import Layout from "../components/templates/Layout"
import Head from "../components/Head"
import Radio from "../components/formikRadioInput"
import StepProvider from "../components/Onboarding/StepContext/StepProvider"

const Step1 = () => {
  return (
    <div id="1">
      <h2 className="heading-1 mb-0">
        <strong>Rozwiąż krótki test</strong>
      </h2>
      <p className="position-relative d-inline-block">
        otrzymaj spersonalizowany jadłospis i plan treningów
      </p>

      <Row>
        <Col md={{ size: 10, offset: 1 }} lg={{ size: 6, offset: 3 }}>
          <h4 className="mt-4">Wybierz płeć:</h4>
          <Row noGutters>
            <Col className="pr-2">
              <Radio name="sex" value="female" id="female" htmlFor="female">
                <div className="text-center py-2">
                  <br />
                  Kobieta
                </div>
              </Radio>
            </Col>
            <Col className="pl-2">
              <Radio name="sex" value="male" id="male" htmlFor="male">
                <div className="text-center py-2">
                  <br />
                  Mężczyzna
                </div>
              </Radio>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

const Step2 = () => {
  return (
    <div id="2">
      <h4 className="mb-4">Wybierz swój cel:</h4>
      <Row>
        <Col md={{ size: 10, offset: 1 }} lg={{ size: 6, offset: 3 }}>
          <Radio name="goal" value="slimming">
            Zmniejszenie masy ciała
          </Radio>

          <Radio name="goal" value="stabilization">
            Utrzymanie masy ciała
          </Radio>

          <Radio name="goal" value="put-on-weight">
            Zwiększenie masy ciała
          </Radio>
        </Col>
      </Row>
    </div>
  )
}

const Step3 = () => {
  return (
    <div id="3">
      <h4>
        Ile dni w tygodniu
        <br />
        ćwiczysz?
      </h4>
      <Row className="align-items-center">
        <Col xs="6" md={{ size: 6, offset: 1 }} lg={{ size: 5, offset: 2 }}>
          <Radio name="activity" value="none">
            Ćwiczę rzadziej niż <br />1 dzień w tygodniu
          </Radio>

          <Radio name="activity" value="low">
            Ćwiczę 1-3 dni <br />w tygodniu
          </Radio>

          <Radio name="activity" value="medium">
            Ćwiczę 4-5 dni <br />w tygodniu
          </Radio>

          <Radio name="activity" value="high">
            Ćwiczę 6-7 dni <br />w tygodniu
          </Radio>
        </Col>
        <Col xs="6" md={{ size: 4 }} lg={{ size: 3 }}></Col>
      </Row>
    </div>
  )
}

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0)

  const handleNext = () => {
    setCurrentStep(currentStep + 1)
  }

  const handlePrev = () => {
      setCurrentStep(currentStep - 1)
  }

  const renderStep = step => {
    switch (step) {
      case 0:
        return <Step1 />
      case 1:
        return <Step2 />
      case 2:
        return <Step3 />
    }
  }
  return (
    <>
      <Head
        title="O Mnie"
        description="Hej! Nazywam się Kamil Wolański i zamierzam zostać programistą.
                Moim głównym zainteresowaniem są technologie webowe na ścieżce
                frontendu, a używaną biblioteką React JS."
      />
      <ThemeProvider theme={theme}>
        <StepProvider nextStep={handleNext} currentStep={currentStep}>
          <GlobalStyles />
          <Layout>
            <Main>
              <h1>SIEMA</h1>
              <button onClick={handlePrev}>prev</button>
              <Formik
                initialValues={{
                  sex: "",
                  goal: "",
                }}
              >
                <Form>{renderStep(currentStep)}</Form>
              </Formik>
            </Main>
          </Layout>
        </StepProvider>
      </ThemeProvider>
    </>
  )
}

export default Onboarding
