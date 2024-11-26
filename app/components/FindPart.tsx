"use client"

import { CALL_TO, ENGINE_SIZES, MAKE, PART, PHONE_NUMBER, TRANSMISSION, YEAR } from "../config"
import { useState, useRef, createRef } from "react";
import { ChangeEvent } from "react";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { useRouter } from "next/navigation";
// import ReCAPTCHA from 'react-google-recaptcha'

interface Props {
    selectedMake: string;
    selectedPart: string;
}

const FindPart: React.FC<Props> = ({ selectedMake, selectedPart }) => {

    const recaptchaRef: any = createRef();

    const [model, setModel] = useState(selectedMake);

    const [yearMsg, setYearMsg] = useState(false);
    const [engineMsg, setEngineMsg] = useState(false);
    const [carMsg, setCarMsg] = useState(false);
    const [modelMsg, setModelMsg] = useState(false);
    const [transmissionMsg, setTransmissionMsg] = useState(false);
    const [partMsg, setPartMsg] = useState(false);

    const [name, setNameMsg] = useState("");
    const [email, setEmailMsg] = useState("");
    const [phone, setPhoneMsg] = useState("");

    const [showSecondPart, setShowSecondPart] = useState(false);

    const handleChange = (event: any) => {
        if (event.target.name == "make") {
            setModel(event.target.value);
        }
    }

    const router = useRouter();

    // const onReCAPTCHAChange = async (captchaCode: string | null) => {
    //     // If the reCAPTCHA code is null or undefined indicating that
    //     // the reCAPTCHA was expired then return early
    //     if (!captchaCode) {
    //         return;
    //     }
    //     try {
    //         const response = await fetch("/api/validateRecaptcha", {
    //             method: "POST",
    //             body: JSON.stringify({ captcha: captchaCode }),
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         });
    //         if (response.ok) {
    //             // If the response is ok than show the success alert
    //             // alert("Email registered successfully");
    //         } else {
    //             // Else throw an error with the message returned
    //             // from the API
    //             const error = await response.json();
    //             throw new Error(error.message)
    //         }
    //     } catch (error: any) {
    //         alert(error?.message || "Something went wrong");
    //     } finally {
    //         // Reset the reCAPTCHA when the request has failed or succeeeded
    //         // so that it can be executed again if user submits another email.

    //         // recaptchaRef.current.reset();
    //     }
    // }

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        // const recaptchaRef = useRef()
        // const recaptchaResponse = await recaptchaRef.current.executeAsync();
        // recaptchaRef.current.reset();

        // const response = await fetch("/api/validateRecaptcha", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({ recaptchaResponse }),
        // });
        // const response = await recaptchaRef.current.executeAsync();
        // console.log("AAA", response)


        // let isValid = recaptchaRef.current.getValue()
        let isValid = true

        if (!isValid) {
            alert("Please confirm you are not a bot");
        }
        else {
            const formData = new FormData(event.target);
            const year = formData.get('year');
            const engine_size = formData.get('engine_size');
            const make = formData.get('make');
            const model = formData.get('model');
            const transmission = formData.get('transmission');
            const part = formData.get('part');

            if (showSecondPart == false) {
                let err_count = 0;

                if (year == "Year") {
                    err_count++;
                    setYearMsg(true);
                } else {
                    setYearMsg(false);
                }

                if (engine_size == "Engine Size") {
                    err_count++;
                    setEngineMsg(true);
                } else {
                    setEngineMsg(false);
                }

                if (make == "Choose Your Car") {
                    err_count++;
                    setCarMsg(true);
                } else {
                    setCarMsg(false);
                }

                if (model == "Choose Model") {
                    err_count++;
                    setModelMsg(true);
                } else {
                    setModelMsg(false);
                }

                if (transmission == "Choose Transmission") {
                    err_count++;
                    setTransmissionMsg(true);
                } else {
                    setTransmissionMsg(false);
                }

                if (part == "Choose Part") {
                    err_count++;
                    setPartMsg(true);
                } else {
                    setPartMsg(false);
                }

                const name = formData.get('fullname');
                const email = formData.get('email') as string;
                const phone_number = formData.get('phone_number');
                const zip_code = formData.get('zip_code');

                if (name == "") {
                    setNameMsg("Please enter your name.");
                    err_count++;
                } else setNameMsg("");

                if (email == "") {
                    setEmailMsg("Please enter your e-mail.");
                    err_count++;
                } else {
                    let expr = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    if (expr.test(email)) {
                        setEmailMsg("")
                    } else {
                        setEmailMsg("Invalid e-mail.")
                        err_count++;
                    }
                }

                if (phone_number == "") {
                    setPhoneMsg("Please enter your phone no.");
                    err_count++;
                } else setPhoneMsg("");

                if (err_count == 0) {

                    const res = await fetch("/api/send-email", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            year: year,
                            engine_size: engine_size,
                            make: make,
                            model: model,
                            transmission: transmission,
                            part: part,
                            name: name,
                            email: email,
                            phone: phone_number,
                            zip_code: zip_code
                        })
                    });

                    const json = (await res.json());
                    if (json.status == "success") {
                        router.push("/success");
                    } else {
                        alert("Message Sent Failed.");
                    }
                }
                return;
            }
        }
    };

    return (
        <div className="flex flex-col px-2 py-6 lg:w-1/2 md:w-1/2 lg:order-2 md:order-2 order-1 items-end max-w-[450px]">
            <form className=" bg-white rounded-lg" onSubmit={handleSubmit} id="#findPart">
                <h3 className="w-full text-[28px] text-white font-semibold rounded-t-lg bg-[#DB3732] mb-3 py-3 text-center">Find A Part Now</h3>
                <div className={"flex flex-row space-x-3 mb-2 px-3"}>
                    <label htmlFor="year" />
                    <select id="year" name="year" className="bg-[#F5F5F5] w-full h-12 text-[#4E4E4E] text-[15px] block rounded-md">
                        {
                            YEAR.map((key, index) => (
                                <option value={key} key={index}>{key}</option>
                            ))
                        }
                    </select>

                    <label htmlFor="make" />
                    <select id="make" name="make" onChange={handleChange} className="rounded-md bg-[#F5F5F5] w-full h-12 text-[#4E4E4E] text-[15px] block ">
                        {
                            Object.keys(MAKE).map((key, index) => (
                                <option value={key} key={index} selected={selectedMake.toLowerCase() === key.toLowerCase()}>{key}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="flex flex-row space-x-3 mb-2 px-3">
                    <span className={yearMsg ? "w-1/2 ml-2 text-primary" : "hidden"}>Choose Year.</span>
                    <span className={carMsg ? "w-1/2 ml-2 text-primary" : "hidden"}>Choose Your Car.</span>
                </div>

                <div className={"flex flex-row space-x-3 mb-2 px-3"}>

                    <label htmlFor="model" />
                    <select id="model" name="model" className="rounded-md bg-[#F5F5F5] w-full h-12 text-[#4E4E4E] text-[15px] block">
                        {
                            MAKE[model] && MAKE[model as string].map((key, index) => (
                                <option value={key} key={index}>{key}</option>
                            ))
                        }
                    </select>

                    <label htmlFor="part" />
                    <select id="part" name="part" className="rounded-md bg-[#F5F5F5] w-full h-12 text-[#4E4E4E] text-[15px] block">
                        {
                            PART.map((key, index) => (
                                <option value={key} key={index} selected={selectedPart === key}>{key}</option>
                            ))
                        }
                    </select>

                </div>
                <div className="flex flex-row space-x-3 mb-2 px-3">
                    <span className={modelMsg ? "w-1/2 ml-2 text-primary" : "hidden"}>Choose Model.</span>
                    <span className={partMsg ? "w-1/2 ml-2 text-primary" : "hidden"}>Choose Part.</span>
                </div>
                <div className={"flex flex-row space-x-3 mb-2 px-3"}>
                    <label htmlFor="engine_size" />
                    <select id="engine_size" name="engine_size" className="bg-[#F5F5F5] w-full h-12 text-[#4E4E4E] text-[15px] block rounded-md">
                        {
                            ENGINE_SIZES.map((key, index) => (
                                <option value={key} key={index}>{key}</option>
                            ))
                        }
                    </select>

                    <label htmlFor="transmission" />
                    <select id="transmission" name="transmission" className="rounded-md bg-[#F5F5F5] w-full h-12 text-[#4E4E4E] text-[15px] block">
                        {
                            TRANSMISSION.map((key, index) => (
                                <option value={key} key={index}>{key}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="flex flex-row space-x-3 mb-2 px-3">
                    <span className={engineMsg ? "w-1/2 ml-2 text-primary" : "hidden"}>Choose Engine Size.</span>
                    <span className={transmissionMsg ? "w-1/2 ml-2 text-primary" : "hidden"}>Choose Transmission.</span>
                </div>

                <div className={"flex flex-row space-x-3 mb-2 px-3"}>
                    <label htmlFor="fullname" />
                    <input type="text" id="fullname" name="fullname" className="mb-3 rounded-md w-full h-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 " placeholder="Your name"></input>
                    <label htmlFor="email" />
                    <input type="email" id="email" name="email" className="mb-3 rounded-md w-full h-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 " placeholder="Email Address*"></input>
                </div>

                <div className="flex flex-row space-x-3 mb-2 px-3">
                    <span className={"w-1/2 ml-2 text-primary"}>{name}</span>
                    <span className={"w-1/2 ml-2 text-primary"}>{email}</span>
                </div>

                <div className={"flex flex-row space-x-3 mb-2 px-3"}>
                    <label htmlFor="phone_number" />
                    <input type="number" id="phone_number" name="phone_number" className="rounded-md w-1/2 h-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 " placeholder="Phone No."></input>
                    <label htmlFor="zip_code" />
                    <input type="number" id="zip_code" name="zip_code" className="rounded-md w-1/2 h-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 " placeholder="Zip Code"></input>
                </div>
                {/* <span className={" text-primary ml-3 mb-3"}>{phone}</span> */}

                {/* <div className={showSecondPart == true ? "px-3" : "hidden"}>
                    <input type="text" name="fullname" className="mb-3 rounded-md w-full h-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 " placeholder="Your name"></input>
                    <span className={" text-primary ml-3 mb-3"}>{name}</span>
                    <input type="email" name="email" className="mb-3 rounded-md w-full h-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 " placeholder="Email Address*"></input>
                    <span className={" text-primary ml-3 mb-3"}>{email}</span>
                    <div className="flex w-full space-x-3 mb-3">
                        <input type="number" name="phone_number" className="rounded-md w-1/2 h-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 " placeholder="Phone No."></input>

                        <input type="number" name="zip_code" className="rounded-md w-1/2 h-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 " placeholder="Zip Code"></input>
                    </div>
                    <span className={" text-primary ml-3 mb-3"}>{phone}</span>
                </div> */}

                <div className="flex justify-start mt-4">
                    {/* <ReCAPTCHA
                    sitekey={"6LfB4GMnAAAAAAZMdhnpdmmEX8MszoIRzzsLWNSE"}
                    ref={recaptchaRef}
                    onChange={onReCAPTCHAChange}
                    className="px-3 space-x-3"
                /> */}
                </div>
                <div className="flex w-full space-x-3 px-3 items-end justify-end mt-4 mb-2">
                    <button className="bg-primary text-white text-xl w-full rounded-lg py-2">{"Find My Part"}</button>
                </div>

            </form >

            <Link href={CALL_TO} className="mt-5 flex flex-row bg-primary rounded-lg items-center w-full py-5 justify-center">
                <FaPhone className='h-8 w-8 p-1 rounded-lg inline-block  bg-white text-primary' style={{ transform: "scaleX(-1)" }} />
                <h4 className="bg-primary text-white text-[28px] rounded-lg font-bold items-center ml-5">{PHONE_NUMBER}</h4>
                {/* <div className="flex flex-row">
                    <p className="text-white text-[18px]">Call now </p>
                    <p className="text-white text-[18px] ml-2">to order</p>
                </div> */}
            </Link>
        </div >
    )
}

export default FindPart;
