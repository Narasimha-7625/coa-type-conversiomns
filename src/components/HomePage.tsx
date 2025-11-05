import { Code2, BookOpen, Info, Brain } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: 'home' | 'converter' | 'learn' | 'about' | 'quiz') => void;
}

function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-2xl shadow-lg shadow-cyan-500/50">
              <Code2 size={64} className="text-white" />
            </div>
          </div>

          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Universal Code Conversion Simulator
          </h1>

          <p className="text-2xl text-cyan-400 font-light mb-8">
            Explore and Understand Every Code Conversion in Computer Architecture
          </p>

          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-300 leading-relaxed">
              Master the fundamentals of digital systems and computer architecture through interactive conversions.
              Convert between number systems, understand IEEE 754 floating-point representations, explore Grey Code,
              and deepen your knowledge with comprehensive explanations and practice quizzes.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <button
            onClick={() => onNavigate('converter')}
            className="group relative bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="bg-cyan-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:bg-cyan-500/30 transition-colors">
                <Code2 size={32} className="text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-cyan-400">Start Conversion</h3>
              <p className="text-gray-400 text-sm">
                Interactive tool for all number system conversions
              </p>
            </div>
          </button>

          <button
            onClick={() => onNavigate('learn')}
            className="group relative bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/30 rounded-2xl p-8 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="bg-blue-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                <BookOpen size={32} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-400">Learn Concepts</h3>
              <p className="text-gray-400 text-sm">
                Comprehensive guides and visual explanations
              </p>
            </div>
          </button>

          <button
            onClick={() => onNavigate('quiz')}
            className="group relative bg-gradient-to-br from-slate-800 to-slate-900 border border-green-500/30 rounded-2xl p-8 hover:border-green-500 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/30 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="bg-green-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
                <Brain size={32} className="text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-400">Quiz & Practice</h3>
              <p className="text-gray-400 text-sm">
                Test your understanding with interactive quizzes
              </p>
            </div>
          </button>

          <button
            onClick={() => onNavigate('about')}
            className="group relative bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="bg-purple-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                <Info size={32} className="text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-purple-400">About Project</h3>
              <p className="text-gray-400 text-sm">
                Learn about the team and technologies
              </p>
            </div>
          </button>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <p className="text-gray-300">Binary, Decimal, Octal, Hexadecimal conversions</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <p className="text-gray-300">Grey Code conversions</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <p className="text-gray-300">IEEE 754 Single & Double Precision</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <p className="text-gray-300">Step-by-step explanations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
