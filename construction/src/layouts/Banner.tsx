import Image from 'next/image'
import Button from '@/components/Button'
import TotalNumbers from '@/components/TotalNumbers'
import hero from '../assets/hero.png'

export default function Banner() {
  const totalClientsAndServices = {
    "data": {
      "1": {
        number: '25,356',
        content: 'Projects Done',
        color: 'bg-orange-500'
      },
      "2": {
        number: '15,200',
        content: 'Buildings Done',
        color: 'bg-cyan-500'
      },
      "3": {
        number: '350+',
        content: 'Total Employees',
        color: 'bg-green-500'
      },
    }
  }

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

        <div className="flex gap-10">
          {Object.values(totalClientsAndServices.data).map(({ number, content, color }) => (
            <div key={number} className="relative flex flex-col gap-2">
              <div className={`relative top-0 left-0 transform -translate-x-1/3 -translate-y-1/4 w-10 h-10 rounded-full ${color}`} />
              <span className="absolute text-4xl font-medium">
                {number}
              </span>
              <span className="text-gray-300 text-xl leading-normal">
                {content}
              </span>
            </div>
          ))}
        </div>
      </article>

      <article>
        <div className="-mt-[6.5rem] -mr-10">
          <Image src={hero} alt='' priority className="max-w-full" />
        </div>
      </article>
    </section>
  )
}
