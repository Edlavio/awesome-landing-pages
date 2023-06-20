import Image from 'next/image'
import Button from '@/components/Button'
import TotalNumbers from '@/components/TotalNumbers'
import hero from '../assets/hero.png'

export default function Banner() {
  return (
    <section className="grid grid-cols-2">
      <article className="flex flex-col mt-8 gap-28">
        <div className="flex flex-col gap-8">
          <h2 className="font-bold text-6xl text-gray-500 leading-tight">
            <span className="text-cyan-500">
              Masters</span> of Consistency and <span className="text-cyan-500">Quality
            </span>.
          </h2>
          <p className="text-lg font-normal">
            Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.
          </p>
          <div className="flex gap-4">
            <Button>Explore</Button>
            <Button color="outline">Contact Us</Button>
          </div>
        </div>
        <TotalNumbers/>
      </article>

      <article>
        <div className="-mt-[6.5rem] -mr-10">
          <Image src={hero} alt='' className="w-full" />
        </div>
      </article>
    </section>
  )
}
