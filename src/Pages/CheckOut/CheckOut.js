import React from "react";
import images1 from "../../Assets/image/image3.jpg";
import image2 from "../../Assets/image/images1.jpg";

import image3 from "../../Assets/image/image2.jpg";

const CheckOut = ({ data }) => {
  console.log(data);

  return (
    <div>
      <div className="carde-group flex gap-7 justify-center pt-8">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={images1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-gray-300">UI/UX crushed course</h2>
            <p>
              <div className="flex items-center mt-2.5 mb-5">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>First star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>Second star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>Third star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>Fourth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>Fifth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  5.00
                </span>
              </div>
            </p>
            <div className="card-actions justify-end">
              <div className="btn btn-outline text-gray-500">Get This</div>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={image3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-gray-300">
              UX Learning crushed course
            </h2>
            <p>
              <div className="flex items-center mt-2.5 mb-5">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>First star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>Second star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>Third star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>Fourth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>Fifth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  5.00
                </span>
              </div>
            </p>
            <div className="card-actions justify-end">
              <div className="btn btn-outline text-gray-500">Get This</div>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={image2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-gray-300">
              UI/UX crushed course using good experience
            </h2>
            <p>
              <div className="flex items-center mt-2.5 mb-5">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>First star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>Second star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>Third star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>Fourth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>Fifth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  5.00
                </span>
              </div>
            </p>
            <div className="card-actions justify-end">
              <div className="btn btn-outline text-gray-500">Get This</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <section class="relative z-20 overflow-hidden bg-dark pt-2 pb-12 lg:pt-[20px] lg:pb-[90px]">
          <div class="container mx-auto">
            <div class="-mx-4 flex flex-wrap">
              <div class="w-full px-4">
                <div class="mx-auto mb-[60px] max-w-[510px] text-center mt-10 lg:mb-20">
                  <h2 class="text-gray-400 mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                    Our Pricing Plan
                  </h2>
                  <p class="text-body-color text-base text-gray-300">
                    There are many variations of pricing available Please select
                    at least one
                  </p>
                </div>
              </div>
            </div>
            <div class="-mx-4 flex flex-wrap justify-center">
              <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                <div class="border-primary shadow-pricing relative z-10 mb-10 overflow-hidden rounded-xl border border-opacity-20 bg-white py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12">
                  <span class="text-primary mb-4 block text-lg font-semibold">
                    Basic
                  </span>
                  <h2 class="text-dark mb-5 text-[42px] font-bold">
                    $59
                    <span class="text-body-color text-base font-medium">
                      {" "}
                      / year{" "}
                    </span>
                  </h2>
                  <p class="text-body-color mb-8 border-b border-[#F2F2F2] pb-8 text-base">
                    Perfect for using learning basic.
                  </p>
                  <div class="mb-7">
                    <p class="text-body-color mb-1 text-base leading-loose">
                      Full lecture
                    </p>
                    <p class="text-body-color mb-1 text-base leading-loose">
                      full question solve
                    </p>
                    <p class="text-body-color mb-1 text-base leading-loose">
                      Lifetime access : no
                    </p>
                    <p class="text-body-color mb-1 text-base leading-loose">
                      Free updates
                    </p>
                    <p class="text-body-color mb-1 text-base leading-loose">
                      Use at once
                    </p>
                    <p class="text-body-color mb-1 text-base leading-loose">
                      3 Months support
                    </p>
                  </div>
                </div>

                {/* The button to open modal */}
                <label htmlFor="my-modal" className="btn modal-button">
                  Choose Basic
                </label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations</h3>

                    <div className="modal-action">
                      <label htmlFor="my-modal" className="btn">
                        Done
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                <div class="border-primary shadow-pricing relative z-10 mb-10 overflow-hidden rounded-xl border border-opacity-20 bg-white py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12">
                  <span class="text-primary mb-4 block text-lg font-semibold">
                    Standard
                  </span>
                  <h2 class="text-dark mb-5 text-[42px] font-bold">
                    $199
                    <span class="text-body-color text-base font-medium">
                      {" "}
                      / year{" "}
                    </span>
                  </h2>
                  <p class="text-body-color mb-8 border-b border-[#F2F2F2] pb-8 text-base">
                    Perfect for using to know more and more
                  </p>
                  <div class="mb-7">
                    <p class="text-body-color mb-1 text-base leading-loose">
                      Full lecture
                    </p>
                    <p class="text-body-color mb-1 text-base leading-loose">
                      Full Recording
                    </p>
                    <p class="text-body-color mb-1 text-base leading-loose">
                      Lifetime access : no
                    </p>
                    <p class="text-body-color mb-1 text-base leading-loose">
                      Free updates
                    </p>
                    <p class="text-body-color mb-1 text-base leading-loose">
                      Use on 2 week per month
                    </p>
                    <p class="text-body-color mb-1 text-base leading-loose">
                      4 Months support
                    </p>
                  </div>
                  {/* The button to open modal */}
                  <label htmlFor="my-modal" className="btn modal-button">
                    Choose Standard
                  </label>

                  {/* Put this part before </body> tag */}
                  <input
                    type="checkbox"
                    id="my-modal"
                    className="modal-toggle"
                  />
                  <div className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">Congratulations !</h3>

                      <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">
                          Done
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                <div class="border-primary shadow-pricing relative z-10 mb-10 overflow-hidden rounded-xl border border-opacity-20 bg-white py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12">
                  <span class="text-primary mb-4 block text-lg font-semibold">
                    Professional
                  </span>
                  <h2 class="text-dark mb-5 text-[42px] font-bold">
                    $256
                    <span class="text-body-color text-base font-medium">
                      {" "}
                      / year{" "}
                    </span>
                  </h2>
                  <p class="text-body-color mb-8 border-b border-[#F2F2F2] pb-8 text-base">
                    Perfect for using in a Professional Pack.
                  </p>
                  <div class="mb-7">
                    <p class="text-body-color mb-1 text-base leading-loose">
                      Unlimited Users
                    </p>
                    <p class="text-body-color mb-1 text-base leading-loose">
                      All lecture
                    </p>
                    <p class="text-body-color mb-1 text-base leading-loose">
                      Lifetime access
                    </p>
                    <p class="text-body-color mb-1 text-base leading-loose">
                      Free updates
                    </p>
                    <p class="text-body-color mb-1 text-base leading-loose">
                      unlimited question answer
                    </p>
                    <p class="text-body-color mb-1 text-base leading-loose">
                      12 Months support
                    </p>
                  </div>
                </div>

                {/* The button to open modal */}
                <label htmlFor="my-modal" className="btn modal-button">
                  Choose Professional
                </label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations!</h3>

                    <div className="modal-action">
                      <label htmlFor="my-modal" className="btn">
                        Done
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CheckOut;
