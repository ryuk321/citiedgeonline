"use client";
import Footer from "./components/Footer"
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Home() {
  const router = useRouter();
  const goToAdmissions = () => {
    router.push('https://admissions.citiedgecollege.co.uk/');
  }
  const goToBrowse = () => {
  router.push('https://citiedgecollege.co.uk/course-lists');
};



  return (
//     <div className="min-h-screen bg-white dark:bg-gray-900">
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 z-50 shadow-sm">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
//   <img
//     src="/citiedge-logo.png"
//     alt="CITIEDGE Logo"
//     className="w-full h-full object-cover"
//   />
// </div>

//             <div>
//               <span className="text-xl font-bold text-gray-900 dark:text-white block">Citiedge</span>
//               <span className="text-xs text-gray-600 dark:text-gray-400">International College</span>
//             </div>
//           </div>
//           <div className="hidden lg:flex gap-8">
//             <a href="#programmes" className="text-gray-700 dark:text-gray-300 hover:text-[#1e3a8a] dark:hover:text-blue-400 transition font-medium">Programmes</a>
//             <a href="#faculties" className="text-gray-700 dark:text-gray-300 hover:text-[#1e3a8a] dark:hover:text-blue-400 transition font-medium">Faculties</a>
//             <a href="#online-learning" className="text-gray-700 dark:text-gray-300 hover:text-[#1e3a8a] dark:hover:text-blue-400 transition font-medium">Online Learning</a>
//             <a href="#admissions" className="text-gray-700 dark:text-gray-300 hover:text-[#1e3a8a] dark:hover:text-blue-400 transition font-medium">Admissions</a>
//           </div>
//           <button onClick = {goToAdmissions} className="px-6 py-2.5 bg-[#1e3a8a] text-white rounded hover:bg-[#1e40af] transition font-medium">
//             Apply Now
//           </button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <main className="pt-20">
//         <section className="relative bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#2563eb] text-white py-24 md:py-32">
//           <div className="max-w-7xl mx-auto px-6">
//             <div className="max-w-4xl">
//               <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
//                 UK Registered Education Provider • UKPRN 10096469
//               </div>
//               <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//                 Study Online 
//               </h1>
//               <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl">
//                 Flexible, accessible, and internationally recognised qualifications designed for working professionals and global learners. Study from anywhere, anytime.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
             
// <Link href="https://citiedgecollege.co.uk/course-lists">
//   <button  onClick={goToBrowse}
//  className="px-8 py-4 bg-white text-[#1e3a8a] text-lg font-semibold rounded hover:bg-gray-100 transition shadow-lg">
//     Browse Programmes
//   </button>
// </Link>

//                 {/* <button className="px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-semibold rounded hover:bg-white/10 transition">
//                   Download Prospectus
//                 </button> */}
//               </div>
//             </div>
//           </div>
//           {/* Decorative elements */}
//           <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
//             <div className="absolute top-20 right-20 w-64 h-64 border-4 border-white rounded-full"></div>
//             <div className="absolute bottom-20 right-40 w-48 h-48 border-4 border-white rounded-full"></div>
//           </div>
//         </section>

//         {/* Five Main Faculties Section */}
//         <section id="faculties" className="py-20 bg-gray-50 dark:bg-gray-800">
//           <div className="max-w-7xl mx-auto px-6">
//             <div className="text-center mb-16">
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
//                 Five Main Faculties
//               </h2>
//               <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//                 Explore our comprehensive portfolio of programmes across diverse academic disciplines
//               </p>
//             </div>
            
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {/* Law */}
//               <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md hover:shadow-xl transition border-t-4 border-[#1e3a8a]">
//                 <div className="w-14 h-14 bg-[#1e3a8a] rounded-lg flex items-center justify-center mb-6">
//                   <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
//                   </svg>
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Law</h3>
//                 <p className="text-gray-600 dark:text-gray-300 mb-4">
//                   LLB (Bachelor of Laws), LLM (Master of Laws) and specialized legal programmes
//                 </p>
//                 <a href="https://citiedgecollege.co.uk/course-lists" className="text-[#1e3a8a] dark:text-blue-400 font-semibold hover:underline">
//                   Explore Law Programmes →
//                 </a>
//               </div>

//               {/* Management Sciences */}
//               <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md hover:shadow-xl transition border-t-4 border-emerald-600">
//                 <div className="w-14 h-14 bg-emerald-600 rounded-lg flex items-center justify-center mb-6">
//                   <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Management Sciences</h3>
//                 <p className="text-gray-600 dark:text-gray-300 mb-4">
//                   Business Administration, MBA, and leadership-focused degrees
//                 </p>
//                 <a href="https://citiedgecollege.co.uk/course-lists" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
//                   Explore Business Programmes →
//                 </a>
//               </div>

//               {/* Computing & Technology */}
//               <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md hover:shadow-xl transition border-t-4 border-purple-600">
//                 <div className="w-14 h-14 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
//                   <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Computing & Technology</h3>
//                 <p className="text-gray-600 dark:text-gray-300 mb-4">
//                   Computer Science, AI, and cutting-edge technology programmes
//                 </p>
//                 <a href="https://citiedgecollege.co.uk/course-lists" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
//                   Explore Tech Programmes →
//                 </a>
//               </div>

//               {/* Health Sciences */}
//               <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md hover:shadow-xl transition border-t-4 border-red-600">
//                 <div className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center mb-6">
//                   <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Health Sciences</h3>
//                 <p className="text-gray-600 dark:text-gray-300 mb-4">
//                   Public Health, Clinical Psychology, and healthcare programmes
//                 </p>
//                 <a href="https://citiedgecollege.co.uk/course-lists" className="text-red-600 dark:text-red-400 font-semibold hover:underline">
//                   Explore Health Programmes →
//                 </a>
//               </div>

//               {/* Arts & Humanities */}
//               <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md hover:shadow-xl transition border-t-4 border-amber-600">
//                 <div className="w-14 h-14 bg-amber-600 rounded-lg flex items-center justify-center mb-6">
//                   <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
//                   </svg>
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Arts & Humanities</h3>
//                 <p className="text-gray-600 dark:text-gray-300 mb-4">
//                   English Language, Media Studies, and creative disciplines
//                 </p>
//                 <a href="https://citiedgecollege.co.uk/course-lists" className="text-amber-600 dark:text-amber-400 font-semibold hover:underline">
//                   Explore Arts Programmes →
//                 </a>
//               </div>

//               {/* All Programmes CTA */}
//               <div className="bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] p-8 rounded-lg shadow-md hover:shadow-xl transition flex flex-col justify-center items-center text-center text-white">
//                 <h3 className="text-2xl font-bold mb-3">View All Programmes</h3>
//                 <p className="mb-6 text-blue-100">
//                   From undergraduate to PhD level
//                 </p>
                
// <Link href="https://citiedgecollege.co.uk/course-lists">
//    <button className="px-6 py-3 bg-white text-[#1e3a8a] font-semibold rounded hover:bg-gray-100 transition">
//                   Browse Full Catalogue
//                 </button>
// </Link>

               
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Online Learning Experience Section */}
//         <section id="online-learning" className="py-20 bg-white dark:bg-gray-900">
//           <div className="max-w-7xl mx-auto px-6">
//             <div className="text-center mb-16">
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
//                 Online Learning Experience
//               </h2>
//               <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//                 Flexible, accessible education designed for your lifestyle
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
//               <div>
//                 <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
//                   Study From Anywhere, Anytime
//                 </h3>
//                 <div className="space-y-6">
//                   <div className="flex gap-4">
//                     <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
//                       <svg className="w-6 h-6 text-[#1e3a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} fill="none" />
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Global Access</h4>
//                       <p className="text-gray-600 dark:text-gray-300">Study from anywhere in the world with internet access</p>
//                     </div>
//                   </div>
//                   <div className="flex gap-4">
//                     <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
//                       <svg className="w-6 h-6 text-[#1e3a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} fill="none" />
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
//                       </svg>
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Flexible Schedule</h4>
//                       <p className="text-gray-600 dark:text-gray-300">Year-round intakes and self-paced study options</p>
//                     </div>
//                   </div>
//                   <div className="flex gap-4">
//                     <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
//                       <svg className="w-6 h-6 text-[#1e3a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Expert Support</h4>
//                       <p className="text-gray-600 dark:text-gray-300">Dedicated tutors and comprehensive student services</p>
//                     </div>
//                   </div>
//                   <div className="flex gap-4">
//                     <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
//                       <svg className="w-6 h-6 text-[#1e3a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//                       </svg>
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Rich Resources</h4>
//                       <p className="text-gray-600 dark:text-gray-300">Comprehensive study materials and online forums</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 lg:p-12">
//                 <div className="text-center">
//                   <div className="inline-block p-4 bg-[#1e3a8a] rounded-full mb-6">
//                     <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
//                     </svg>
//                   </div>
//                   <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Perfect for Working Professionals</h4>
//                   <p className="text-gray-600 dark:text-gray-300">
//                     Our online model is designed for busy individuals who need flexibility without compromising on quality education.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Innovation & Technology Section */}
//         <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
//           <div className="max-w-7xl mx-auto px-6">
//             <div className="text-center mb-16">
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
//                 Innovation & Technology Integration
//               </h2>
//               <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//                 Future-oriented learning with cutting-edge educational technology
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//               <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition">
//                 <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
//                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">AI-Enhanced Learning</h3>
//                 <p className="text-gray-600 dark:text-gray-300 text-sm">
//                   AI tools for personalized learning paths and progress tracking
//                 </p>
//               </div>

//               <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition">
//                 <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
//                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Industry-Led Curriculum</h3>
//                 <p className="text-gray-600 dark:text-gray-300 text-sm">
//                   Co-designed with employers for real-world relevance
//                 </p>
//               </div>

//               <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition">
//                 <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
//                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Microcredentials</h3>
//                 <p className="text-gray-600 dark:text-gray-300 text-sm">
//                   Stackable pathways from certificates to full degrees
//                 </p>
//               </div>

//               <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition">
//                 <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
//                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Blockchain Credentials</h3>
//                 <p className="text-gray-600 dark:text-gray-300 text-sm">
//                   Secure digital credentials with global verification
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Admissions Section */}
//         <section id="admissions" className="py-20 bg-white dark:bg-gray-900">
//           <div className="max-w-7xl mx-auto px-6">
//             <div className="text-center mb-16">
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
//                 Simple Admissions Process
//               </h2>
//               <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//                 Start your journey in just a few simple steps
//               </p>
//             </div>

//             <div className="grid md:grid-cols-4 gap-8 mb-16">
//               <div className="text-center">
//                 <div className="w-16 h-16 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
//                   1
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Choose Programme</h3>
//                 <p className="text-gray-600 dark:text-gray-300">
//                   Browse our catalogue and select your desired programme
//                 </p>
//               </div>

//               <div className="text-center">
//                 <div className="w-16 h-16 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
//                   2
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Submit Application</h3>
//                 <p className="text-gray-600 dark:text-gray-300">
//                   Complete online application with required documents
//                 </p>
//               </div>

//               <div className="text-center">
//                 <div className="w-16 h-16 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
//                   3
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Meet Requirements</h3>
//                 <p className="text-gray-600 dark:text-gray-300">
//                   Fulfill academic and English language requirements
//                 </p>
//               </div>

//               <div className="text-center">
//                 <div className="w-16 h-16 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
//                   4
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Get Decision</h3>
//                 <p className="text-gray-600 dark:text-gray-300">
//                   Receive your admission decision within days
//                 </p>
//               </div>
//             </div>

//             <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 md:p-12">
//               <div className="grid md:grid-cols-2 gap-8 items-center">
//                 <div>
//                   <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
//                     Multiple Intakes Throughout the Year
//                   </h3>
//                   <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
//                     We offer flexible start dates to accommodate your schedule. Don't wait for traditional academic calendars – begin your educational journey when you're ready.
//                   </p>
//                   <ul className="space-y-3">
//                     <li className="flex items-start gap-3">
//                       <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                       <span className="text-gray-700 dark:text-gray-300">Flexible entry requirements available</span>
//                     </li>
//                     <li className="flex items-start gap-3">
//                       <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                       <span className="text-gray-700 dark:text-gray-300">Recognition of prior learning (RPL)</span>
//                     </li>
//                     <li className="flex items-start gap-3">
//                       <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                       <span className="text-gray-700 dark:text-gray-300">Fast decision process</span>
//                     </li>
//                     <li className="flex items-start gap-3">
//                       <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                       <span className="text-gray-700 dark:text-gray-300">Admissions support available</span>
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="text-center md:text-right">
//                   <button onClick = {goToAdmissions} className="px-10 py-5 bg-[#1e3a8a] text-white text-xl font-bold rounded-lg hover:bg-[#1e40af] transition shadow-xl">
//                     Start Application
//                   </button>
//                   <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
//                     Or call us for guidance: <span className="font-semibold"> +44 (0)7454 289604</span>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-20 bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#2563eb] text-white">
//           <div className="max-w-5xl mx-auto px-6 text-center">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               Ready to Begin Your Academic Journey?
//             </h2>
//             <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
//               Join thousands of students worldwide studying with UK university qualifications. 
//               Transform your career with flexible, internationally recognised education.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button onClick = {goToAdmissions}className="px-8 py-4 bg-white text-[#1e3a8a] text-lg font-semibold rounded-lg hover:bg-gray-100 transition shadow-lg">
//                 Apply Now
//               </button>
//               {/* <button className="px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white/10 transition">
//                 Request Information
//               </button> */}
//             </div>
//           </div>
//         </section>

//         {/* Footer */}
//         <Footer />
//         {/* <footer className="bg-gray-900 text-gray-300 py-12">
//           <div className="max-w-7xl mx-auto px-6">
//             <div className="grid md:grid-cols-4 gap-8 mb-8">
//               <div>
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="flex flex-col items-center justify-center w-10 h-10 bg-[#1e3a8a] rounded">
//                     <div className="w-6 h-0.5 bg-white mb-0.5"></div>
//                     <div className="w-6 h-0.5 bg-white mb-0.5"></div>
//                     <div className="w-6 h-0.5 bg-white"></div>
//                   </div>
//                   <div>
//                     <span className="text-lg font-bold text-white block">Citiedge</span>
//                     <span className="text-xs text-gray-400">International College</span>
//                   </div>
//                 </div>
//                 <p className="text-sm mb-3">UK-based higher education provider offering internationally recognised qualifications.</p>
//                 <p className="text-xs text-gray-400">UKPRN: 10096469</p>
//               </div>
//               <div>
//                 <h4 className="font-semibold text-white mb-4">Faculties</h4>
//                 <ul className="space-y-2 text-sm">
//                   <li><a href="#" className="hover:text-white transition">Law</a></li>
//                   <li><a href="#" className="hover:text-white transition">Management Sciences</a></li>
//                   <li><a href="#" className="hover:text-white transition">Computing & Technology</a></li>
//                   <li><a href="#" className="hover:text-white transition">Health Sciences</a></li>
//                   <li><a href="#" className="hover:text-white transition">Arts & Humanities</a></li>
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="font-semibold text-white mb-4">Quick Links</h4>
//                 <ul className="space-y-2 text-sm">
//                   <li><a href="#" className="hover:text-white transition">About Us</a></li>
//                   <li><a href="#" className="hover:text-white transition">Admissions</a></li>
//                   <li><a href="#" className="hover:text-white transition">Student Support</a></li>
//                   <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="font-semibold text-white mb-4">Legal</h4>
//                 <ul className="space-y-2 text-sm">
//                   <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
//                   <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
//                   <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
//                   <li><a href="#" className="hover:text-white transition">Complaints Procedure</a></li>
//                 </ul>
//               </div>
//             </div>
//             <div className="border-t border-gray-800 pt-8">
//               <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//                 <p className="text-sm text-center md:text-left">
//                   &copy; 2025 Citiedge International College. All rights reserved.
//                   <br className="md:hidden" />
//                   <span className="text-xs text-gray-400 ml-0 md:ml-2">
//                     Registered in England and Wales
//                   </span>
//                 </p>
//                 <div className="flex gap-4">
//                   <a href="#" className="text-gray-400 hover:text-white transition">
//                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                     </svg>
//                   </a>
//                   <a href="#" className="text-gray-400 hover:text-white transition">
//                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                     </svg>
//                   </a>
//                   <a href="#" className="text-gray-400 hover:text-white transition">
//                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </footer> */}
//       </main>
//     </div>
 <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-lg p-8 text-center">
        <h1 className="text-2xl font-semibold text-gray-800">
          This page is currently unavailable
        </h1>
        <p className="mt-3 text-gray-600">
          Please try again later or contact support if the issue continues.
        </p>
      </div>
    </div>

    
  )}    
           