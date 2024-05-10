import React, { useState } from 'react';
import image from "../../images/home/secure.jpg";
import SectionTitle from '../utils/SectionTitle';
import { Colors } from '../utils/Colors';

function Sec6() {
    const [activeAccordion, setActiveAccordion] = useState(null);

    // Function to handle accordion toggle
    const toggleAccordion = (index) => {
        setActiveAccordion(index === activeAccordion ? null : index);
    };

    return (
        <section data-aos="fade-right" style={ { backgroundColor: Colors.dark_color } } className='p-2'>
            <SectionTitle title="FAQ" dark="true"/>
            <div className="container my-10 mx-auto md:px-6 xl:px-24 text-white">
                <section className="mb-15">
                    <div id="accordionFlushExample">
                        {faqData.map((faq, index) => (
                            <div className="rounded-none border border-t-0 border-l-0 border-r-0 border-neutral-200" key={index}>
                                <h2 className="mb-0" id={`flush-heading-${index}`}>
                                    <button
                                        className={`group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 ${activeAccordion === index ? '' : 'collapsed'}`}
                                        type="button"
                                        data-te-collapse-init=""
                                        data-te-collapse-collapsed=""
                                        data-te-target={`#flush-collapse-${index}`}
                                        aria-expanded={activeAccordion === index ? 'true' : 'false'}
                                        aria-controls={`flush-collapse-${index}`}
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        {faq.question}
                                        <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                                />
                                            </svg>
                                        </span>
                                    </button>
                                </h2>
                                <div
                                    id={`flush-collapse-${index}`}
                                    className={`!visible ${activeAccordion === index ? '' : 'hidden'} border-0`}
                                    data-te-collapse-item=""
                                    aria-labelledby={`flush-heading-${index}`}
                                    data-te-parent="#accordionFlushExample"
                                >
                                    <div className="py-4 px-5 text-neutral-500 dark:text-neutral-300">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </section>
    );
}

export default Sec6;

// Sample FAQ data
const faqData = [
    {
        question: "What are the benefits of installing a home security system?",
        answer: "A home security system provides several benefits, including deterring burglars, protecting your family and possessions, and providing peace of mind knowing that your home is monitored and protected, even when you're away."
    },
    {
        question: "What components typically make up a home security system?",
        answer: "A typical home security system includes components such as door and window sensors, motion detectors, security cameras, a control panel, and a monitoring service. These components work together to detect and deter intruders and alert homeowners to potential threats."
    },
    {
        question: "Are wireless or wired security systems better for home security?",
        answer: "Both wireless and wired security systems have their advantages and disadvantages. Wireless systems are easier to install and can be more flexible in terms of placement, but they may be susceptible to interference and hacking. Wired systems offer reliability and stability but require professional installation and can be more expensive to set up."
    },
    {
        question: "How do security cameras enhance home security?",
        answer: "Security cameras provide visual surveillance of your property, allowing you to monitor activity both inside and outside your home. They act as a deterrent to potential intruders and can provide valuable evidence in the event of a break-in or other security incident."
    },
    {
        question: "Do home security systems require professional monitoring?",
        answer: "While some home security systems offer self-monitoring options where homeowners receive alerts directly to their smartphones, professional monitoring services provide an additional layer of protection. Professional monitoring ensures that trained professionals are monitoring your home 24/7 and can respond quickly to emergencies, such as break-ins or fires."
    },
    {
        question: "How can I protect my home from cybersecurity threats related to smart home security systems?",
        answer: "To protect your home from cybersecurity threats, it's essential to follow best practices such as using strong, unique passwords for your smart home devices, keeping firmware up to date, and securing your home network with a firewall and encryption. Additionally, avoid sharing sensitive information online and be cautious when granting access to third-party apps or services."
    },
    {
        question: "Can I integrate my home security system with other smart home devices?",
        answer: "Yes, many modern home security systems are designed to integrate seamlessly with other smart home devices, such as smart locks, lighting, thermostats, and voice assistants. This integration allows you to control and automate various aspects of your home security and convenience through a single platform or app."
    },
    {
        question: "What should I consider when choosing a home security system?",
        answer: "When choosing a home security system, consider factors such as your budget, the size and layout of your home, your security needs and priorities, the reputation and reliability of the security provider, and any additional features or services offered, such as home automation integration or professional monitoring. It's also essential to research customer reviews and compare different options to find the best fit for your specific requirements."
    }
];


