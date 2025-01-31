const testimonials = [
  {
    quote: "This app has completely transformed how I manage my freelance business. The tax calculations alone have saved me hours of work.",
    author: "Sarah Johnson",
    role: "Graphic Designer",
  },
  {
    quote: "The invoice tracking and automatic reminders have helped me get paid faster. It's like having a personal assistant.",
    author: "Michael Chen",
    role: "Web Developer",
  },
  {
    quote: "As a sole trader, keeping track of expenses was always a headache. Now it's all automated and organized.",
    author: "Emma Thompson",
    role: "Marketing Consultant",
  },
];

export const Testimonials = () => {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Trusted by Freelancers
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See what other freelancers and sole traders are saying about our platform.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="animate-fade-up rounded-xl bg-white p-8 shadow-lg [animation-delay:var(--delay)]"
              style={{ "--delay": `${index * 200}ms` } as React.CSSProperties}
            >
              <div className="relative">
                <svg
                  className="absolute -left-3 -top-3 h-8 w-8 text-gray-200"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative mt-4 text-lg text-gray-600">{testimonial.quote}</p>
              </div>
              <div className="mt-6">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};