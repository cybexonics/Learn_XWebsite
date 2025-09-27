import React, { useEffect, useRef } from "react";

const RazorpayEmbedButton = () => {
  const formRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.setAttribute("data-payment_button_id", "pl_QTxUeMzIMTi8ls");
    script.async = true;

    if (formRef.current) {
      formRef.current.innerHTML = ""; // Clear previous content (important on re-render)
      formRef.current.appendChild(script);
    }
  }, []);

  return <form ref={formRef}></form>;
};

export default RazorpayEmbedButton;
