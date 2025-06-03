import { useState } from "react"
import "./Contact.css"
import { useLanguage } from "../context/LanguageContext"
import translations from "../data/translations"
import { FaLinkedin, FaGithub } from "react-icons/fa"

const Contact = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: "Please fill in all fields.",
      })
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: false,
        error: true,
        message: "Please enter a valid email address.",
      })
      return
    }

    setFormStatus({
      submitted: true,
      error: false,
      message:
        language === "nl"
          ? "Je bericht is succesvol verzonden!"
          : "Your message has been sent successfully!",
    })

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    })
  }

  return (
    <main className="contact-page">
      <h1 className="contact-title">{t.contact}</h1>

      <div className="contact-container">
        <div className="contact-info">
          <h2 className="contact-subtitle">{t.getInTouch}</h2>
          <p className="contact-text">
            {language === "nl"
              ? "Wil je contact opnemen met mij?"
              : "Would you like to get in touch with me?"}
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <h3 className="detail-title">Email</h3>
              <p className="detail-text">damianwillmse@gmail.com</p>
            </div>

            <div className="contact-detail">
              <h3 className="detail-title">Location</h3>
              <p className="detail-text">Rotterdam, Netherlands</p>
            </div>
          </div>

          <div className="contact-social">
            <h3 className="social-title">
              {language === "nl" ? "Volg mij" : "Follow me"}
            </h3>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/damianwillemse/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedin
                  style={{
                    marginRight: "8px",
                    verticalAlign: "middle",
                  }}
                />
                {t.linkedin}
              </a>
              <a
                href="https://github.com/Damian5314"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaGithub
                  style={{
                    marginRight: "8px",
                    verticalAlign: "middle",
                  }}
                />
                {t.github}
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          {formStatus.submitted ? (
            <div className="form-success">
              <h2>{t.thankYou}</h2>
              <p>{formStatus.message}</p>
              <button
                className="reset-button"
                onClick={() =>
                  setFormStatus({ submitted: false, error: false, message: "" })
                }
              >
                {t.sendAnother}
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              {formStatus.error && (
                <div className="form-error">{formStatus.message}</div>
              )}

              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  {t.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={
                    language === "nl" ? "Je naam" : "Your name"
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  {t.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={
                    language === "nl" ? "Je e-mail" : "Your email"
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  {t.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={
                    language === "nl" ? "Je bericht" : "Your message"
                  }
                  rows={6}
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                {t.sendMessage}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}

export default Contact
