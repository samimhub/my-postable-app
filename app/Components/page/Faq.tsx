"use client"
import { Button } from "../ui/button"



export default function FAQ() {


  const handleAskQuestion = () => {
    // Replace this URL with your actual Google Form URL
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfg4dQ970E8Z54hZzbXDJ0DPjuvpm2RRjsPxph9txMFSJvjlw/viewform'
    window.open(googleFormUrl, '_blank')
  }
  return (
    <div className="w-full max-w-3xl mx-auto space-y-6 p-6">
      <h1 className="text-4xl font-bold ">FAQ</h1>
      <p className="text-xl mb-6">
        Let&apos;s help you with some of your frequently asked questions.
      </p>
        <Button 
        variant="link"
        onClick={handleAskQuestion}
        className="p-0 h-auto font-normal">
          Ask a Question →
        </Button>
<section className="py-24">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  <div
    className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full"
  >
      <div className="">
        <div className="accordion-group">
          <div
            className="accordion pb-8 border-b border-solid border-gray-200 active"
            id="basic-heading-one-with-arrow-always-open"
          >
            <button
              className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:font-medium always-open"
              aria-controls="basic-collapse-one-with-arrow-always-open"
            >
              <h5 >How to create an account?</h5>
              <svg
                className="text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <div
              id="basic-collapse-one-with-arrow-always-open"
              className="accordion-content max-h-[100px] w-full px-0 overflow-hidden pr-4 active"
              aria-labelledby="basic-heading-one-with-arrow-always-open"
            >
              <p className="text-base font-normal text-gray-600 ">
                To create an account, find the Sign up or Create
                account button, fill out the registration form with your
                personal information, and click Create account or Sign
                up. Verify your email address if needed, and then log in
                to start using the platform.
              </p>
            </div>
          </div>
          <div
            className="accordion py-8 border-b border-solid border-gray-200 "
            id="basic-heading-two-with-arrow-always-open"
          >
            <button
              className="accordion-toggle group inline-flex items-center justify-between font-normal text-xl leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:font-medium"
              aria-controls="basic-collapse-two-with-arrow-always-open"
            >
              <h5>Have any trust issue?</h5>
              <svg
                className="text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <div
              id="basic-collapse-two-with-arrow-always-open"
              className="accordion-content w-full px-0 overflow-hidden pr-4"
              aria-labelledby="basic-heading-two-with-arrow-always-open"
            >
              <p className="text-base text-gray-500 font-normal">
                Our focus on providing robust and user-friendly content
                management capabilities ensures that you can manage your
                content with confidence, and achieve your content
                marketing goals with ease.
              </p>
            </div>
          </div>
          <div
            className="accordion py-8 border-b border-solid border-gray-200"
            id="basic-heading-three-with-arrow-always-open"
          >
            <button
              className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
              aria-controls="basic-collapse-three-with-arrow-always-open"
            >
              <h5>How can I reset my password?</h5>
              <svg
                className="text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <div
              id="basic-collapse-three-with-arrow-always-open"
              className="accordion-content w-full px-0 overflow-hidden pr-4"
              aria-labelledby="basic-heading-three-with-arrow-always-open"
            >
              <p className="text-base text-gray-500 font-normal">
                Our focus on providing robust and user-friendly content
                management capabilities ensures that you can manage your
                content with confidence, and achieve your content
                marketing goals with ease.
              </p>
            </div>
          </div>
          <div
            className="accordion py-8 "
            id="basic-heading-four-with-arrow-always-open"
          >
            <button
              className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
              aria-controls="basic-collapse-four-with-arrow-always-open"
            >
              <h5>What is the payment process?</h5>
              <svg
                className="text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <div
              id="basic-collapse-four-with-arrow-always-open"
              className="accordion-content w-full px-0 overflow-hidden pr-4"
              aria-labelledby="basic-heading-four-with-arrow-always-open"
            >
              <p className="text-base text-gray-500 font-normal">
                Our focus on providing robust and user-friendly content
                management capabilities ensures that you can manage your
                content with confidence, and achieve your content
                marketing goals with ease.
              </p>
            </div>
          </div>
        </div>
      </div>
  </div>
</div>
</section>
                                      
    </div>
  )
}