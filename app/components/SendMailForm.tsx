"use client"

import { useState } from "react"
import { useRouter } from "next/navigation";

export const SendMailForm = function () {
    const [fullnameMsg, setFullNameMsg] = useState("");
    const [emailMsg, setEmailMsg] = useState("");
    const [subjectMsg, setSubjectMsg] = useState("");
    const [contentMsg, setContentMsg] = useState("");
    const router = useRouter();

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const fullname = formData.get('fullname');
        const email = formData.get('email') as string;
        const subject = formData.get('subject');
        const content = formData.get('content');

        if (fullname == "") {
            setFullNameMsg("Please enter your name.");
            return;
        } else setFullNameMsg("");

        if (email == "") {
            setEmailMsg("Please enter your e-mail.");
            return;
        } else {
            let expr = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (expr.test(email)) {
                setEmailMsg("")
            } else {
                setEmailMsg("Invalid e-mail.")
                return;
            }
        }

        console.log("contact email = ", email);
        if (subject == "") {
            setSubjectMsg("This field is required.");
            return;
        } else setSubjectMsg("");

        if (content == "") {
            setContentMsg("This field is required.");
            return;
        } else setContentMsg("");

        const res = await fetch("/api/send-contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: fullname,
                email: email,
                subject: subject,
                message: content
            })
        });

        const json = (await res.json());
        if (json.status == "success") {
            router.push("/success");
        } else {
            alert("Message Sent Failed.");
        }
    }

    return (
        <div className="w-full lg:w-1/2 md:w-1/2 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
            <form className="space-y-6" method="POST" onSubmit={handleSubmit}>
                <h5 className="text-xl font-bold text-[#383838]  text-center">Let&apos;s Get In Touch</h5>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Your name</label>
                    <input type="text" name="fullname" id="fullname" placeholder="Full Name*" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " />
                </div>
                {
                    fullnameMsg != "" ? <span className={" text-primary ml-3"}>{fullnameMsg}</span> : ""
                }
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="name@company.com" />
                </div>
                {emailMsg != "" ? <span className={" text-primary ml-3 "}>{emailMsg}</span> : ""}
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Subject</label>
                    <input type="text" name="subject" id="subject" placeholder="Subject*" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " />
                </div>
                {subjectMsg != "" ? <span className={" text-primary ml-3"}>{subjectMsg}</span> : ""}

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
                    <textarea id="comment" name="content" className="h-32 w-full px-0 text-sm rounded-lg text-gray-900 bg-white border border-gray-300 focus:ring-0  " placeholder="Write a message..." ></textarea>
                </div>
                {contentMsg != "" ? <span className={" text-primary ml-3"}>{contentMsg}</span> : ""}

                <button className="w-full text-white bg-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Send Message</button>

            </form>
        </div>
    )
}
