export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Building the{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Smart Cities
          </span>{" "}
          of Tomorrow
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
          Citiedge Online delivers cutting-edge digital infrastructure and smart city solutions 
          for modern urban environments. Transform your city with intelligent technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-blue-600 text-white text-lg rounded-full hover:bg-blue-700 transition shadow-lg hover:shadow-xl">
            Explore Solutions
          </button>
          <button className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-lg rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition border border-gray-200 dark:border-gray-700">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}
