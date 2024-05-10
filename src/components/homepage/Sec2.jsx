import React from 'react';
import SectionTitle from "../utils/SectionTitle";
import { Colors } from '../utils/Colors';

function Sec2 ()
{
    return (
        <section className='my-20' data-aos="fade-left" data-aos-duration="200">
            <SectionTitle title="Our Services" />
            <div className="grid md:grid-cols-4 max-w-screen-lg mx-auto gap-5 mt-16 px-5">

                <div data-aos="fade-left" data-aos-duration="300" className="flex gap-4 place-content-center  flex-col text-center border-2 rounded-2xl hover:bg-indigo-600 transition hover:text-white">
                    <div className='p-10'>
                        <i class="bi bi-file-earmark-lock text-3xl mb-5"></i>
                        <div className='mt-3'>
                            <h3 className="font-semibold text-xl">Security risk assessments</h3>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-left" data-aos-duration="900" className="flex gap-4 place-content-center  flex-col text-center border-2 rounded-2xl hover:bg-indigo-600 transition hover:text-white">
                    <div className='p-5'>
                        <i class="bi bi-camera-video text-3xl mb-5"></i>
                        <div className='mt-3'>
                            <h3 className="font-semibold text-xl">Sale and installation of security systems (alarms and CCTV)</h3>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-left" data-aos-duration="1600" className="flex gap-4 place-content-center  flex-col text-center border-2 rounded-2xl hover:bg-indigo-600 transition hover:text-white">
                    <div className='p-5'>
                        <i class="bi bi-shield-check text-3xl mb-5"></i>
                        <div className='mt-3'>
                            <h3 className="font-semibold text-xl">Security system maintenance</h3>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-left" data-aos-duration="2500" className="flex gap-4 place-content-center  flex-col text-center border-2 rounded-2xl hover:bg-indigo-600 transition hover:text-white">
                    <div className='p-5'>
                            <i class="bi bi-building text-3xl mb-5"></i>
                        <div className='mt-3'>
                            <h3 className="font-semibold text-xl">24/7 monitoring of:Alarm systems and CCTV footage</h3>
                        </div>
                    </div>
                </div>

            </div>
        </section>


    );
}

export default Sec2;