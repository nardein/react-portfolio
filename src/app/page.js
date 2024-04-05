//--========== React Portfolio Website ==========--//

//--===== For using useState =====--//
"use client";

//--===== Imported Head =====--//
import Head from "next/head";

//--===== Imported ReactIcons =====--//
import { BsFillMoonStarsFill } from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillInstagram} from 'react-icons/ai';

//--===== Imported Image =====--//
import Image from "next/image";
import profilepic from "../app/public/dev/profilepic.png"
import figma from "../app/public/dev/3Dicons/png/figma/figma-dynamic-color.png"
import blender from "../app/public/dev/3Dicons/png/blender/blender-dynamic-color.png"
import photoshop from "../app/public/dev/3Dicons/png/adobe/adobe-photoshop.png"
import lightroom from "../app/public/dev/3Dicons/png/adobe/adobe-lightroom.png"
import illustrator from "../app/public/dev/3Dicons/png/adobe/adobe-illustrator.png"
import aftereffects from "../app/public/dev/3Dicons/png/adobe/adobe-after-effects.png"
import premiere from "../app/public/dev/3Dicons/png/adobe/adobe-premier.png"
import vscode from "../app/public/dev/3Dicons/png/adobe/visual-studio-code.png"
import { useState } from "react";


//--===== Main code =====--//
export default function Home() {
  
  //--===== Dark mode setting =====--//
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title> Leonardo Colonna Portfolio</title>
        <meta name="description" content="Generated"></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">developedbyed</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer"/>
              </li>
              <li>
                <a href="#" className="bg-gradient-to-r from-cyan-500 to-orange-500 text-white px-4 py-2 rounded-md ml-8">resume</a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">Leonardo Colonna</h2>
            <h3 className="text-2xl py-2 leading-8 text-gray-800"> Developer and Graphic Designer</h3>
            <p className="">Freelancer providing website and graphic content consulting and project</p>
          </div>
          <div className="text-3xl flex justify-center gap-16 py-3 text-blueDark">
            <AiFillTwitterCircle/>
            <AiFillInstagram/>
          </div>
          <div className="relative  mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image  src={profilepic} layout="fill" objectFit="cover"/>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 text-center">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 text-center">
            My portfolio showcases my expertise in <span className="text-teal-500">3D modeling</span>, graphic design, and minimalist <span className="text-teal-500">website development</span>. <br></br>
             I take pride in crafting each project to meet the specific <span className="text-teal-500">needs of my clients</span>, from concept to completion. <br></br>
            Let's bring your ideas to life with stunning visuals and <span className="text-teal-500">functional designs</span>.
            </p>
          </div>
          <div>
            <div className=" bg-gradient-to-t from-blueDark to-cyan-500 text-center shadow-lg p-10 rounded-xl my-10">
              <h1 className="text-3xl font-bold pb-8 text-white">Skills</h1>
              <div className="flex justify-center py-4">
              <Image src={figma}   width={100} height={100} className="mx-auto" />
              <Image src={blender} width={100} height={100} className="mx-auto" />
              <Image src={photoshop}  width={100} height={100} className="mx-auto" />
              <Image src={lightroom}  width={100} height={100} className="mx-auto" />
              <Image src={illustrator}  width={100} height={100} className="mx-auto" />
              <Image src={aftereffects}  width={100} height={100} className="mx-auto" />
              <Image src={premiere}  width={100} height={100} className="mx-auto" />
              <Image src={vscode}  width={100} height={100} className="mx-auto" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
    );
}
