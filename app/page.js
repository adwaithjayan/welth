import Hero from "@/components/hero";
import {featuresData, statsData, testimonialsData} from "@/data/landing";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <div className='mt-40'>
          <Hero/>
          <section className='py-20 bg-blue-50'>
              <div className='container mx-auto px-4'>
                  <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                      {statsData.map((item, i) => (
                          <div className='text-center' key={i}>
                              <div className='text-4xl font-bold text-blue-600 mb-2'>{item.value}</div>
                              <div className='text-gray-600'>{item.label}</div>
                          </div>
                      ))}
                  </div>
              </div>
          </section>
          <section id="features" className="py-20">
              <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold text-center mb-12">
                      Everything you need to manage your finances
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {featuresData.map((feature, index) => (
                          <Card className="p-6" key={index}>
                              <CardContent className="space-y-4 pt-4">
                                  {feature.icon}
                                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                                  <p className="text-gray-600">{feature.description}</p>
                              </CardContent>
                          </Card>
                      ))}
                  </div>
              </div>
          </section>
          <section id="testimonials" className="py-20">
              <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold text-center mb-16">
                      What Our Users Say
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {testimonialsData.map((testimonial, index) => (
                          <Card key={index} className="p-6">
                              <CardContent className="pt-4">
                                  <div className="flex items-center mb-4">
                                      <Image
                                          src={testimonial.image}
                                          alt={testimonial.name}
                                          width={40}
                                          height={40}
                                          className="rounded-full"
                                      />
                                      <div className="ml-4">
                                          <div className="font-semibold">{testimonial.name}</div>
                                          <div className="text-sm text-gray-600">
                                              {testimonial.role}
                                          </div>
                                      </div>
                                  </div>
                                  <p className="text-gray-600">{testimonial.quote}</p>
                              </CardContent>
                          </Card>
                      ))}
                  </div>
              </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-blue-600">
              <div className="container mx-auto px-4 text-center">
                  <h2 className="text-3xl font-bold text-white mb-4">
                      Ready to Take Control of Your Finances?
                  </h2>
                  <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                      Join thousands of users who are already managing their finances
                      smarter with Welth
                  </p>
                  <Link href="/dashboard">
                      <Button
                          size="lg"
                          className="bg-white text-blue-600 hover:bg-blue-50 animate-bounce"
                      >
                          Start Free Trial
                      </Button>
                  </Link>
              </div>
          </section>

</div>
)
    ;
}
