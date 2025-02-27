import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'Renewable\nEnergy Solutions',
      description: 'Embrace the power of clean energy with our advanced renewable solutions. From solar panels to wind turbines, we provide cutting-edge technologies.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop',
      link: '#',
    },
    {
      title: 'Eco-Friendly\nManufacturing',
      description: 'Transform your production processes with our sustainable manufacturing solutions.',
      image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?q=80&w=2070&auto=format&fit=crop',
      link: '#',
    },
    {
      title: 'Environmental\nConsulting\nServices',
      description: 'Navigate the complexities of environmental regulations with our expert consulting services. We provide comprehensive assessments and strategic planning.',
      image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=2070&auto=format&fit=crop',
      link: '#',
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-white relative">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#66CA98_1px,transparent_1px)] bg-[length:40px_40px] opacity-[0.03]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#66CA98_1px,transparent_1px)] bg-[length:40px_40px] opacity-[0.03]"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-5xl font-bold">
              Providing<br />
              Best Services
            </h2>
          </div>
          <div>
            <p className="text-gray-600">
              We are dedicated to providing the best services in the sustainability manufacturing industry. 
              Our commitment to excellence is reflected in our innovative practices, cutting-edge technology, 
              and a passionate team of experts.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          {services.map((service) => (
            <div 
              key={service.title}
              className="group border-t border-gray-100 hover:bg-[#0A2E36] first:border-none first:pt-0 rounded-2xl transition-all duration-300"
            >
              <Link 
                href={service.link}
                className="flex flex-col md:flex-row items-start gap-8 p-4"
              >
                <div className="w-full md:w-[280px] shrink-0">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-grow flex items-center justify-between gap-8">
                  <div>
                    <h3 className="text-3xl font-semibold mb-4 whitespace-pre-line group-hover:text-white transition-colors duration-300">{service.title}</h3>
                    <p className="text-gray-600 max-w-xl group-hover:text-white/90 transition-colors duration-300">{service.description}</p>
                  </div>

                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-white group-hover:text-[#66CA98] group-hover:border-white transition-all duration-300">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 