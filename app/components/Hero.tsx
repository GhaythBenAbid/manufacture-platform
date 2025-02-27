import Image from 'next/image';

export default function Hero() {
  return (
    <div className="bg-[#0A2E36] min-h-screen relative">
      {/* Expert Contact Float */}
      <div className="absolute left-20 top-40 flex items-center gap-2 bg-white/10 p-3 rounded-full">
        <div className="flex -space-x-2">
          <Image 
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Expert"
            width={40}
            height={40}
            className="rounded-full hidden md:block border-2 border-white object-cover"
          />
          <Image 
            src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Expert"
            width={40}
            height={40}
            className="rounded-full hidden md:block border-2 border-white object-cover"
          />
        </div>
        <span className="text-white hidden md:block text-sm">Contact our expert</span>
      </div>

      {/* Achievement Float */}
      <div className="absolute right-20 top-40 bg-white/10 hidden md:block p-3 rounded-full">
        <div className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-trophy-fill" viewBox="0 0 16 16">
          <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"/>
        </svg>
          <span className="text-white text-sm">#1 in Renewable Industry</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 pt-32 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          We are Building a<br />
          <span className="text-[#66CA98]">Sustainable Future</span>
        </h1>
        <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto">
          Committed to innovative practices and eco-friendly solutions.
        </p>

        {/* Main Images and Stats */}
        <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/5 hidden md:block rounded-3xl p-6 backdrop-blur-sm">
            <Image 
              src="https://assets.grok.com/users/e8d06fb6-7d4b-41da-bd88-3a0c32f7b59d/9NcUWQ3MLOilFesS-generated_image.jpg"
              alt="Construction Worker"
              width={400}
              height={500}
              className="rounded-2xl h-full hidden md:block object-cover"
            />
          </div>
          <div className="bg-white/5 col-span-2 md:col-span-1 rounded-3xl p-6 backdrop-blur-sm text-left">
            <h3 className="text-2xl text-white mb-4">
              Renewable Energy,<br />
              Greener World,<br />
              <span className="text-[#66CA98]">Bright</span> Future
            </h3>
            <div className="mt-8">
              <div className="relative h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-[75%] bg-[#66CA98] rounded-full"></div>
              </div>
              <div className="mt-4">
                <span className="text-4xl font-bold text-[#66CA98]">75%</span>
                <p className="text-gray-400">Energy Savings</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Button */}
        <div className="my-32 md:my-16 text-center">
          <p className="text-gray-400 mb-4">It&apos;s free for consultation</p>
          <button className="bg-[#66CA98] text-white px-8 py-3 rounded-full hover:bg-[#54b583] inline-flex items-center gap-2">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
} 