import Image from "next/image";
import Card from "@/components/Card";
import team from '../assets/team1.png'

export default function Cards() {
  return (
    <section className="flex flex-col py-20">
      <article id="team" className="flex flex-col py-16 gap-6 text-center items-center">
        <h2 className="font-semibold text-gray-500 text-5xl leading-relaxed">Our Best Engineers</h2>
        <p className="font-medium text-gray-300 text-lg w-7/12">
          Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.
        </p>
      </article>
      <article className="flex justify-between w-full">
        <Card srcImage={team} name="Chris Evans" city="Michigan, TX" number="989-653-2986" email="chrisevans@cons.com" />
        <Card srcImage={team} name="Chris Evans" city="Michigan, TX" number="989-653-2986" email="chrisevans@cons.com" />
        <Card srcImage={team} name="Chris Evans" city="Michigan, TX" number="989-653-2986" email="chrisevans@cons.com" />
      </article>
    </section>
  )
}
