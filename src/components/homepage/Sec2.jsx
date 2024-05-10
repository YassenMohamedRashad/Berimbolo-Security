import React from 'react';
import { Colors } from '../utils/Colors';

function Sec2 ()
{
    return (
        <div id='services' className='animate__animated animate__fadeInUp'>
            {/* Container for demo purpose */ }
            <div className="p-10 text-white" style={ { backgroundColor: Colors.dark_color } } >
                {/* Section: Design Block */ }
                <section>
                    <div className="flex flex-wrap">
                        <div className="w-full shrink-0 grow-0 basis-auto px-3 lg:mb-0 lg:w-4/12">
                            <p className="font-bold uppercase">
                                Services
                            </p>
                            <h2 className="mb-4 text-3xl font-bold">
                                What are we doing ?
                            </h2>
                            <p className="mb-12  text-gray-400">
                                Berimbolo Security sell and install security systems for homes and small businesses.
                            </p>
                        </div>
                        <div className="mb-md-0 mb-6 w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12 grid lg:grid-cols-2">
                                    <div className="flex mb-30">
                                        <div className="shrink-0">
                                            <i class="bi bi-arrow-right-circle-fill text-xl"></i>
                                        </div>
                                        <div className="ml-4 grow">
                                            <p className="mb-3 font-bold">Security risk assessments</p>
                                        </div>
                                    </div>
                                    <div className="flex mb-30">
                                        <div className="shrink-0">
                                            <i class="bi bi-arrow-right-circle-fill text-xl"></i>
                                        </div>
                                        <div className="ml-4 grow">
                                    <p className="mb-3 font-bold">Sale and installation of security systems (alarms and CCTV)</p>
                                        </div>
                                    </div>
                                    <div className="flex mb-30">
                                        <div className="shrink-0">
                                            <i class="bi bi-arrow-right-circle-fill text-xl"></i>
                                        </div>
                                        <div className="ml-4 grow">
                                        <p className="mb-3 font-bold">Security system maintenance</p>
                                        </div>
                                    </div>
                                    <div className="flex mb-30">
                                        <div className="shrink-0">
                                            <i class="bi bi-arrow-right-circle-fill text-xl"></i>
                                        </div>
                                        <div className="ml-4 grow">
                                    <p className="mb-3 font-bold">24/7 monitoring of: <br/>Alarm systems - CCTV footage</p>
                                        </div>
                                    </div>
                        </div>
                    </div>
                </section>
                {/* Section: Design Block */ }
            </div>
            {/* Container for demo purpose */ }
        </div>

    );
}

export default Sec2;