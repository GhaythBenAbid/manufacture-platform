export default function CTA() {
  return (
    <section className="px-6 md:px-20 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#0A2E36] rounded-[32px] relative overflow-hidden">
          {/* Texture Overlay */}
          <div className="absolute inset-0">
            <div className="absolute left-0 top-0 w-[600px] h-[600px] bg-[linear-gradient(45deg,#66CA98_1px,transparent_1px)] bg-[length:40px_40px] opacity-5 rotate-[15deg] transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-[linear-gradient(45deg,#66CA98_1px,transparent_1px)] bg-[length:40px_40px] opacity-5 rotate-[15deg] transform translate-x-1/2 translate-y-1/2"></div>
            <div className="absolute inset-0 bg-[radial-gradient(#66CA98_1px,transparent_1px)] bg-[length:20px_20px] opacity-5"></div>
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#66CA98_1px,transparent_1px)] bg-[length:40px_40px] opacity-[0.03]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(0deg,#66CA98_1px,transparent_1px)] bg-[length:40px_40px] opacity-[0.03]"></div>
          </div>

          {/* Content */}
          <div className="relative px-8 py-16 md:p-16 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Renewal <span className="text-[#66CA98]">Now</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
              By focusing on immediate action and sustainable practices,
              we are dedicated to creating a cleaner, greener world today.
            </p>
            <button className="bg-[#66CA98] text-white px-8 py-3 rounded-full hover:bg-[#54b583] transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}