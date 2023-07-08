'use client'

import { useState } from "react";
import Button from "./Button"
import { Input } from "./Input";

export default function Form() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Reset form values
    setFormValues({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input.Root>
        <Input.Field
          name="name"
          placeholder="Name"
          required
          value={formValues.name}
          onChange={handleChange}
          title="Your name"
        />
      </Input.Root>
      <Input.Root>
        <Input.Field
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formValues.email}
          onChange={handleChange}
          title="Your email address"
        />
      </Input.Root>
      <Input.Root>
        <Input.Field
          name="subject"
          placeholder="Subject"
          required
          value={formValues.subject}
          onChange={handleChange}
          title="Subject"
        />
      </Input.Root>
      <textarea
        name="message"
        id="message"
        placeholder="Message"
        title="Message"
        className='rounded-lg w-full h-48 p-4 text-gray-500 text-base resize-none bg-gray-50 border-0 placeholder:text-gray-200 focus:ring-2 focus:ring-gray-100 focus:bg-white mb-2'
        value={formValues.message}
        onChange={handleChange}
      />
      <Button type="submit">Send Message</Button>
    </form>
  )
}

