import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post("http://localhost:3000/subscribe", {
        email,
      });
      // give alert for succesfully subscribed
      if (res.data.subscriber.insertedId)
      {
        Swal.fire({
                   position: "center",
                   icon: "success",
                   title: "Your are successfully subscribed",
                   showConfirmButton: false,
                   timer: 1500,
                 });
      }
        setEmail(""); // clear input
    } catch (err) {
      if (err.response && err.response.data.message) {
        setMessage(err.response.data.message);
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-base-200 py-12 mb-10">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-5xl font-semibold text-center my-20 text-green-400 ">
          Subscribe to Our Newsletter
        </h2>
        <p className="mb-6 text-base-content/70">
          Stay updated with the latest home repair tips, guides, and exclusive
          offers straight to your inbox. Join our community today!
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col md:flex-row gap-3 justify-center"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input input-bordered w-full md:w-96"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-sm text-red-600 font-medium">{message}</p>
        )}
      </div>
    </div>
  );
}
