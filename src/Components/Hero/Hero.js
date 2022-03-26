import React from 'react';

const Hero = () =>  {
    return(
        <div className="bg-primary">
            <div className="container px-6 py-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 
                    lg:grid-cols-2 xl:grid-cols-2 gap-3">
                <div className="w-full">
                    <div className="max-w mt-12">
                        <h1 className="text-xl tracking-wide text-white lg:text-3xl lg:text-4xl">
                        Personal LOL Application
                            </h1>
                        <p className="mt-4 text-gray-600 ">
                            This project is a showcase of my learning journey with React. <br />
                            It's an app that fetch data from an external API and try to make a demo project around it.
                            I find it a nice idea to improve my knowledge with this library. 
                        </p>
                        <div className="mt-6">
                    <a href="#"
                        className="block px-3 py-2 font-semibold text-center text-primary 
                        transition-colors duration-200 transform bg-yellow-300 rounded-md 
                        lg:inline hover:bg-yellow-100">
                            Link
                    </a>
                </div>
                    </div>
                </div>

                    <img className="place-self-center rounded-md grow max-w-sm max-h-sm "
                src="./Emblem_Challenger.png" alt="apple" />
     
            </div>
        </div>
    )};

export default Hero;