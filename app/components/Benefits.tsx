export default function Benefits() {
  const benefits = [
    {
      title: 'Innovative Green Technologies',
      description: 'Explore our cutting-edge solutions designed to reduce environmental impact and promote sustainability.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0A2E36" viewBox="0 0 16 16">
          <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7.256A4.493 4.493 0 0 0 12.5 8a4.493 4.493 0 0 0-3.59 1.787A.5.5 0 0 0 9 9.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .39-.187A4.476 4.476 0 0 0 8.027 12H6.5a.5.5 0 0 0-.5.5V16H3a1 1 0 0 1-1-1V1zm2 4.5h6V4H4v1.5zm0 2h6V6H4v1.5zM4 9h6V7.5H4V9zm0 2h3v-1.5H4V11z"/>
          <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm.354-5.854 1.5 1.5a.5.5 0 0 1-.708.708L13 11.707V14.5a.5.5 0 0 1-1 0v-2.793l-.646.647a.5.5 0 0 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0z"/>
        </svg>
      ),
    },
    {
      title: 'Sustainable Projects',
      description: 'Delve into our portfolio of successful sustainability projects that are making a real difference.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0A2E36" viewBox="0 0 16 16">
          <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
        </svg>
      ),
    },
    {
      title: 'Community & Partnerships',
      description: 'Join a thriving network of like-minded individuals and organizations dedicated to building a sustainable future.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0A2E36" viewBox="0 0 16 16">
          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          <path fillRule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
          <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-[#F8FAF8]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Our Main Benefits</h2>
        <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          We offer innovative solutions that not only enhance environmental sustainability but also drive economic efficiency.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title} 
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-[#E8F5EE] p-3 rounded-xl w-fit mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 