import React from 'react';
import image from "../../images/home/secure.jpg"

function Sec6 ()
{
    return (
        <section data-aos="fade-right" className="text-gray-600 body-font my-10 p-5 animate__animated animate__fadeInUp">
            <div class="flex flex-col text-center w-full">
                <h1 class="sm:text-4xl text-3xl font-medium title-font mb-10 text-gray-900">Some Advices</h1>
            </div>
            <div className="container px-5 mx-auto grid lg:grid-cols-2 place-content-center">
                <div className="place-content-end w-[80%] hidden lg:block mb-10 lg:mb-0 rounded-lg overflow-hidden">
                    <img src={ image } alt="" />
                </div>
                <div className=" place-content-center flex flex-col flex-wrap lg:py-6 text-left">
                    <div className="flex flex-col mb-10 items-start ">
                        <div className="flex-grow mb-5">
                            <p className="leading-relaxed text-base">
                                <i class="bi bi-arrow-right-circle-fill text-gray-800 me-2"></i>
                                Install a robust security system with cameras and alarms.
                            </p>
                        </div>

                        <div className="flex-grow mb-5">
                            <p className="leading-relaxed text-base">
                                <i class="bi bi-arrow-right-circle-fill text-gray-800 me-2"></i>
                                Always lock doors and windows, even when you're at home.
                            </p>
                        </div>

                        <div className="flex-grow mb-5">
                            <p className="leading-relaxed text-base">
                                <i class="bi bi-arrow-right-circle-fill text-gray-800 me-2"></i>
                                Invest in motion-sensor lights for outdoor areas.
                            </p>
                        </div>

                        <div className="flex-grow mb-5">
                            <p className="leading-relaxed text-base">
                                <i class="bi bi-arrow-right-circle-fill text-gray-800 me-2"></i>
                                Keep shrubs and trees trimmed to eliminate hiding spots for intruders.
                            </p>
                        </div>

                        <div className="flex-grow mb-5">
                            <p className="leading-relaxed text-base">
                                <i class="bi bi-arrow-right-circle-fill text-gray-800 me-2"></i>
                                Secure valuable items in a safe or hidden location.
                            </p>
                        </div>

                        <div className="flex-grow mb-5">
                            <p className="leading-relaxed text-base">
                                <i class="bi bi-arrow-right-circle-fill text-gray-800 me-2"></i>
                                Use timers for lights and TVs to create the illusion of occupancy when you're away.
                            </p>
                        </div>

                        <div className="flex-grow mb-5">
                            <p className="leading-relaxed text-base">
                                <i class="bi bi-arrow-right-circle-fill text-gray-800 me-2"></i>
                                Get to know your neighbors and establish a neighborhood watch system.
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </section>


    );
}

export default Sec6;