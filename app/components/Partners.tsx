import Image from 'next/image';

export default function Partners() {
  const partners = [
    { name: 'Brookfield', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Brookfield_Asset_Management_logo.svg/2560px-Brookfield_Asset_Management_logo.svg.png' },
    { name: 'Orsted', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/%C3%98rsted_logo.svg/2560px-%C3%98rsted_logo.svg.png' },
    { name: 'Vestas', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Vestas.svg/2560px-Vestas.svg.png' },
    // Add more partners
  ];

  return (
    <section className="py-8 px-6 md:px-20 bg-white">
      <h2 className="text-4xl font-bold mb-4 text-center">Investors & Partners</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        {partners.map((partner) => (
          <div key={partner.name} className="transition-all flex justify-center">
            <Image
              src={partner.logo}
              alt={partner.name}
              width={200}
              height={200}
              className="object-contain w-[200px] h-[200px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
} 