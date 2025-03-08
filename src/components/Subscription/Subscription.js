import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link for navigation
import "./Subscription.css";

const Subscription = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false); // Track subscription status

  const handleSubscription = () => {
    if (!isSubscribed) {
      alert(`Subscribed with: ${email}`);
    } else {
      alert("You have unsubscribed.");
    }
    setIsSubscribed(!isSubscribed); // Toggle between Subscribe and Unsubscribe
    setEmail(""); // Clear input after subscribing
  };

  return (
    <div className="subscription-container">
      <h2>Subscribe to the Newsletter</h2>
      <p>Never Miss a Story! Subscribe for the latest news highlights every week.</p>

      {!isSubscribed && ( // Show input field only if not subscribed
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      )}

      <button className="subscribe-btn" onClick={handleSubscription}>
        {isSubscribed ? "Unsubscribe" : "Subscribe"}
      </button>

      {/* ✅ Updated Privacy Policy Link */}
      <p className="subscription-disclaimer">
        By subscribing, you agree to receive our newsletter. Your email will be stored securely and used only for sending updates.  
        Read our <Link to="/privacy-policy" style={{ color: "blue", textDecoration: "underline" }}>Privacy Policy</Link> for more details.  
        You can unsubscribe anytime.
      </p>
    </div>
  );
};

export default Subscription;
