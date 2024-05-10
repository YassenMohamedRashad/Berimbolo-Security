import React from 'react';
import heroImage from "../../images/home/hero.png";
import Main_btn from "../utils/Main_btn" 

function Hero ()
{
return (
    <>
        {/* Section: Design Block */ }
        <section className="background-radial-gradient p-10 animate__animated animate__fadeInUp">
            <style
                dangerouslySetInnerHTML={ {
                    __html:
                        "\n    .background-radial-gradient {\n      background-color: hsl(218, 41%, 15%);\n      background-image: radial-gradient(650px circle at 0% 0%,\n          hsl(218, 41%, 35%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%),\n        radial-gradient(1250px circle at 100% 100%,\n          hsl(218, 41%, 45%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%);\n    }\n  "
                } }
            />
            {/* Jumbotron */ }
            <div className="px-6 py-12 text-center md:px-12 lg:text-left">
                <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div className="mt-12 lg:mt-0">
                            <h1 className="mt-0 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-[hsl(218,81%,95%)]">
                                The best offer <br />
                                <span className="text-[hsl(218,81%,75%)]">for your business</span>
                            </h1>
                            <Main_btn text="Let's Start" href="/" StyleClass="p-10"/>
                        </div>
                        <div className="hidden lg:block">
                            <img
                                src={ heroImage }
                                className="w-[60%] ms-auto"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Jumbotron */ }
        </section>
        {/* Section: Design Block */ }
    </>


);
    }


export default Hero;