import React from "react";
import {SocialIcon}  from 'react-social-icons';

function WorkDescription(){
    return(
        <div className="bg-white">
            <h1 className="h-auto py-2 px-3 flex justify-around font-bold ">With this work, I explored Research Mode Sensors (Accelerometer, Gyroscope, Magnetometer), Eye Tracking and Head Tracking sensors in HoloLens2.</h1>
            <p className="h-auto py-2 px-3 justify-around "> 
                <h1 className="font-bold">Project Description - </h1>In the past few years, we have seen people becoming
                more interested in the various applications of AR-VR domain.
                Not only that, big internet companies have started investing
                more for AR-VR projects. User’s physical movements and
                characteristics are continuously monitored in AR-VR systems
                to build an immersive experience for the user. The applications
                are not only limited to games and fitness, but the area has
                expanded to medical, military use, and even for simulating outer
                space environment. All these things are possible only because a
                variety of sensors are deployed in the AR-VR devices. HoloLens2,
                developed by Microsoft is one of the most popular AR/MR devices
                available in the market. In this paper, I present HoloAuth - a
                sensor streaming application and user identification system in
                HoloLens2 and show how some sensor data can be utilized to
                eventually uniquely identify a person by only based on their head
                movements. Gyroscope based SVM model achieves around 94%
                accuracy in identifying a user and also in identifying a specific
                head gesture made by a particular user. Using head origin data,
                HoloAuth achieves respectively 89% and 78% accuracy for the
                cases mentioned above.
            </p>
            
            <p className="h-auto py-2 px-3 justify-around "> 
                <p className="font-bold"> Related Work - </p>
                <a className="text-blue-900" target="_blank" rel="noreferrer" href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7524542">GlassGesture: Exploring Head Gesture Interface of
Smart Glasses - </a>
                <p>This paper demonstrates a system that can
                recognize user’s head gesture and authenticate a user using
                combination of security questions and user head movement
                in Google Glass. They report high accuracy in identifying
                user by training one-class SVM classifier using gyroscope
                and accelerometer data based on user’s head movement. This
                paper primarily motivated me in exploring the research mode
                sensors data to identify users based on their head movements
                in HoloLens2.</p>
            </p>
            <h1 className="h-auto py-2 px-3 justify-around font-bold"> My Contribution - </h1>
            <a className=" h-auto py-2 px-3 text-blue-900" target="_blank" rel="noreferrer" href="https://github.com/chandms/HoloLens2-ResearchMode-Unity/blob/master/Project%20Report/Final_Project_Report.pdf"> Checkout My Final Project Report </a>
            <br></br>
            <a className=" h-auto py-2 px-3  text-blue-900" target="_blank" rel="noreferrer" href="https://github.com/chandms/HoloLens2-ResearchMode-Unity"> GitHub Repo Link </a>
            <br></br>
            <p className=" h-auto py-2 px-3">YouTube Presentation <SocialIcon url="https://www.youtube.com/watch?v=PS_Ul74HlYs"/> </p>
        </div>
    );
}

export default function SensorStreaming(){
    return (
        <div>
            <p className="h-auto py-2 bg-gradient-to-l from-sky-500 to-indigo-500 m-auto flex justify-around font-mono font-bold text-lg shadow-lg"> HoloLens2 Sensor Streaming Application & User Identification </p>
            <br></br>
            <div className="h-auto py-2 flex justify-around font-serif font-bold text-lg shadow-lg">
            <p> Bonus project work for <a className="underline text-violet-950" target="_blank" rel="noreferrer" href="https://www.cs.purdue.edu/homes/chunyi/teaching/cs536-sp23/cs536-sp23.html">CS536: Data Communication And Computer Networks (Spring 2023)</a> class </p>
            </div>
            <div>
                <WorkDescription/>
            </div>
        </div>
    );
}