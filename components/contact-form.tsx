"use client"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
    name: string;
    email: string;
    category: string;
    message: string;
}

const ContactForm = () => {

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        category: "General",
        message: "",
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/feedback", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Reset form after successful submission
                setFormData({
                    name: "",
                    email: "",
                    category: "New component idea",
                    message: "",
                });
                alert("Message sent successfully!");
            } else {
                alert("Failed to send message. Please try again later.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <section className="w-full mt-10">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div className="sm:col-span-2">
                    <Label htmlFor="name" className="block text-sm font-medium leading-5">
                        Name (optional)
                        <div className="mt-1 rounded-md shadow-sm">
                            <Input
                                id="name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="block w-full px-4 py-3 rounded-md shadow-sm  "
                            />
                        </div>
                    </Label>
                </div>
                <div className="sm:col-span-2">
                    <Label htmlFor="email" className="block text-sm font-medium leading-5 w-full">
                        Email
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="block w-full px-4 py-3 mt-1 rounded-md shadow-sm "
                        />
                    </Label>
                </div>
                <div className="sm:col-span-2">
                    <Label htmlFor="category" className="block text-sm font-medium leading-5">
                        Category
                    </Label>
                    <select id="category" name="category" aria-label="Category"
                        value={formData.category}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 mt-1 rounded-md shadow-sm border  "
                    >
                        <option>General</option>
                        <option>Feature request</option>
                        <option>Feedback</option>
                        <option>Bug report</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="sm:col-span-2">
                    <Label
                        htmlFor="message"
                        className="block text-sm font-medium leading-5"
                    >
                        Message
                        <Textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            className="block w-full px-4 py-3 mt-1 shadow-sm"
                        />
                    </Label>
                </div>
                <div className="sm:col-span-2">
                    <Button type="submit" className="w-full font-semibold">
                        Send message
                    </Button>
                </div>
            </form>
        </section>
    );
};

export default ContactForm;