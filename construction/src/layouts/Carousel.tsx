'use client'

import { MoveLeft, MoveRight } from "lucide-react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import '@splidejs/react-splide/css/core';

import Card from "@/components/Card";
import team1 from '../assets/team1.png'
import team2 from '../assets/team2.png'
import team3 from '../assets/team3.png'

export default function Cards() {
  return (
    <section className="flex flex-col py-20">
      <article id="team" className="flex flex-col py-16 gap-6 text-center items-center">
        <h2 className="font-semibold text-gray-500 text-4xl md:text-5xl leading-relaxed">Our Best Engineers</h2>
        <p className="font-medium text-gray-300 text-base md:text-lg w-11/12 md:w-7/12">
          Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.
        </p>
      </article>

      {/* Caurosel */}
      <Splide
        hasTrack={false}
        tag="section"
        options={{
          perPage: 3,
          perMove: 1,
          gap: 20,
          keyboard: true,
          drag: true,
          breakpoints: {
            640: {
              perPage: 1,
              gap: 0
            },
            1024: {
              perPage: 2,
              gap: 10
            }
          }
        }}
      >
        <SplideTrack className="py-8">
          <SplideSlide>
            <Card className="mx-auto" srcImage={team1} name="Chris Evans" city="Michigan, TX" number="989-653-2986" email="chrisevans@cons.com" />
          </SplideSlide>
          <SplideSlide>
            <Card className="mx-auto" srcImage={team2} name="Alison Kiara" city="Michigan, TX" number="999-000-2986" email="alisonkiara@cons.com" />
          </SplideSlide>
          <SplideSlide>
            <Card className="mx-auto" srcImage={team3} name="Adam Gates" city="Michigan, TX" number="911-653-2986" email="adamgates@cons.com" />
          </SplideSlide>
          <SplideSlide>
            <Card className="mx-auto" srcImage={team1} name="Paul Bridge" city="Michigan, TX" number="909-653-2006" email="pbridge@cons.com" />
          </SplideSlide>
          <SplideSlide>
            <Card className="mx-auto" srcImage={team2} name="Sara Storm" city="Michigan, TX" number="911-111-2986" email="sarastorm@cons.com" />
          </SplideSlide>
        </SplideTrack>

        {/* Custom Arrows */}
        <div className="splide__arrows flex items-center justify-center gap-1 bg-white w-24 py-2 shadow-lg rounded-full mx-auto">
          <button className="splide__arrow splide__arrow--prev w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full">
            <MoveLeft size={24} className="text-black" />
          </button>
          <button className="splide__arrow splide__arrow--next w-10 h-10 flex items-center justify-center bg-cyan-500 rounded-full">
            <MoveRight size={24} className="text-white" />
          </button>
        </div>
      </Splide>
    </section>
  )
}