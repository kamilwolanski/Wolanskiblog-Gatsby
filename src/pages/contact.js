import React from "react"
import Button from "../components/atoms/Button/Button"
import { ContactWrapper } from "../components/contact.styles"
import { useContact } from "../hooks/useContact"
import Notafication from "../components/atoms/Notafication/Notafication"
import { InputStyled } from "../components/atoms/Input/Input.styles"
import { ThemeProvider } from "styled-components"
import { theme } from "../styles/theme"
import { GlobalStyles } from "../styles/globalStyles"
import Layout from "../components/templates/Layout"
import Head from "../components/Head"

const Contact = () => {
  const {
    values,
    handleChange,
    sendEmail,
    setIsSubmitted,
    isSubmitting,
    errors,
    isSubmitted,
  } = useContact()

  const renderNotafication = () => {
    if (isSubmitted === true) {
      return (
        <Notafication setIsSubmitted={setIsSubmitted} isSubmitted={isSubmitted}>
          wysłano wiadomość
        </Notafication>
      )
    } else if (isSubmitted === false) {
      return (
        <Notafication setIsSubmitted={setIsSubmitted} isSubmitted={isSubmitted}>
          coś poszło nie tak
        </Notafication>
      )
    } else {
      return (
        <Notafication
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
        ></Notafication>
      )
    }
  }
  return (
    <>
      <Head
        title="Kontakt"
        description="Masz jakieś zapytanie, sugestię, a może chcesz dowiedzieć się
                więcej o moich projektach? Śmiało napisz do mnie!"
      />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <ContactWrapper>
            <div className="description">
              <h2>NAPISZ DO MNIE!</h2>
              <p>
                Masz jakieś zapytanie, sugestię, a może chcesz dowiedzieć się
                więcej o moich projektach? Śmiało napisz do mnie!
              </p>
            </div>

            <form className="contact-form" onSubmit={sendEmail}>
              <input type="hidden" name="contact_number" />
              <label htmlFor="name">Imię</label>
              <InputStyled
                id="name"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              {errors.name ? (
                <p className="error">{errors.name}</p>
              ) : (
                <p className="error" style={{ opacity: "0" }}>
                  z
                </p>
              )}
              <label htmlFor="email">Email</label>
              <InputStyled
                id="email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email ? (
                <p className="error">{errors.email}</p>
              ) : (
                <p className="error" style={{ opacity: "0" }}>
                  z
                </p>
              )}
              <label htmlFor="subject">Temat</label>
              <InputStyled
                id="subject"
                type="text"
                name="subject"
                value={values.subject}
                onChange={handleChange}
              />
              {errors.subject ? (
                <p className="error">{errors.subject}</p>
              ) : (
                <p className="error" style={{ opacity: "0" }}>
                  z
                </p>
              )}
              <label htmlFor="message">Wiadomość</label>
              <textarea
                id="message"
                name="message"
                value={values.message}
                onChange={handleChange}
              />
              {errors.message ? (
                <p className="error">{errors.message}</p>
              ) : (
                <p className="error" style={{ opacity: "0" }}>
                  z
                </p>
              )}
              <Button
                disabled={
                  isSubmitting &&
                  Object.values(errors).every(x => x === null || x === "")
                    ? true
                    : false
                }
                submit
              >
                wyślij
              </Button>
            </form>
          </ContactWrapper>
          {renderNotafication()}
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default Contact
