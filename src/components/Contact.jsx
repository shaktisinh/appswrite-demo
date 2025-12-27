import React from 'react';
import { databases } from '../lib/appwrite';
import { ID } from 'appwrite';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        fullname: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = React.useState({ loading: false, success: false, error: null });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: null });

        try {
            const dbId = import.meta.env.VITE_APPWRITE_DATABASE_ID;
            const colId = import.meta.env.VITE_APPWRITE_CONTACTS_COLLECTION_ID;

            if (!dbId || !colId) {
                throw new Error("Appwrite configuration missing");
            }

            await databases.createDocument(
                dbId,
                colId,
                ID.unique(),
                {
                    fullName: formData.fullname,
                    emailAddress: formData.email,
                    message: formData.message
                }
            );

            setStatus({ loading: false, success: true, error: null });
            setFormData({ fullname: '', email: '', message: '' });
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus({ loading: false, success: false, error: error.message || "Failed to send message. Please try again." });
        }
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Hire Me
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </div>
                <div className="mt-12 max-w-lg mx-auto">
                    {status.success && (
                        <div className="mb-4 p-4 bg-green-50 text-green-600 rounded-md">
                            Message sent successfully! I'll get back to you soon.
                        </div>
                    )}
                    {status.error && (
                        <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-md">
                            {status.error}
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                        <label className="block">
                            <span className="text-gray-700">Full name</span>
                            <input
                                type="text"
                                name="fullname"
                                value={formData.fullname}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-500 focus:ring-opacity-50 p-3"
                            />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Email address</span>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-500 focus:ring-opacity-50 p-3"
                            />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Message</span>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-500 focus:ring-opacity-50 p-3"
                                rows="4"
                            ></textarea>
                        </label>
                        <button
                            type="submit"
                            disabled={status.loading}
                            className={`w-full bg-gradient-to-r from-pink-500 to-violet-600 text-white font-bold py-3 px-4 rounded-md transition-all duration-200 shadow-md transform hover:-translate-y-1 ${status.loading ? 'opacity-70 cursor-not-allowed' : 'hover:from-pink-600 hover:to-violet-700'}`}
                        >
                            {status.loading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
