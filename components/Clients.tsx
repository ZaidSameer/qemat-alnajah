import { FC } from 'react'
import Container from './container'
import { config } from '@/lib/config';
import Image from 'next/image';

interface ClientsProps {}

const Clients: FC<ClientsProps> = () => {

    const {clientsImages} = config;
    const {hid, ariTech, ipixa, lenels2} = clientsImages;
    const css = "p-4 grayscale transition duration-200 hover:grayscale-0 shadow bg-white hover:bg-gray-50 flex justify-center items-center rounded-xl";

    return (
        <section className='py-20 bg-gray-100'>
            <Container>
            <span className="mb-3 text-xs tracking-widest uppercase text-primary">
                Powerful partners
              </span>
                <h2 className='mb-10 text-3xl font-bold'>Our Pioneering Brands</h2>
                <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-6">
                    <div className={css}>
                        <Image src={hid.src} className="h-20 w-auto mx-auto" loading="lazy" alt="HID logo" width={hid.width} height={hid.height} />
                    </div>
                    <div className={css}>
                        <Image src={ipixa.src} className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width={ipixa.width} height={ipixa.height} />
                    </div>
                    <div className={css}>
                        <Image src={ariTech.src} className="h-20 w-auto m-auto" loading="lazy" alt="client logo" width={ariTech.width} height={ariTech.height} />
                    </div>
                    <div className={css}>
                        <img src={lenels2.src} className="h-20 w-auto mx-auto" loading="lazy" alt="client logo" width={lenels2.width} height={lenels2.height} />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Clients