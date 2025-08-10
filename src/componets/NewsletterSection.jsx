import React from "react";

const  NewsletterSection = ()=> {
  return (
    <div className="bg-base-200 py-12 my-10">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-5xl font-semibold text-center my-10 text-green-400 ">Subscribe to Our Newsletter</h2>
        <p className="mb-6 text-base-content/70">
          Stay updated with the latest home repair tips, guides, and exclusive offers
          straight to your inbox. Join our community today!
        </p>

        <form className="flex flex-col md:flex-row gap-3 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full md:w-96"
            required
          />
          <button type="submit" className="btn btn-primary">
            Subscribe
          </button>
        </form>

      
      </div>
    </div>
  );
}
export default NewsletterSection;
