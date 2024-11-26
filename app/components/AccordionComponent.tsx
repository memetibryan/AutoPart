"use client";

import { useState } from "react";

const AccordionComponent = function () {

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (index: number) => {
    if (selectedIndex == index)
      setSelectedIndex(-1);
    else
      setSelectedIndex(index);
  }

  // create an array of objects with the id, trigger element (eg. button), and the content element
  const contents = [
    {
      title: "How long does it usually take for my used part to arrive?",
      answer: "The typical shipping time for this product is 7-14 business days. However, sometimes due to unusual circumstances like weather delays or order volumes it may take an additional amount of time that varies by location and situation."
    },
    {
      title: "What happens when the order is placed?",
      answer: "Our customer support team will send you an invoice copy before we bill your card. Please make sure to verify everything on the invoice to get the order processed. You will be contacted if any additional information is needed. You will receive your tracking number, once your order is shipped. Please allow for 7 – 14 Business Days(Excluding weekends and Holidays) for your order to arrive."
    },
    {
      title: "How does my part arrive?",
      answer: "You can rest assured that your used part will arrive safely at our door on a 4×4 pallet. We take care of everything – from loading it up with the right materials, wrapping and draining all fluids before delivery!"
    },
    {
      title: "What is the best method to contact you for any questions or concerns?",
      answer: "The best method to contact us is through Email. We typically answer all messages within the same day (usually within 1 hour). Should you have any questions, please feel free to call us at (888) 748-0882."
    },
    {
      title: "Will I be receiving the exact part I have searched for?",
      answer: "You can have the same auto parts throughout multiple years, makes and models. Each year’s range will be a perfect fit for your car as determined by original equipment manufacturer (OEM) standards! Be sure to provide us with VIN# after placing order or before shipping out any goods so we know which model you want exactly – thanks in advance.”"
    },
    {
      title: "What is your Return Policy?",
      answer: "You have 15 days from the date of purchase to return an item. All returns are subject to a 30% restocking fee. Return freight/shipping charges will also apply for all parts that were incorrectly ordered."
    },
    {
      title: "How do I know the part I found on your website is compatible with my vehicle?",
      answer: "OEM auto parts are interchangeable within multiple years, makes and models. Same part throughout multiple year range will result in an exact fit for multiple makes and models as determined by OEM standards. Please make sure to provide us the VIN# after the order is processed or before the part ships so we can better assist you."
    },
    {
      title: "Is a VIN required to purchase parts on the website?",
      answer: "Your 17 digit VIN is required on all power train purchases. This will ensure proper part compatibility and activate the warranty. Without a proper VIN, the warranty is void."
    },
    {
      title: "What will be included with my used Engine?",
      answer: "Engine Block, Cylinder Heads, Head Gasket, and All Internal Lubricated Parts without AC Compressor, Starter, Alternator or Power Steering Pump. Parts left on the engine block are for convenience purposes only."
    },
    {
      title: "Are the parts sold guaranteed to match my car's color?",
      answer: "No, we do not warrant actual color of products as colors will vary. Our inventory is made up entirely of quality used OEM products guaranteed for fit and functionality, but color cannot be guaranteed. Painting of this part by a qualified professional is recommended to match the exact color variation of your vehicle. Returns cannot be made based on on non-matching color, or if color has been altered after acceptance of delivery."
    },
    {
      title: "What is included with our remanufactured engines?",
      answer: "You will receive an engine which is commonly known as a ‘long block engine.’ A long block is an engine sub-assembly that consists of the assembled block, crankshaft, cylinder head, camshaft, valve train, gaskets and oil pump. Certain parts, such as the oil pan, valve covers, timing covers, and intake manifold are not included and will need to be transferred from your engine. The power steering pump, starter, AC compressor and alternator are not included."
    },
    {
      title: 'If I buy a used engine or transmission, are they "drop-in" ready?',
      answer: "Not always. We are selling the long block, cylinder heads and internal lubricated parts on Engines. Engines may come with other parts attached, depending on source, which may or may not have to be removed prior to installation in your car or truck."
    },
    {
      title: "What is included with a my uused Transmission?",
      answer: "Transmission Case, Valve Body, Tail shaft and Housing, Torque Converter (automatic only), and All Internal Lubricated Parts"
    },
    {
      title: "Where do I go to track or check the shipment status for an order placed online?",
      answer: "When an online order has shipped, we’ll send you an email and a Text with a tracking number and the link to the shipping companys website."
    },
    {
      title: "What forms of payments do you accept?",
      answer: "We accept: All major credit cards, Zelle, Wire Transfers, and checks and Chase QuickPay. Please note, your payment has to clear before your item will ship.  Beware of scams: Lately there has been numerous fake/scam Websites trying to sell you products. Verify before you buy."
    },
  ]

  return (

    <ul className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-y-16 lg:gap-y-12 md:gap-y-12 px-10 gap-x-5 w-full">
      {
        contents.map((item, index) => (
          <li className="" key={index}>
            <button type="button" onClick={() => handleClick(index)} className={selectedIndex != index ? "border-blue-500 flex items-center justify-between w-full p-5 font-medium text-left text-text-color border rounded-t-xl bg-[#F3F3F3]" : "flex items-center justify-between w-full p-5 font-medium text-left text-white border border-blue-500 rounded-t-xl bg-blue-500"}>
              <h4 className={selectedIndex == index ? "text-white text-[18px] text-ellipsis" : "text-text-primary text-[18px] text-ellipsis"}>{item.title}</h4>
              {
                index == selectedIndex ? <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg> : <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              }
            </button>
            <div id="body" className={selectedIndex == index ? "h-48" : "h-48 hidden"} >
              <div className="p-5 border border-blue-500">
                <p className="mb-2 text-gray-500 ">{item.answer}</p>
              </div>
            </div>
          </li>
        ))
      }
    </ul>
  )
}

export default AccordionComponent;
