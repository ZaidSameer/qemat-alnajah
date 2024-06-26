import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Container from "@/components/container";
import { config } from "@/lib/config";
import ContactForm from "@/components/contact-form";
import { AtSign, FacebookIcon, PhoneCall } from "lucide-react";
import HomeCarousel from "@/components/HomeCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";
import PrimaryLink from "@/components/PrimaryLink";
import SecondaryLink from "@/components/SecondaryLink";
import Clients from "@/components/Clients";
import OurTeam from "@/components/OurTeam";
import FollowUsSection from "@/components/FollowUsSection";


const SectionImage = ({ src, alt }: { src: string, alt: string }) => {
  const sectionImageCss = "relative w-full rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl duration-300 transition-all ease-in-out";
  return (
    <Image
      src={src}
      alt={alt}
      height={500}
      width={500}
      className={sectionImageCss}
    />
  )
}


const SectionNumber = ({ number }: { number: string }) => {
  return (
    <div className="absolute top-0 left-0 text-primary/30 z-[1] text-[9rem] font-bold">{number}</div>
  )
}

export default function Home() {
  const { images } = config;

  return (
    <main>
      <HomeCarousel />

      <section id="about" className="py-20 bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="mb-8 lg:flex-3 lg:justify-start lg:mb-0">
              <SectionImage src={images.teamMembers.src} alt="Company Overview" />
            </div>
            <div className="flex flex-col justify-center flex-1 lg:flex-2">
              <span className="mb-3 text-xs tracking-widest uppercase text-primary">
                An Innovative Company that Delivers on Expectations
              </span>
              <h2 className="text-3xl font-bold mb-5">An Overview</h2>
              <p className="text-gray-600 leading-snug text-bass">
                {config.title} Co., headquartered in the capital of Iraq, with its cutting edge management and staff are composed of Individuals with extensive experience in their respective fields of expertise and continues to rise to the challenges that rapid development in Iraqi region has generated, the diversity of disciplines of the {config.title} Co. staff and their experience in executing major projects a clear indication of the professionalism that we deliver to our clients and inspires confidence in our capability to deliver optimum project execution.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-sky-100">
        <Container>
          <span className="mb-3 text-xs tracking-widest uppercase text-primary">
            We Demand Excellence
          </span>
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <p className="mb-8">
            <strong>{config.title} Co.</strong> in Baghdad offers a wide range of services with a higher the caliber of expertise in the respective fields of General Trading, Contracting, Construction, Logistics, Cargo, International ordering, Shipping, Electrical and power equipment, and supplying different types of materials as required. Working with profit and humanitarian non-profit sector.
          </p>
          <p className="mb-8 font-semibold">
            {config.title} General Trading Company Limited is your trusted partner for a variety of business needs in Iraq. We offer a comprehensive range of products and services across three main divisions, ensuring we can meet your specific requirements
          </p>

          <div className="flex flex-col-reverse lg:flex-row gap-12 mb-12">
            <div className="flex flex-col-re justify-center flex-1 lg:flex-2 relative">
              <SectionNumber number="01" />
              <div className="relative z-[2]">
                <div className="flex items-center gap-3 mb-3">
                  {/* <div className="size-8 flex items-center justify-center rounded-full border-2 border-primary text-primary">1</div> */}
                  <h3 className="text-2xl font-semibold text-primary">Electronics and appliances</h3>
                </div>
                <p>We are the leading supplier of high-quality electronic materials and devices in Iraq. Our team is dedicated to providing the latest technology to support your needs. From basic components to complete electronic systems, we have everything you need. </p>
              </div>
            </div>

            <div className="lg:flex-3 lg:justify-start lg:mb-0">
              <SectionImage src={images.electronics.src} alt="Electronics and appliances" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 mb-12">
            <div className="lg:flex-3 lg:justify-start">
              <SectionImage src={images.modernLighting.src} alt="Modern Lighting" />
            </div>
            <div className="flex flex-col justify-center flex-1 lg:flex-2 relative">
            <SectionNumber number="02" />
              <div className="relative z-[2]">
                <div className="flex items-center gap-3 mb-3">
                  {/* <div className="size-8 flex items-center justify-center rounded-full border-2 border-primary text-primary">1</div> */}
                  <h3 className="text-2xl font-semibold text-primary">Modern electrical and lighting devices and equipment</h3>
                </div>
                <p>
                  Our second division specializes in trading and supplying a wide range of electrical materials. This includes modern lighting solutions to efficiently and aesthetically illuminate your spaces. Our experience ensures you get the right electrical equipment for your project.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row gap-12 mb-12">
            <div className="flex flex-col justify-center flex-1 lg:flex-2 relative">
            <SectionNumber number="03" />
              <div className="relative z-[2]">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-semibold text-primary">Supporting the displaced: emergency supplies to United Nations organizations</h3>
                </div>
                <p>We are the leading supplier of high-quality electronic materials and devices in Iraq. Our team is dedicated to providing the latest technology to support your needs. From basic components to complete electronic systems, we have everything you need. </p>
              </div>
            </div>

            <div className="lg:flex-3 lg:justify-start">
              <SectionImage src={images.iraqiStaffDeliveringAid.src} alt="Delivering Aid for Displaced" />
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8">... and many other services</h2>
          <div className="grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-3">
            {config.specialties.map((specialty, index) => (
              <React.Fragment key={index+specialty}>
                <PrimaryLink href="#" className="!w-full text-center !text-sm !font-normal" >{specialty}</PrimaryLink>
                {config.specialties.length === index + 1 && (
                      <>
                        <SecondaryLink href="#services" className="!max-w-full !w-full before:border-2 before:border-primary text-center" >Read more ...</SecondaryLink>
                      </>
                    )}
              </React.Fragment>
                
            ))}
          </div>
        </Container>
      </section>

      <WhyChooseUs />
      <Clients />

      <section className="pt-20 pb-10 bg-white">
        <Container className="flex-col">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 mb-4 text-sky-500">
            <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z" clipRule="evenodd"></path>
            <path fillRule="evenodd" d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z" clipRule="evenodd"></path>
          </svg>

          <div className="flex flex-col md:flex-row-reverse gap-8">

            <div className="flex-1 lg:flex-3 lg:justify-start">
              <SectionImage src={images.ourVision.src} alt="Our Vision" />
            </div>

            <div className="flex flex-col justify-center flex-1 lg:flex-2 mb-8">
              <span className="mb-2 text-xs tracking-widest uppercase text-primary">
                An Innovative Company
              </span>
              <h2 className="text-3xl font-bold mb-6">
                Our Vision
              </h2>
              <p>
                Our Vision is to be a partner of choice for customers operating in complex, mission-critical environments by providing the most innovative modelling and simulation-based solution to Enhance safety, improve efficiency, help solve challenging problems, and provide clients with up-to-date service.
              </p>
            </div>
          </div>
        </Container>
      </section>


      <section className="pb-20 pt-10 bg-white">
        <Container className="flex flex-col-reverse lg:flex-row relative">

          <div className="flex-1 lg:flex-3 lg:justify-start">
            <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
              <div className="blur-[106px] h-32 bg-gradient-to-br from-emerald-700 to-blue-700 dark:from-blue-700"></div>
              <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
            </div>
            <SectionImage src={images.visionMission.src} alt="Our Vision" />
          </div>

          <div className="flex flex-col justify-center flex-1 lg:flex-2 mb-8">
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

      <OurTeam />

      <FollowUsSection />

      <section id="contact" className="py-20 relative">
        <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
          <div className="blur-[106px] h-32 bg-gradient-to-br from-emerald-700 to-blue-700 dark:from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>

        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 z-10 relative">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold mb-4">Contact us</h2>
            <strong className="mb-3 text-primary text-base">
              {config.title} - Your partner for success in Iraq. Contact us today to discuss your specific needs!
            </strong>
            <p className="text-lg leading-6 text-gray-600 mb-12">
              If you have requests, suggestions or any other feedback, please leave a message below and we&apos;ll get back to you as soon as possible.
            </p>

            <p className="text-lg leading-6 text-gray-600 flex items-center mb-6"><PhoneCall className="me-2"/> {config.mainPhone}</p>

            <p className="text-lg leading-6 text-gray-600 flex items-center"><AtSign className="me-2"/> {config.mainEmail}</p>
          </div>
          <ContactForm />
        </Container>
      </section>
    </main>
  );
}
