import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "../public/hero-bg.jpg";
import OverviewImage from "../public/overview-bg.jpg";
import MedicalImage from "../public/medical-bg.jpg";
import AgricultureImage from "../public/agriculture-bg.jpg";
import Container from "@/components/container";
import { config } from "@/lib/config";
import ContactForm from "@/components/contact-form";
import { FacebookIcon } from "lucide-react";

export default function Home() {
  return (
    <main>
      <section id="home" className="relative" style={{ backgroundImage: `url(${HeroImage.src})` }}>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-white/50 z-[1]" />
        <Container>
          <div className="flex min-h-screen flex-col justify-center text-center lg:text-left leading-snug relative z-10 pt-20">
            <p className="mb-2 text-base text-primary">Since 2005</p>
            <h1 className="text-4xl font-bold sm:text-5xl leading-snug">
              <span className="text-primary leading-snug"> {config.title} </span>
            </h1>
            <p className="mb-4 text-3xl font-bold sm:mb-8 leading-snug">
              General Trading & Supply Contracting Company
            </p>{" "}
            <div className="flex justify-center items-center md:justify-start w-full md:max-w-3xl">
              <div className="mb-8 text-lg leading-snug text-gray-600">
                <strong className="text-black">Qemah Al-Najah Co.</strong>  It is the name behind many Iraq’s most advanced and prestigious facilities. The
                company was established in 1998. And it is headquartered in Baghdad. Over the years, the group has
                un- retaken many challenging projects and accumulated skills.
              </div>

            </div>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link href="#contact" className={cn(buttonVariants({ variant: "default" }))}>
                Contact us
              </Link>
              <Link href="#about" className={cn(buttonVariants({ variant: "secondary" }))}>
                Read more
              </Link>
            </div>
          </div>

        </Container>
      </section>

      {/* features section */}

      <section id="about" className="py-20 bg-white">
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
            <div className="flex flex-col justify-center flex-1 lg:flex-2">
              <span className="mb-3 text-xs tracking-widest uppercase text-primary">
                An Innovative Company that Delivers on Expectations
              </span>
              <h2 className="text-3xl font-bold mb-5">An Overview</h2>
              <p className="text-gray-600 leading-snug text-bass">
                Qemah Al-Najah Co., headquartered in the capital of Iraq, with its cutting edge management and staff are composed of Individuals with extensive experience in their respective fields of expertise and continues to rise to the challenges that rapid development in Iraqi region has generated, the diversity of disciplines of the Qemah Al-Najah Co. staff and their experience in executing major projects a clear indication of the professionalism that we deliver to our clients and inspires confidence in our capability to deliver optimum project execution.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* stats */}
      <section id="services" className="py-20 bg-sky-100">
        <Container>
          <span className="mb-3 text-xs tracking-widest uppercase text-primary">
            We Demand Excellence
          </span>
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <p className="mb-8">
            Qemah Al-Najah Co. in Baghdad offers a wide range of services with a higher the caliber of expertise in the respective fields of General Trading, Contracting, Construction, Logistics, Cargo, International ordering, Shipping, Electrical and power equipment, and supplying different types of materials as required. Working with profit and humanitarian non-profit sector.
          </p>

          <h2 className="text-3xl font-bold mb-8">We are specialized in</h2>
          <div className="grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-3">
            {config.specialties.map((specialty, index) => (
              <div key={index} className="flex text-center cursor-pointer py-3 items-center justify-center w-full h-full rounded-lg bg-primary text-white border-transparent border-2 hover:bg-transparent hover:border-primary hover:border-2 hover:text-primary transition-all duration-300 ease-linear">
                <p className="text-base">{specialty}</p>
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
                alt="Medical Supply"
                height={500}
                width={500}
                className="rounded-sm"
                // style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div className="flex flex-col justify-center flex-1 lg:flex-2">
              <span className="mb-2 text-xs tracking-widest uppercase text-primary">
                An Innovative Company
              </span>
              <h2 className="text-3xl font-bold">
                Our Vision
              </h2>
              <p className="my-6 ">
                Our Vision is to be a partner of choice for customers operating in complex, mission-critical environments by providing the most innovative modelling and simulation-based solution to Enhance safety, improve efficiency, help solve challenging problems, and provide clients with up-to-date service.
              </p>
            </div>
          </div>
        </Container>
      </section>


      <section className="pb-20 pt-10 bg-white">
        <Container className="flex flex-col lg:flex-row gap-8">
          <div className="mb-8 lg:flex-3 lg:justify-start lg:mb-0">
            <Image
              src={AgricultureImage}
              alt="Agriculture Image"
              height={500}
              width={500}
              className="rounded-sm"
            />
          </div>

          <div className="flex flex-col justify-center flex-1 lg:flex-2">
            <span className="mb-3 text-xs tracking-widest uppercase text-primary">
              We Demand Excellence
            </span>

            <h2 className="text-3xl font-bold mb-5">Our Mission</h2>

            <p className="text-gray-600 leading-snug text-bass mb-4">
              Our mission is to give our customers satisfaction in all our services. We provide a professional, client-focused solution. As an employee-owned company, we go above and beyond every project and deliver on our promises with integrity. To be the world’s most respected and attractive company in our industry, creating value for our stakeholders.
            </p>

            <p>
              <strong>Strength:</strong> We are a solid partner for our customers and all stakeholders based on the integrity and competence of our people.
            </p>

          </div>
        </Container>
      </section>


      <section className="py-14 bg-primary text-gray-50">
        <Container className="flex items-center justify-between flex-col md:flex-row">
          <div className="flex flex-col lg:flex-row space-y-2 text-center sm:text-left mb-8 md:mb-0">
            <h2 className="text-3xl font-bold leading-none">
              Follow on Facebook for more project updates
            </h2>
            <p className="text-white/60 text-lg lg:px-0">
              When I add something new, you will be the first to know
            </p>
          </div>

          <div className="flex flex-row items-center self-center justify-center flex-shrink-0 lg:justify-end">
            <Link href={config.facebookURL}>
              <Button variant="outline" size="lg" className="text-black dark:text-white">
                Facebook <FacebookIcon className="size-5 ms-2" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      <section id="contact" className="py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold mb-4">Contact us</h2>
            <p className="text-lg leading-6 text-gray-600">
              If you have requests, suggestions or any other feedback, please
              leave a message below and we&apos;ll get back to you as soon as
              possible.
            </p>
          </div>
          <ContactForm />
        </Container>
      </section>
    </main>
  );
}
