import React, { useState } from "react";
import './form-data.css';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
function FormStep3() {

  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [itemId, setItemId] = useState(false);

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          discription: 'book',
          amount: {
            currency_code: 'USD',
            value: 20

          },
        },

      ],
      application_context: {
        shipping_preference: "NO_SHIPPING"
      }
    }).then((itemId) => {
      setItemId(itemId);
      return itemId
    })
  }
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {

      const { payer } = details;
      console.log(details);
      setSuccess(true)
    });

  }
  const ErrorMsg = (data, actions) => {
    setError("an error occured with your payment")
  }

  return (
    <>
      <div className="payment">
        <div className="invoice">
          <p className="inv-p" style={{ marginBottom: "20px" }}>INVOICE DETAILS:</p>
          <div className="invoice-cont">
            <div className="details">
              <p>COMPETITIONS NAME</p>
              <div></div>
              <p>$20</p>
            </div>
            <br />
            <hr />
            <div className="details">

              <h3>Total</h3>

              <h3>$20</h3>
            </div>
          </div>
        </div>
        <div className="paypal">
          <p>Choose your payment mathod :</p>
          <div className="project-team">

            <div className="main-section">

              <PayPalScriptProvider options={{ "client-id": "Aa_fegAP6GXXQxmx-gKn2vI-c6j_k758vQ0aLFboxSaoqdwe8NuiOW3FLDjpRN_ZywPz5risSzVefIc4" }}>

                <div className="project-team-card">
                  <button style={{ alignItem: "flex-start", border: "none", width: "100%", height: "100%", background: "transparent" }} onClick={() => setShow(true)} type="submit">
                    <img width={80} src="https://www.clothesmaid.com/wp-content/uploads/2019/07/paypal.png" />
                  </button>

                </div>
                {show ? (<PayPalButtons style={{ layout: "horizontal" }} createOrder={createOrder} onApprove={onApprove} onError={ErrorMsg} />) : ""}
              </PayPalScriptProvider>
              {success ? <p>Yor Payment has been done successfully please check email</p> : ""}


            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormStep3
