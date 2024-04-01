import ContactForm from "@/components/contact-form";
import Container from "@/components/container";

const Page = () => {
  return (
      <section className="mt-20">
        <div className="bg-primary py-20 text-center text-white">
          <h2 className="text-7xl font-extrabold leading-loose tracking-tight">
            Services
          </h2>
        </div>
        <Container>
        <div className="text-center  text-white py-20">
        </div>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            If you have requests, suggestions or any other feedback, please
            leave a message below and we&apos;ll get back to you as soon as
            possible.
          </p>
        </Container>
      </section>
  );
};

export default Page;
