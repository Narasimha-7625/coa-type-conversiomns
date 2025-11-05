import { Github, Linkedin, Mail, Heart } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900/50 border-t border-slate-800 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Universal Code Conversion</h3>
            <p className="text-gray-400 text-sm">
              An interactive educational platform for learning computer architecture concepts through hands-on conversions and practice.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Number Systems</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Grey Code</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">IEEE 754</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Practice Quiz</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-slate-700 p-3 rounded-lg transition-colors"
              >
                <Github size={20} className="text-gray-400 hover:text-cyan-400" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-slate-700 p-3 rounded-lg transition-colors"
              >
                <Linkedin size={20} className="text-gray-400 hover:text-cyan-400" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="bg-slate-800 hover:bg-slate-700 p-3 rounded-lg transition-colors"
              >
                <Mail size={20} className="text-gray-400 hover:text-cyan-400" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center">
            <span>Copyright © {currentYear} Universal Code Conversion Simulator. Made with</span>
            <Heart size={16} className="text-red-500 mx-1 fill-current" />
            <span>for Computer Architecture</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
