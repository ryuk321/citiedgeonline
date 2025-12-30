export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg"></div>
          <span className="text-xl font-bold text-gray-900 dark:text-white">Citiedge</span>
        </div>
        <div className="hidden md:flex gap-8">
          <a href="#solutions" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Solutions</a>
          <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Features</a>
          <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">About</a>
          <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>
        </div>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </nav>
  );
}
