import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Resend } from 'resend';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    subject: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('re_bWFq3Qtv_9Eb4q3ML83bjBTuTsDjvVqQP');
    try {
      const resend = new Resend('re_bWFq3Qtv_9Eb4q3ML83bjBTuTsDjvVqQP');
      

    console.log(resend , 'resend');
      const { data, error } = await resend.emails.send({
        from: 'ammarhussain0315@gmail.com',
        to: formData.email,
        subject: 'Hello world',
        html: `<p>Name: ${formData.name}</p><p>Contact Number: ${formData.contactNumber}</p><p>Message: ${formData.subject}</p>`,
      });

      if (error) {
        console.log('Error sending email:', error, formData);
        return;
      }

      console.log('Email sent successfully:', data);
    } catch (error) {
      console.log('Error sending email:', error);
    }
  };

  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
      <form
        className='bg-white p-8 rounded shadow-md w-full max-w-md'
        onSubmit={handleSubmit}
      >
        <h2 className='text-2xl font-bold mb-6 text-center'>Contact Us</h2>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='name'
          >
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
            required
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='contactNumber'
          >
            Contact Number
          </label>
          <input
            type='text'
            id='contactNumber'
            name='contactNumber'
            value={formData.contactNumber}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
            required
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='email'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
            required
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='subject'
          >
            Subject
          </label>
          <input
            type='text'
            id='subject'
            name='subject'
            value={formData.subject}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
            required
          />
        </div>
        <div className='text-center'>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
