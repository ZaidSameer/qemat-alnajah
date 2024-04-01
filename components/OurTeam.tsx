
import { FC } from 'react'
import Container from './container'
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import RazzaqPhoto from '../public/team/Mr-Najeh-Razzaq.png';
import MakhaledPhoto from '../public/team/Mr-Makhaled-Ahmed.png';
import MohamedPhoto from '../public/team/Mr-Mohamed-Noman.png';

interface OurTeamProps {

}

export const CardItem = ({ image, name, description }: { image: StaticImageData, name: string, description: string }) => {
    return (
        <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="relative overflow-hidden rounded-xl">
                <Image src={image.src} alt={name} loading="lazy" width={image.width} height={image.height} className="h-64 w-full object-cover object-top transition duration-500 scale-105 group-hover:scale-110" />
            </div>
            <div className="mt-6 relative">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    {name}
                </h3>
                <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                    {description}...
                </p>
                <Link className="inline-block" href="#">
                    <span className="text-info dark:text-blue-300">Read more</span>
                </Link>
            </div>
        </div>
    )
}



const OurTeam: FC<OurTeamProps> = ({ }) => {
    return (
        <section className='py-20 bg-gray-100'>
            <Container>
                <h2 className="text-3xl font-bold mb-12">Our Team</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <CardItem image={RazzaqPhoto} name="Mr. Najeh Razzaq" description="an inspiring businessman and visionary, founded Qemat Al-Najah General Trading Company and made it a beacon of success and excellence in the world of trade" />

                    <CardItem image={MakhaledPhoto} name="Mr. Makhaled  Ahmed" description="is the sales manager of Qemat Al-Najah General Trading Company Limited for Import and Export. Mr. Mukhaled has extensive experience in the field of sales and" />

                    <CardItem image={MohamedPhoto} name="Mr. Mohamed Noman" description="is a prominent figure in the business world, as he has extensive experience in the field of public relations and marketing. He currently holds the position of Relationship Manager at" />
                </div>

            </Container>
        </section>
    )
}

export default OurTeam