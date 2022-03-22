import { useState } from "react";
import Button from "../components/Button";
import FormField from "../components/FormField";
import ArrowRight from "../materials/icons/arrow-right.png";
import Blob from "../components/Blob";
import GoTopBtn from "../components/GoTopBtn";

const Contact = () => {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [subStatus, setSubStatus] = useState(null);

  const updateSubStatus = () => {
    subStatus === null ? setSubStatus(true) : setSubStatus(null);
  };
  
    const addSubscriber = async () => {
        const url = "http://localhost:5000/api/subscriber"
        await fetch (url, {
            method : "POST",
            headers : { "Content-Type" : "application/json"},
            body : JSON.stringify({ fname, lname, mail })
    })}

  return (
    <div className="contact">
      <Blob class="blob__lightgreen blob-high" />
      <h1>Contact</h1>

      <div className="form-container">
        <form action="">
          {/* First Field Group */}
          <FormField
            pholder="First Name"
            type="text"
            border="true"
            class="label-shadow"
            maxlength="30"
            required
            id="userfname"
            onChange={(v) => setFName(v.target.value)}
          />
          <FormField
            pholder="Last Name"
            type="text"
            border="true"
            class="label-shadow"
            maxlength="30"
            required
            id="userlname"
            onChange={(v) => setLName(v.target.value)}
          />

          {
            <div className="show-field">
              <FormField
                pholder="Mail"
                type="mail"
                border="true"
                class="label-shadow"
                maxlength="30"
                onChange={(v) => setMail(v.target.value)}
              />
              <FormField
                pholder="Phone"
                type="phone"
                border="true"
                class="label-shadow"
                maxlength="30"
                onChange={(v) => setPhone(v.target.value)}
              />
            </div>
          }
          <div className="show-field">
            <FormField
              pholder="Message"
              type="text"
              border="true"
              class="txt-field"
              maxlength="1000"
              cols="50"
              rows="6"
              onChange={(v) => setMessage(v.target.value)}
            />
          </div>

          <div className="show-field">
            <FormField
              label="I want to subscribe"
              type="checkbox"
              onChange={updateSubStatus}
            />
            <Button
              txt="Send"
              linkName="send"
              className="button__orange button__send"
              link=""
            />
          </div>

          <div className="show-field">
            <div className="contact-option__container">
              <div className="contact-option">
                <p className="contact-option__txt">Bist Du Musiker?</p>
                <img src={ArrowRight} alt="" className="iconSmall" />
              </div>
              <div className="contact-option">
                <p className="contact-option__txt">Bist Du Veranstalter?</p>
                <img src={ArrowRight} alt="" className="iconSmall" />
              </div>
            </div>
          </div>
          <button type="submit" onClick={addSubscriber}>
            Send
          </button>
        </form>
      </div>
      <GoTopBtn />
    </div>
  );
};

export default Contact;
