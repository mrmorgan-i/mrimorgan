'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    }
  };

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Contact Me</h1>
      <p className="mb-4">
        I'd love to hear from you! Whether you have a question, want to collaborate, or just want to say hello, feel free to reach out. Alternatively, you could send a direct email to me at owner@mrimorgan.com.
      </p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block mb-1 font-medium text-neutral-800 dark:text-neutral-200">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-lg border-neutral-300 dark:border-neutral-700 bg-white dark:bg-black"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-medium text-neutral-800 dark:text-neutral-200">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-lg border-neutral-300 dark:border-neutral-700 bg-white dark:bg-black"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 font-medium text-neutral-800 dark:text-neutral-200">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            required
            className="w-full px-3 py-2 border rounded-lg border-neutral-300 dark:border-neutral-700 bg-white dark:bg-black"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="cursor-pointer px-4 py-2 font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors disabled:bg-blue-300"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
        {status === 'success' && (
          <p className="text-green-600 dark:text-green-400">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 dark:text-red-400">Failed to send message. Please try again.</p>
        )}
      </form>
    </section>
  );
}
