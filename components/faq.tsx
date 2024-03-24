const FAQ = () => {
    return (
        <section className="mt-14 md:max-w-[70vw] mx-auto">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 mb-8">
            Here are some of our FAQs. If you have any other questions
            you&apos;d like answered please feel free to contact me.
          </p>
          <div className="space-y-4">
            <details className="w-full border rounded-lg">

              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                What is Inators UI?
              </summary>

              <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
                Inators UI is a free, open-source collection of UI elements based on Tailwind CSS, shadcn/ui and inspired from MambaUI that make it easy for anyone to build a next.js 14 web-app in minutes. Whether you&apos;re looking to create an e-commerce website or a personal blog, Inators UI have all the elements you need to get started right away...
              </p>
            </details>

            <details className="w-full border rounded-lg">

              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                Will it support server side components in next.js 14?
              </summary>

              <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
                Yes, it is 100% compatible with next.js 14 without making and component client side.
              </p>

            </details>

            <details className="w-full border rounded-lg">

              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                Some of the components don&apos;t seem to work. Is something
                broken?
              </summary>

              <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
                Just install necessary dependencies and try again, if it is not
                working than contact us via email or contact form.
              </p>

            </details>
          </div>
        </div>
      </section>
    )
}

export default FAQ