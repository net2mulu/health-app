import { Button } from "@material-tailwind/react";
import React from "react";

const Email = () => {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the subscription logic
    console.log("Subscribing email:", email);
    // Reset the input field after submission
    setEmail("");
  };
  return (
    <section className="w-full py-20 md:py-40 ">
      <div className="relative z-10 mx-auto flex flex-col items-center justify-center w-full max-w-custom px-4 md:px-8">
        <h2 className="text-2xl font-gilroy-semi-bold text-[#4E4E4E] font-semibold text-center mb-10">
          Subscribe Our Newsletter
        </h2>
        <form onSubmit={handleSubmit} className="w-[440px] relative">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-6 py-4 text-[15px] text-gray-900 placeholder-gray-500 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
          <Button
            size="sm"
            className="absolute capitalize right-2 top-1/2  transform -translate-y-1/2 bg-bluePrimary hover:bg-blue-600 rounded-full px-6 py-3.5"
            type="submit"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Email;
