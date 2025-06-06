"use client";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import image from "../../../img/1.png";

const sliderData = [
  {
    title: "Freva – Tajribali jamoa bilan loyihalaringizni tez va sifatli",
    highlight: "yakunlang",
    description: [
      "Bugun zakaz bering – ertaga tayyor bo‘lsin!",
      "Freva jamoasi har kuni yangi loyihalar uchun tayyor.",
      "— barcha xizmatlar bir joyda.",
      "Mos xizmatni tanlang, biz tez va sifatli yakunlaymiz!",
    ],
    tags: ["Web Dizayn", "UI/UX Dizayner", "Frontend"],
    projectsCount: "10.5K",
    badgeText: "Loyihalar",
    featureText: "Tez va mukammal natija",
  },
  {
    title: "Biznesingiz uchun zamonaviy raqamli yechimlar",
    highlight: "yarating",
    description: [
      "Biznesingizni internetga olib chiqamiz.",
      "Saytlar, CRM tizimlar, mobil ilovalar – barchasi bizda.",
      "Ishonchli va tezkor yechimlar bilan ishlaymiz.",
    ],
    tags: ["Backend", "Mobil Ilovalar", "CRM"],
    projectsCount: "8.2K",
    badgeText: "Yakunlangan loyihalar",
    featureText: "Innovatsion xizmatlar",
  },
  {
    title: "Portfolio va brendingizni mukammal qiling",
    highlight: "hoziroq",
    description: [
      "Shaxsiy brendingizni kuchaytiring.",
      "Portfoliongizni professional tarzda yarating.",
    ],
    tags: ["Grafik Dizayn", "Branding", "Portfolio"],
    projectsCount: "6.7K",
    badgeText: "Yakunlangan ishlanmalar",
    featureText: "Kreativ va ta'sirchan dizayn",
  },
  {
    title: "Mobil ilovalarni ishlab chiqish endi oson",
    highlight: "Freva bilan",
    description: [
      "iOS va Android uchun ilovalar ishlab chiqamiz.",
      "Ilovalaringizni foydalanuvchilarga qulay qiling.",
    ],
    tags: ["React Native", "Flutter", "iOS/Android"],
    projectsCount: "4.9K",
    badgeText: "Mobil Loyihalar",
    featureText: "Platformalararo echimlar",
  },
  {
    title: "UI/UX dizayn orqali mijozlarni jalb qiling",
    highlight: "natija muhim",
    description: [
      "Foydalanuvchi tajribasini ustuvor qiling.",
      "UI dizayn sizning brendingizni aks ettiradi.",
    ],
    tags: ["UI/UX", "Prototyping", "Interaction"],
    projectsCount: "3.3K",
    badgeText: "Dizayn ishlari",
    featureText: "Estetik va foydali interfeyslar",
  },
  {
    title: "Freva bilan marketing strategiyangizni kuchaytiring",
    highlight: "va o‘zingizni taniting",
    description: [
      "Raqamli marketing xizmatlari endi bitta joyda.",
      "Kontent marketing, SMM, SEO va boshqalar.",
    ],
    tags: ["Marketing", "SMM", "SEO"],
    projectsCount: "5.6K",
    badgeText: "Marketing loyihalari",
    featureText: "Natijaga yo‘naltirilgan xizmat",
  },
];

const variants = {
  initial: { x: 100, opacity: 0 }, // O‘ngdan 100px tashqarida va ko‘rinmas
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1, // 1 soniya davomida
      ease: "easeOut",
    },
  },
  exit: {
    x: -100, // Chap tomonga 100px siljish
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderData.length);
    }, 10000); // 10 soniyada bir marta

    return () => clearInterval(interval);
  }, []);

  const currentSlide = sliderData[index];

  return (
    <div className="relative w-full min-h-[550px] bg-[#FFF5ED] flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex flex-col md:flex-row items-center justify-between gap-6 w-full"
        >
          {/* Chap qism */}
          <div className="flex-1 space-y-5 max-w-[600px]">
            <h1 className="text-4xl md:text-5xl font-bold leading-snug text-black">
              {currentSlide.title}{" "}
              <span className="text-[#FF9F48]">{currentSlide.highlight}</span>
            </h1>

            <div className="space-y-1 text-[rgba(79, 79, 79, 1)] text-sm md:text-base">
              {currentSlide.description.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-3 font-bold text-[#FF9F48]">
              {currentSlide.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>

            <div className="flex items-center bg-white shadow-md rounded-full mt-5 p-2 w-full max-w-md">
              <FiSearch className="text-[#FF9F48] text-xl ml-3" />
              <input
                type="text"
                placeholder="Qidirish"
                className="flex-grow px-3 py-2 outline-none rounded-full"
              />
              <button className="bg-[linear-gradient(180deg,_#F2994A_0%,_#F6BC88_100%)] text-white font-semibold px-6 py-2 rounded-full">
                Qidirish
              </button>
            </div>
          </div>

          {/* O‘ng qism */}
          <div className="relative flex-1 flex justify-center items-center min-h-[300px]">
            <div className="absolute top-0 right-5 bg-[rgba(255,253,253,0.6)]  backdrop-blur-[10.514656066894531px]e shadow-md rounded-xl p-3 flex items-center gap-2">
              <div className="text-2xl text-[#3B82F6]">📁</div>
              <div>
                <div className="text-lg font-semibold">
                  {currentSlide.projectsCount}
                </div>
                <div className="text-sm text-gray-500">
                  {currentSlide.badgeText}
                </div>
              </div>
            </div>

            <Image
              src={image}
              alt="Slider image"
              width={500}
              height={500}
              className="rounded-lg z-10"
            />

            <div className="absolute w-[180px] h-[100px] text-center z-10 bottom-20 left-10 bg-[rgba(255,253,253,0.6)] shadow-[0px_5px_10px_0px_rgba(51,48,48,0.25)] backdrop-blur-[10.514656066894531px] rounded-xl p-3 flex flex-col items-center justify-center gap-2">
              <div className="text-xl text-orange-400">⚡</div>
              <div className="text-sm text-gray-600">
                {currentSlide.featureText}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Nuqtalar */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2">
        {sliderData.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition ${
              i === index ? "bg-[#FF9F48]" : "bg-[#FFD4A8]"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
