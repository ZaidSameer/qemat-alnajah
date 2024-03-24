import ContactForm from "@/components/contact-form";

const Page = () => {
  return (
    <>
      <div className="h-screen w-screen items-center flex justify-center flex-col md:max-w-[40vw] mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold leading-loose tracking-tight sm:text-4xl">
            Contact us
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            If you have requests, suggestions or any other feedback, please
            leave a message below and we&apos;ll get back to you as soon as
            possible.
          </p>
        </div>
        <ContactForm />
      </div>
    </>
  );
};

export default Page;
