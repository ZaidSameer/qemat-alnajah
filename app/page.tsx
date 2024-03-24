
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "../public/hero-bg.jpg";
import OverviewImage from "../public/overview-bg.jpg";
import MedicalImage from "../public/medical-bg.jpg";
import Container from "@/components/container";

export const specialties = [
  "Construction",
  "Medical Support Services",
  "Supply Contracting",
  "Trading",
  "Contracting",
  "Food Items",
  "None-Food Items",
  "Rental Services",
  "Manpower & Packaging",
];

export default function Home() {
  return (
    <main>
      <section className="relative" style={{ backgroundImage: `url(${HeroImage.src})` }}>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-white/50 z-[1]" />
        <Container>

          <div className="flex min-h-[calc(100vh-4rem)] flex-col justify-center text-center rounded-sm lg:text-left leading-snug relative z-10">

            <p className="mb-2 text-base text-primary">Since 2005</p>
            <h1 className="text-6xl font-bold sm:text-5xl leading-snug">
              <span className="text-primary leading-snug"> QEMAH AL-NAJAH Co. </span>
            </h1>
            <p className="mb-4 text-3xl font-bold sm:mb-8 leading-snug">
              General Trading & Supply Contracting
            </p>{" "}
            <div className="flex justify-center items-center md:justify-start w-full md:max-w-3xl">
              <div className="mb-8 text-lg leading-snug text-gray-600">
                Qemah Al-Najah Co. It is the name behind many Iraq’s most advanced and prestigious facilities. The
                company was established in 1998. And it is headquartered in Baghdad. Over the years, the group has
                un- retaken many challenging projects and accumulated skills.
              </div>

            </div>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link href="/contact" className={cn(buttonVariants({ variant: "default" }))}>
                Contact us
              </Link>
              <Link href="/about" className={cn(buttonVariants({ variant: "secondary" }))}>
                Read more
              </Link>
            </div>
          </div>

        </Container>
      </section>

      {/* features section */}

      <section className="py-20 bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="mb-8 lg:flex-3 lg:justify-start lg:mb-0">
              <Image
                src={OverviewImage}
                alt="Company Overview"
                height={500}
                width={500}
                className="rounded-sm"
              />
            </div>
            <div className="flex flex-col justify-center flex-1 px-6 lg:flex-2">
              <span className="mb-3 text-xs tracking-widest uppercase text-primary">
                We Demand Excellence
              </span>
              <h2 className="text-3xl font-bold mb-5">
                An Innovative Company that Delivers on Expectations
              </h2>
              <p className="text-gray-600 leading-snug text-bass">
                Qemah Al-Najah Co., headquartered in the capital of Iraq, with its cutting edge management and staff are composed of Individuals with extensive experience in their respective fields of expertise and continues to rise to the challenges that rapid development in Iraqi region has generated, the diversity of disciplines of the Qemah Al-Najah Co. staff and their experience in executing major projects a clear indication of the professionalism that we deliver to our clients and inspires confidence in our capability to deliver optimum project execution.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* stats */}
      <section className="py-20 bg-sky-100">
        <Container>
          <h2 className="text-3xl font-bold mb-8">We are specialized in</h2>
          <div className="grid grid-cols-2 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-3">
            {specialties.map((specialty, index) => (
              <div key={index} className="flex cursor-pointer p-4 items-center justify-center w-full h-full rounded-lg bg-primary text-white border-transparent border-2 hover:bg-transparent hover:border-primary hover:border-2 hover:text-primary transition-all duration-300 ease-linear">
                <p className="text-xl ">{specialty}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* stats */}
      <section className="pt-20 pb-10 bg-white">
        <Container className="">
          <div className="flex flex-col md:flex-row-reverse gap-8">

            <div className="mb-8 lg:flex-3 lg:justify-start lg:mb-0">
              <Image
                src={MedicalImage}
                alt=""
                height={500}
                width={500}
                className="rounded-sm h-96"
              />
            </div>
            <div className="flex flex-col justify-center flex-1 px-6 lg:flex-2">
              <span className="mb-2 text-xs tracking-widest uppercase text-primary">
                just copy paste skills required
              </span>
              <h2 className="text-3xl font-bold">
                Get the server side compatible components in one place
              </h2>
              <p className="my-6 ">
                We know it&apos;s frustrating to find an UI kit with all the
                supported components for next.js 14 and then find out that each
                element does not work with server side, so here you will find
                150+ building blocks for free. And there are many more on the
                way!
              </p>
            </div>
          </div>
        </Container>
      </section>

     
      <section className="pb-20 pt-10 bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="mb-8 lg:flex-3 lg:justify-start lg:mb-0">
              <Image
                src={OverviewImage}
                alt="Company Overview"
                height={500}
                width={500}
                className="rounded-sm"
              />
            </div>
            <div className="flex flex-col justify-center flex-1 px-6 lg:flex-2">
              <span className="mb-3 text-xs tracking-widest uppercase text-primary">
                We Demand Excellence
              </span>
              <h2 className="text-3xl font-bold mb-5">
                An Innovative Company that Delivers on Expectations
              </h2>
              <p className="text-gray-600 leading-snug text-bass">
                Qemah Al-Najah Co., headquartered in the capital of Iraq, with its cutting edge management and staff are composed of Individuals with extensive experience in their respective fields of expertise and continues to rise to the challenges that rapid development in Iraqi region has generated, the diversity of disciplines of the Qemah Al-Najah Co. staff and their experience in executing major projects a clear indication of the professionalism that we deliver to our clients and inspires confidence in our capability to deliver optimum project execution.
              </p>
            </div>
          </div>
        </Container>
      </section>


      {/* features section */}

      {/* banner section */}
      <section className="py-6 bg-primary text-gray-50 mt-14">
        <div className="container justify-center p-4 mx-auto space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-around lg:flex lg:flex-row">
          <div className="flex flex-col space-y-2 text-center lg:text-left">
            <h2 className="text-3xl font-bold leading-none">
              Follow on Facebook for more project updates
            </h2>
            <p className="px-4 text-lg lg:px-0">
              When I add something new, you will be the first to know{" "}
            </p>
          </div>
          <div className="flex flex-row items-center self-center justify-center flex-shrink-0 lg:justify-end">
            <Link href="https://facebook.com">
              <Button
                variant="outline"
                size="lg"
                className="text-black dark:text-white"
              >
                Facebook
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* banner section */}

      {/* faq section */}
      <section className="mt-14 md:max-w-[70vw] mx-auto">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 mb-8 ">
            Here are some of our FAQs. If you have any other questions
            you&apos;d like answered please feel free to contact me.
          </p>
          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                What is Inators UI?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
                Inators UI is a free, open-source collection of UI elements
                based on Tailwind CSS, shadcn/ui and inspired from MambaUI that
                make it easy for anyone to build a next.js 14 web-app in
                minutes. Whether you&apos;re looking to create an e-commerce
                website or a personal blog, Inators UI have all the elements you
                need to get started right away..{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                Will it support server side components in next.js 14?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
                Yes, it is 100% compatible with next.js 14 without making any
                component client side.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                Some of the components don&apos;t seem to work. Is something
                broken?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
                Just install necessary dependencies and try again, if it is not
                working than contact us via email or contact form.{" "}
              </p>
            </details>
          </div>
        </div>
      </section>
      {/* faq section */}
    </main>
  );
}
