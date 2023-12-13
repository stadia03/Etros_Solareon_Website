import React, { useState } from "react";

const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyKv25NMh2rfuXvVfxwxVF8oQx3jnYMFOVA_InpUoCO9pehv9m3vBXQ67XFnI3aSqk_Lw/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // Handle success, e.g., show a success message
        console.log('Form submitted successfully!');
      } else {
        // Handle error, e.g., show an error message
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  
  return (




    <div className=" bg-primary max-h-screen ">
      <section class="bg-primary text-white">
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div class="lg:col-span-2 lg:py-12">
              <p class="max-w-xl text-[25px]">
                Feel free to reach out to us!
              </p>

              <div class="mt-8">
                <a href="" class="text-2xl font-bold text-[35px]">
                  teamesr.srm@gmail.com
                </a>

                <address class="mt-2 not-italic text-[25px]">
                R2FW+R8R, Potheri, SRM Nagar, Kattankulathur, Tamil Nadu 603203
                </address>
              </div>
            </div>

            <div class="rounded-lg  p-8 shadow-lg lg:col-span-3 lg:p-12" style={{"border":"2px solid white"}}>
              <form class="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label class="sr-only" for="name">
                    Name
                  </label>
                  <input
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name} onChange={handleChange}
                    style={{"border":"2px solid white", "color":"white", "backgroundColor":"black"}}
                  />
                </div>

                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label class="sr-only" for="email">
                      Email
                    </label>
                    <input
                      class="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email} onChange={handleChange}
                      style={{"border":"2px solid white", "color":"white", "backgroundColor":"black"}}
                 />
                  </div>

                  <div>
                    <label class="sr-only" for="phone">
                      Phone
                    </label>
                    <input
                      class="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone} onChange={handleChange}
                      style={{"border":"2px solid white", "color":"white", "backgroundColor":"black"}}
                      />
                  </div>
                </div>

                <div>
                  <label class="sr-only" for="message">
                    Message
                  </label>

                  <textarea
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                    name="message"
                    value={formData.message} onChange={handleChange}
                    style={{"border":"2px solid white", "color":"white", "backgroundColor":"black"}}
                    ></textarea>
                </div>

                <div class="mt-4">
                  <button  type="submit"
                    
                    style={{"border":"2px solid white", "color":"black", "backgroundColor":"white"}}
                    class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
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
