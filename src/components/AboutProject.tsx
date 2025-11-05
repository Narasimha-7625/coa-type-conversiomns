import { ArrowLeft, Code2, Users, BookOpen, Award } from 'lucide-react';

interface AboutProjectProps {
  onNavigate: (page: 'home' | 'converter' | 'learn' | 'about' | 'quiz') => void;
}

function AboutProject({ onNavigate }: AboutProjectProps) {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </button>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Project
          </h1>
          <p className="text-gray-400">Learn about the purpose, team, and technologies</p>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/30 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-cyan-500/20 p-3 rounded-xl mr-4">
                <BookOpen className="text-cyan-400" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-cyan-400">Project Purpose</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              The Universal Code Conversion Simulator is an educational web application designed to help students
              and professionals understand fundamental concepts in Computer Architecture. This interactive platform
              provides hands-on experience with various number system conversions, Grey Code operations, and IEEE 754
              floating-point representations.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our goal is to make learning computer architecture concepts engaging, intuitive, and accessible through
              interactive tools, step-by-step explanations, and practice exercises.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/30 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-500/20 p-3 rounded-xl mr-4">
                <Code2 className="text-blue-400" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-blue-400">Technologies Used</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-900/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-cyan-300">Frontend Framework</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    React 18 with TypeScript
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    Vite for fast development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    Modern React Hooks
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-300">Styling & UI</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Tailwind CSS
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Lucide React Icons
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Custom CSS Animations
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-300">Features</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Real-time conversion
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Step-by-step explanations
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Interactive quizzes
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-300">Design Principles</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Responsive layout
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Dark theme with neon accents
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Smooth transitions
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-green-500/30 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-green-500/20 p-3 rounded-xl mr-4">
                <Users className="text-green-400" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-green-400">Project Team</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-cyan-300">Student Developer</h3>
                <div className="space-y-2 text-gray-300">
                  <p className="text-lg font-medium">Your Name</p>
                  <p className="text-sm">Computer Science Student</p>
                  <p className="text-sm text-gray-400">Specialization: Computer Architecture</p>
                </div>
              </div>

              <div className="bg-slate-900/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-300">Project Mentor</h3>
                <div className="space-y-2 text-gray-300">
                  <p className="text-lg font-medium">Mentor Name</p>
                  <p className="text-sm">Assistant Professor</p>
                  <p className="text-sm text-gray-400">Department of Computer Science</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/30 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-purple-500/20 p-3 rounded-xl mr-4">
                <Award className="text-purple-400" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-purple-400">Institution</h2>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-6">
              <h3 className="text-2xl font-semibold mb-3 text-cyan-300">Your University Name</h3>
              <p className="text-gray-300 mb-2">Department of Computer Science & Engineering</p>
              <p className="text-gray-400 text-sm">Academic Year: 2024-2025</p>
              <p className="text-gray-400 text-sm">Course: Computer Architecture</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Project Highlights</h3>
            <div className="grid md:grid-cols-4 gap-6 mt-6">
              <div className="bg-slate-900/50 rounded-xl p-4">
                <p className="text-4xl font-bold text-cyan-400 mb-2">8+</p>
                <p className="text-gray-300">Conversion Types</p>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4">
                <p className="text-4xl font-bold text-blue-400 mb-2">3</p>
                <p className="text-gray-300">Learning Modules</p>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4">
                <p className="text-4xl font-bold text-green-400 mb-2">12+</p>
                <p className="text-gray-300">Practice Questions</p>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4">
                <p className="text-4xl font-bold text-purple-400 mb-2">100%</p>
                <p className="text-gray-300">Interactive</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;
