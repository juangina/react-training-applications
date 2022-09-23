import React from "react";

function FooterSection() {
  const [emailValue, setEmailValue] = React.useState("");
  const [formValue, setFormValue] = React.useState("");
  const [emailSent, setEmailSent] = React.useState(false);
  const [pageSemiphore, setPageSemiphore] = React.useState(0);

  function email () {
    setPageSemiphore(pageSemiphore+1);
    console.log(`Button pressed ${pageSemiphore} times`);
    setEmailValue(formValue)
    if(emailValue === "") {
      setEmailSent(false);
    } else {
      setEmailSent(true)
    }
  }

  function emailConfirmationBanner () {
    if (emailSent === true) {
      return (
        <h4 className="email-confirmation display-email">An email will be sent to <span className="email-sent">{emailValue}</span></h4>
      )
    } else {
      return (
      <h4 className="email-confirmation">An email will be sent to <span className="email-sent">{emailValue}</span></h4>
      )
    }
  };
  const jsxText = emailConfirmationBanner();

  return (
    <div className="footer-section">
        <h3>
          Subscribe to our<br/>email list
        </h3>
        <input 
          type='text' 
          onChange={(e) => {
            setFormValue(e.target.value)
          }}
          placeholder="What's your email?">
        </input>
        <button 
          type="button"
          onClick={email}>Submit
        </button>
        {jsxText}
        {/* {emailSent && <h4 className="email-confirmation display-email">An email will be sent to <span className="email-sent">{emailValue}</span></h4>} */}

    </div>
  );
}

export default FooterSection;