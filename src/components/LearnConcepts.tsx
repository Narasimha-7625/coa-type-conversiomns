import { useState } from 'react';
import { ArrowLeft, Binary, Hash, Braces, Cpu, CheckCircle, XCircle } from 'lucide-react';

interface LearnConceptsProps {
  onNavigate: (page: 'home' | 'converter' | 'learn' | 'about' | 'quiz') => void;
}

type Concept = 'number-systems' | 'grey-code' | 'ieee-754';

function LearnConcepts({ onNavigate }: LearnConceptsProps) {
  const [selectedConcept, setSelectedConcept] = useState<Concept>('number-systems');
  const [quizAnswer, setQuizAnswer] = useState<string>('');
  const [quizResult, setQuizResult] = useState<'correct' | 'incorrect' | null>(null);

  const checkQuizAnswer = (correctAnswer: string) => {
    if (quizAnswer.toLowerCase().trim() === correctAnswer.toLowerCase()) {
      setQuizResult('correct');
    } else {
      setQuizResult('incorrect');
    }
  };

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
            Learn Concepts
          </h1>
          <p className="text-gray-400">Interactive guides and visual explanations</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <button
            onClick={() => {
              setSelectedConcept('number-systems');
              setQuizAnswer('');
              setQuizResult(null);
            }}
            className={`p-6 rounded-xl border-2 transition-all duration-300 ${
              selectedConcept === 'number-systems'
                ? 'bg-cyan-500/20 border-cyan-500 shadow-lg shadow-cyan-500/30'
                : 'bg-slate-800/50 border-slate-700 hover:border-cyan-500/50'
            }`}
          >
            <Binary className="mx-auto mb-2 text-cyan-400" size={32} />
            <h3 className="text-lg font-semibold text-cyan-400">Number Systems</h3>
          </button>

          <button
            onClick={() => {
              setSelectedConcept('grey-code');
              setQuizAnswer('');
              setQuizResult(null);
            }}
            className={`p-6 rounded-xl border-2 transition-all duration-300 ${
              selectedConcept === 'grey-code'
                ? 'bg-blue-500/20 border-blue-500 shadow-lg shadow-blue-500/30'
                : 'bg-slate-800/50 border-slate-700 hover:border-blue-500/50'
            }`}
          >
            <Hash className="mx-auto mb-2 text-blue-400" size={32} />
            <h3 className="text-lg font-semibold text-blue-400">Grey Code</h3>
          </button>

          <button
            onClick={() => {
              setSelectedConcept('ieee-754');
              setQuizAnswer('');
              setQuizResult(null);
            }}
            className={`p-6 rounded-xl border-2 transition-all duration-300 ${
              selectedConcept === 'ieee-754'
                ? 'bg-green-500/20 border-green-500 shadow-lg shadow-green-500/30'
                : 'bg-slate-800/50 border-slate-700 hover:border-green-500/50'
            }`}
          >
            <Cpu className="mx-auto mb-2 text-green-400" size={32} />
            <h3 className="text-lg font-semibold text-green-400">IEEE 754</h3>
          </button>
        </div>

        {selectedConcept === 'number-systems' && (
          <div className="space-y-6">
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Number Systems</h2>

              <div className="space-y-6">
                <div className="bg-slate-900/50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-300 flex items-center">
                    <Binary className="mr-2" size={24} />
                    Binary (Base-2)
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Binary is the fundamental number system used in computers. It uses only two digits: 0 and 1.
                    Each digit is called a bit (binary digit).
                  </p>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <p className="text-sm text-gray-400 mb-2">Example:</p>
                    <p className="font-mono text-cyan-400">1011₂ = (1×2³) + (0×2²) + (1×2¹) + (1×2⁰) = 8 + 0 + 2 + 1 = 11₁₀</p>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-300 flex items-center">
                    <Hash className="mr-2" size={24} />
                    Decimal (Base-10)
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Decimal is the number system we use in everyday life. It uses ten digits: 0-9.
                    Each position represents a power of 10.
                  </p>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <p className="text-sm text-gray-400 mb-2">Example:</p>
                    <p className="font-mono text-blue-400">365₁₀ = (3×10²) + (6×10¹) + (5×10⁰) = 300 + 60 + 5</p>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-300 flex items-center">
                    <Braces className="mr-2" size={24} />
                    Octal (Base-8)
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Octal uses eight digits: 0-7. It's commonly used in computing as a more compact representation
                    than binary. Three binary digits can be represented by one octal digit.
                  </p>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <p className="text-sm text-gray-400 mb-2">Example:</p>
                    <p className="font-mono text-green-400">157₈ = (1×8²) + (5×8¹) + (7×8⁰) = 64 + 40 + 7 = 111₁₀</p>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-purple-300 flex items-center">
                    <Hash className="mr-2" size={24} />
                    Hexadecimal (Base-16)
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Hexadecimal uses sixteen digits: 0-9 and A-F (where A=10, B=11, C=12, D=13, E=14, F=15).
                    It's widely used in programming as a compact way to represent binary data.
                  </p>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <p className="text-sm text-gray-400 mb-2">Example:</p>
                    <p className="font-mono text-purple-400">2F₁₆ = (2×16¹) + (15×16⁰) = 32 + 15 = 47₁₀</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Test Your Understanding</h3>
              <p className="text-gray-300 mb-4">What is the decimal value of binary 1101?</p>
              <div className="flex gap-4">
                <input
                  type="text"
                  value={quizAnswer}
                  onChange={(e) => {
                    setQuizAnswer(e.target.value);
                    setQuizResult(null);
                  }}
                  placeholder="Enter your answer"
                  className="flex-1 bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                />
                <button
                  onClick={() => checkQuizAnswer('13')}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  Check
                </button>
              </div>
              {quizResult === 'correct' && (
                <div className="mt-4 flex items-center text-green-400">
                  <CheckCircle className="mr-2" size={20} />
                  <span>Correct! 1101₂ = 13₁₀</span>
                </div>
              )}
              {quizResult === 'incorrect' && (
                <div className="mt-4 flex items-center text-red-400">
                  <XCircle className="mr-2" size={20} />
                  <span>Try again! Hint: (1×8) + (1×4) + (0×2) + (1×1)</span>
                </div>
              )}
            </div>
          </div>
        )}

        {selectedConcept === 'grey-code' && (
          <div className="space-y-6">
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Grey Code</h2>

              <div className="space-y-6">
                <div className="bg-slate-900/50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-300">What is Grey Code?</h3>
                  <p className="text-gray-300 mb-4">
                    Grey Code (also known as reflected binary code) is a binary numeral system where two successive
                    values differ in only one bit. This property makes it useful in error correction and digital
                    communication systems.
                  </p>
                </div>

                <div className="bg-slate-900/50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-300">Why Use Grey Code?</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Minimizes errors in mechanical encoders</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Used in K-maps for digital circuit design</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Prevents glitches in digital systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Applied in error detection and correction</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-900/50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-300">Conversion Examples</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-slate-700">
                          <th className="py-2 px-4 text-cyan-400">Decimal</th>
                          <th className="py-2 px-4 text-cyan-400">Binary</th>
                          <th className="py-2 px-4 text-cyan-400">Grey Code</th>
                        </tr>
                      </thead>
                      <tbody className="font-mono">
                        <tr className="border-b border-slate-800">
                          <td className="py-2 px-4 text-gray-300">0</td>
                          <td className="py-2 px-4 text-gray-300">0000</td>
                          <td className="py-2 px-4 text-blue-400">0000</td>
                        </tr>
                        <tr className="border-b border-slate-800">
                          <td className="py-2 px-4 text-gray-300">1</td>
                          <td className="py-2 px-4 text-gray-300">0001</td>
                          <td className="py-2 px-4 text-blue-400">0001</td>
                        </tr>
                        <tr className="border-b border-slate-800">
                          <td className="py-2 px-4 text-gray-300">2</td>
                          <td className="py-2 px-4 text-gray-300">0010</td>
                          <td className="py-2 px-4 text-blue-400">0011</td>
                        </tr>
                        <tr className="border-b border-slate-800">
                          <td className="py-2 px-4 text-gray-300">3</td>
                          <td className="py-2 px-4 text-gray-300">0011</td>
                          <td className="py-2 px-4 text-blue-400">0010</td>
                        </tr>
                        <tr className="border-b border-slate-800">
                          <td className="py-2 px-4 text-gray-300">4</td>
                          <td className="py-2 px-4 text-gray-300">0100</td>
                          <td className="py-2 px-4 text-blue-400">0110</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-300">Conversion Algorithm</h3>
                  <p className="text-gray-300 mb-4 font-semibold">Binary to Grey Code:</p>
                  <ol className="space-y-2 text-gray-300 mb-4">
                    <li>1. Keep the MSB (leftmost bit) as is</li>
                    <li>2. XOR each bit with the previous bit</li>
                  </ol>
                  <p className="text-gray-300 mb-4 font-semibold">Grey Code to Binary:</p>
                  <ol className="space-y-2 text-gray-300">
                    <li>1. Keep the MSB as is</li>
                    <li>2. XOR each grey bit with the previous binary bit</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Test Your Understanding</h3>
              <p className="text-gray-300 mb-4">What is the Grey Code for binary 1010?</p>
              <div className="flex gap-4">
                <input
                  type="text"
                  value={quizAnswer}
                  onChange={(e) => {
                    setQuizAnswer(e.target.value);
                    setQuizResult(null);
                  }}
                  placeholder="Enter your answer"
                  className="flex-1 bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                />
                <button
                  onClick={() => checkQuizAnswer('1111')}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  Check
                </button>
              </div>
              {quizResult === 'correct' && (
                <div className="mt-4 flex items-center text-green-400">
                  <CheckCircle className="mr-2" size={20} />
                  <span>Correct! Binary 1010 converts to Grey Code 1111</span>
                </div>
              )}
              {quizResult === 'incorrect' && (
                <div className="mt-4 flex items-center text-red-400">
                  <XCircle className="mr-2" size={20} />
                  <span>Try again! Apply XOR operations: 1, 1⊕0=1, 0⊕1=1, 1⊕0=1</span>
                </div>
              )}
            </div>
          </div>
        )}

        {selectedConcept === 'ieee-754' && (
          <div className="space-y-6">
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-green-400">IEEE 754 Floating Point</h2>

              <div className="space-y-6">
                <div className="bg-slate-900/50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-300">What is IEEE 754?</h3>
                  <p className="text-gray-300 mb-4">
                    IEEE 754 is a standard for representing floating-point numbers in computers. It defines formats
                    for representing real numbers, including special values like infinity and NaN (Not a Number).
                  </p>
                </div>

                <div className="bg-slate-900/50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-300">Single Precision (32-bit)</h3>
                  <div className="space-y-4">
                    <p className="text-gray-300">Format: 1 sign bit + 8 exponent bits + 23 mantissa bits</p>
                    <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
                      <div className="grid grid-cols-3 gap-2 mb-2">
                        <div className="text-red-400">Sign (1 bit)</div>
                        <div className="text-blue-400">Exponent (8 bits)</div>
                        <div className="text-green-400">Mantissa (23 bits)</div>
                      </div>
                      <div className="text-gray-300">
                        Value = (-1)^sign × 1.mantissa × 2^(exponent-127)
                      </div>
                    </div>
                    <div className="bg-slate-800 rounded-lg p-4">
                      <p className="text-sm text-gray-400 mb-2">Example: 12.5</p>
                      <p className="font-mono text-xs text-green-400 break-all">
                        0 10000010 10010000000000000000000
                      </p>
                      <p className="text-sm text-gray-300 mt-2">Sign: 0 (positive), Exponent: 130 (130-127=3), Mantissa: 1.101 in binary</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-300">Double Precision (64-bit)</h3>
                  <div className="space-y-4">
                    <p className="text-gray-300">Format: 1 sign bit + 11 exponent bits + 52 mantissa bits</p>
                    <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
                      <div className="grid grid-cols-3 gap-2 mb-2">
                        <div className="text-red-400">Sign (1 bit)</div>
                        <div className="text-blue-400">Exponent (11 bits)</div>
                        <div className="text-green-400">Mantissa (52 bits)</div>
                      </div>
                      <div className="text-gray-300">
                        Value = (-1)^sign × 1.mantissa × 2^(exponent-1023)
                      </div>
                    </div>
                    <p className="text-gray-300">Provides greater precision and range than single precision.</p>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-300">Special Values</h3>
                  <div className="space-y-2">
                    <div className="bg-slate-800 rounded-lg p-3">
                      <span className="font-semibold text-green-400">Zero:</span>
                      <span className="text-gray-300 ml-2">Exponent and mantissa all zeros</span>
                    </div>
                    <div className="bg-slate-800 rounded-lg p-3">
                      <span className="font-semibold text-green-400">Infinity:</span>
                      <span className="text-gray-300 ml-2">Exponent all ones, mantissa all zeros</span>
                    </div>
                    <div className="bg-slate-800 rounded-lg p-3">
                      <span className="font-semibold text-green-400">NaN:</span>
                      <span className="text-gray-300 ml-2">Exponent all ones, mantissa non-zero</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-green-400">Test Your Understanding</h3>
              <p className="text-gray-300 mb-4">How many bits are in the exponent of IEEE 754 single precision?</p>
              <div className="flex gap-4">
                <input
                  type="text"
                  value={quizAnswer}
                  onChange={(e) => {
                    setQuizAnswer(e.target.value);
                    setQuizResult(null);
                  }}
                  placeholder="Enter your answer"
                  className="flex-1 bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:outline-none"
                />
                <button
                  onClick={() => checkQuizAnswer('8')}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  Check
                </button>
              </div>
              {quizResult === 'correct' && (
                <div className="mt-4 flex items-center text-green-400">
                  <CheckCircle className="mr-2" size={20} />
                  <span>Correct! Single precision uses 8 bits for the exponent</span>
                </div>
              )}
              {quizResult === 'incorrect' && (
                <div className="mt-4 flex items-center text-red-400">
                  <XCircle className="mr-2" size={20} />
                  <span>Try again! Remember: 1 sign + 8 exponent + 23 mantissa = 32 total</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LearnConcepts;
