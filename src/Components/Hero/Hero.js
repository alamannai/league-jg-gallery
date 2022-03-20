import React from 'react';

const Hero = () =>  {
    return(
        <div className="bg-gray-200 ">
            <div className="container px-6 py-4 lg:flex lg:h-128 lg:py-16 ">
                <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
                    <div className="max-w-lg">
                        <h1 className="text-xl tracking-wide text-white text-gray-800 lg:text-3xl lg:text-4xl">
                        Personal LOL Application
                            </h1>
                        <p className="mt-4 text-gray-300 text-gray-600">
                            This project is a showcase of my learning journey with React. <br />
                            It's an app that fetch data from an external API and try to make a demo project around it.
                            I find it a nice idea to improve my knowledge with this library. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )};

export default Hero;