import React from "react";

const FAQ = () => {
  return (
    <section
      id="faq-section"
      className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 text-gray-300">
          Frequently Asked Question
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-300 sm:text-4xl md:mx-auto">
            Some questions and answer here
          </h2>
        </div>
      </div>
      <div className="max-w-screen-xl sm:mx-auto">
        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-8">
              <div>
                <p className="mb-4 text-xl font-medium text-gray-300">
                  What is Node? How does Node work?
                </p>
                <p className="text-gray-400">
                  Node. js is a JavaScript runtime environment that achieves low
                  latency and high throughput by taking a “non-blocking”
                  approach to serving requests. In other words, Node. js wastes
                  no time or resources on waiting for I/O requests to return.
                </p>
              </div>
              <div>
                <p className="mb-4 text-xl font-medium text-gray-300">
                  How does the private route work?
                </p>
                <p className="text-gray-400">
                  The private route component is similar to the public route,
                  the only change is that redirect URL and authenticate
                  condition. If the user is not authenticated he will be
                  redirected to the login page and the user can only access the
                  authenticated routes If he is authenticated (Logged in).
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium text-gray-300">
                What is Cors?
              </p>
              <p className="text-gray-400">
                CORS stands for Cross-Origin Resource Sharing . It allows us to
                relax the security applied to an API. This is done by bypassing
                the Access-Control-Allow-Origin headers, which specify which
                origins can access the API.
              </p>
            </div>
            <div className="mt-5">
              <p className="mb-4 text-xl font-medium text-gray-300">
                Why are you using firebase? What other options do you have to
                implement authentication?
              </p>
              <p className="text-gray-400">
                Firebase helps you develop high-quality apps, grow your user
                base, and earn more money. Each feature works independently, and
                they work even better together.It is Realtime Database lets you
                build rich, collaborative applications by allowing secure access
                to the database directly from client-side code.We use STYTCH,
                Ory, Supabase, Okta, PingIdentity, Keycloak, Frontegg etc for
                implement authentication
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
