import React, { useState } from "react";
import {
  CTA,
  Mini_CTA
} from "../components";
import emailjs from '@emailjs/browser';

const ContactForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = 'service_tt6yfgo'; // Update with your service ID
    const templateId = 'template_l866acf'; // Update with your template ID
    const userId = '5pL8cdGLjjDVJfP6z'; // Update with your user ID (public key)
    
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'esr',
      message: message,
      mobile_no: mobile,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, userId);
      console.log('Email sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
      setMobile('');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="bg-primary max-h-screen">
      <section className="bg-primary text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-[25px]">
                Feel free to reach out to us!
              </p>

              <div className="mt-8">
                <a href="" className="text-2xl font-bold text-[35px]">
                  teamesr.srm@gmail.com
                </a>

                <address className="mt-2 not-italic text-[25px]">
                  PG 301,Aaruush Building,Main Campus, Potheri, SRM Nagar, Kattankulathur, Tamil Nadu 603203
                </address>
              </div>
            </div>

            <div className="rounded-lg p-8 shadow-lg lg:col-span-3 lg:p-12" style={{ "border": "2px solid white" }}>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ "border": "2px solid white", "color": "white", "backgroundColor": "black" }}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ "border": "2px solid white", "color": "white", "backgroundColor": "black" }}
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                      name="phone"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      style={{ "border": "2px solid white", "color": "white", "backgroundColor": "black" }}
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{ "border": "2px solid white", "color": "white", "backgroundColor": "black" }}
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button type="submit"
                    style={{ "border": "2px solid white", "color": "black", "backgroundColor": "white" }}
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
