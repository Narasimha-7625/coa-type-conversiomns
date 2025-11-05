import { useState } from 'react';
import { ArrowLeft, Copy, RotateCcw, ArrowRight } from 'lucide-react';
import {
  decimalToBinary,
  decimalToOctal,
  decimalToHex,
  binaryToDecimal,
  octalToDecimal,
  hexToDecimal,
  binaryToGrey,
  greyToBinary,
  decimalToIEEE754Single,
  decimalToIEEE754Double,
  getConversionSteps,
} from '../utils/conversions';

interface ConversionSimulatorProps {
  onNavigate: (page: 'home' | 'converter' | 'learn' | 'about' | 'quiz') => void;
}

type ConversionType = 'number-system' | 'grey-code' | 'ieee-754';
type NumberSystem = 'binary' | 'decimal' | 'octal' | 'hex';

function ConversionSimulator({ onNavigate }: ConversionSimulatorProps) {
  const [conversionType, setConversionType] = useState<ConversionType>('number-system');
  const [inputValue, setInputValue] = useState('');
  const [fromSystem, setFromSystem] = useState<NumberSystem>('decimal');
  const [toSystem, setToSystem] = useState<NumberSystem>('binary');
  const [result, setResult] = useState('');
  const [explanation, setExplanation] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [ieee754Type, setIeee754Type] = useState<'single' | 'double'>('single');

  const handleConvert = () => {
    if (!inputValue.trim()) {
      setResult('Please enter a value');
      setExplanation([]);
      setShowResult(true);
      return;
    }

    try {
      let convertedValue = '';
      let steps: string[] = [];

      if (conversionType === 'number-system') {
        let decimalValue: number;

        if (fromSystem === 'decimal') {
          decimalValue = parseInt(inputValue, 10);
        } else if (fromSystem === 'binary') {
          decimalValue = binaryToDecimal(inputValue);
        } else if (fromSystem === 'octal') {
          decimalValue = octalToDecimal(inputValue);
        } else {
          decimalValue = hexToDecimal(inputValue);
        }

        if (toSystem === 'decimal') {
          convertedValue = decimalValue.toString();
        } else if (toSystem === 'binary') {
          convertedValue = decimalToBinary(decimalValue);
        } else if (toSystem === 'octal') {
          convertedValue = decimalToOctal(decimalValue);
        } else {
          convertedValue = decimalToHex(decimalValue);
        }

        steps = getConversionSteps(fromSystem, toSystem, inputValue);
      } else if (conversionType === 'grey-code') {
        if (fromSystem === 'binary') {
          convertedValue = binaryToGrey(inputValue);
          steps = getConversionSteps('binary', 'grey', inputValue);
        } else {
          convertedValue = greyToBinary(inputValue);
          steps = ['Converting from Grey Code to Binary:', 'Apply XOR operations sequentially'];
        }
      } else if (conversionType === 'ieee-754') {
        const num = parseFloat(inputValue);
        if (ieee754Type === 'single') {
          const { binary, explanation: exp } = decimalToIEEE754Single(num);
          convertedValue = binary;
          steps = exp;
        } else {
          const { binary, explanation: exp } = decimalToIEEE754Double(num);
          convertedValue = binary;
          steps = exp;
        }
      }

      setResult(convertedValue);
      setExplanation(steps);
      setShowResult(true);
    } catch (error) {
      setResult('Invalid input');
      setExplanation(['Please check your input format']);
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setInputValue('');
    setResult('');
    setExplanation([]);
    setShowResult(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
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
            Conversion Simulator
          </h1>
          <p className="text-gray-400">Select conversion type and enter your value</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <button
            onClick={() => {
              setConversionType('number-system');
              handleReset();
            }}
            className={`p-6 rounded-xl border-2 transition-all duration-300 ${
              conversionType === 'number-system'
                ? 'bg-cyan-500/20 border-cyan-500 shadow-lg shadow-cyan-500/30'
                : 'bg-slate-800/50 border-slate-700 hover:border-cyan-500/50'
            }`}
          >
            <h3 className="text-xl font-semibold mb-2 text-cyan-400">Number Systems</h3>
            <p className="text-sm text-gray-400">Binary, Decimal, Octal, Hex</p>
          </button>

          <button
            onClick={() => {
              setConversionType('grey-code');
              handleReset();
            }}
            className={`p-6 rounded-xl border-2 transition-all duration-300 ${
              conversionType === 'grey-code'
                ? 'bg-blue-500/20 border-blue-500 shadow-lg shadow-blue-500/30'
                : 'bg-slate-800/50 border-slate-700 hover:border-blue-500/50'
            }`}
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-400">Grey Code</h3>
            <p className="text-sm text-gray-400">Binary ↔ Grey Code</p>
          </button>

          <button
            onClick={() => {
              setConversionType('ieee-754');
              handleReset();
            }}
            className={`p-6 rounded-xl border-2 transition-all duration-300 ${
              conversionType === 'ieee-754'
                ? 'bg-green-500/20 border-green-500 shadow-lg shadow-green-500/30'
                : 'bg-slate-800/50 border-slate-700 hover:border-green-500/50'
            }`}
          >
            <h3 className="text-xl font-semibold mb-2 text-green-400">IEEE 754</h3>
            <p className="text-sm text-gray-400">Floating Point Representation</p>
          </button>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
          {conversionType === 'number-system' && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">From</label>
                  <select
                    value={fromSystem}
                    onChange={(e) => setFromSystem(e.target.value as NumberSystem)}
                    className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                  >
                    <option value="decimal">Decimal</option>
                    <option value="binary">Binary</option>
                    <option value="octal">Octal</option>
                    <option value="hex">Hexadecimal</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">To</label>
                  <select
                    value={toSystem}
                    onChange={(e) => setToSystem(e.target.value as NumberSystem)}
                    className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                  >
                    <option value="decimal">Decimal</option>
                    <option value="binary">Binary</option>
                    <option value="octal">Octal</option>
                    <option value="hex">Hexadecimal</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Input Value</label>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={`Enter ${fromSystem} value`}
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                />
              </div>
            </div>
          )}

          {conversionType === 'grey-code' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Conversion Direction</label>
                <select
                  value={fromSystem}
                  onChange={(e) => setFromSystem(e.target.value as NumberSystem)}
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                >
                  <option value="binary">Binary to Grey Code</option>
                  <option value="grey">Grey Code to Binary</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Input Value</label>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={fromSystem === 'binary' ? 'Enter binary value' : 'Enter grey code'}
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
          )}

          {conversionType === 'ieee-754' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Precision Type</label>
                <select
                  value={ieee754Type}
                  onChange={(e) => setIeee754Type(e.target.value as 'single' | 'double')}
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:outline-none"
                >
                  <option value="single">Single Precision (32-bit)</option>
                  <option value="double">Double Precision (64-bit)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Decimal Number</label>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Enter decimal number (e.g., 12.5)"
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:outline-none"
                />
              </div>
            </div>
          )}

          <div className="flex gap-4 mt-6">
            <button
              onClick={handleConvert}
              className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/30"
            >
              <ArrowRight size={20} />
              <span>Convert</span>
            </button>

            <button
              onClick={handleReset}
              className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <RotateCcw size={20} />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {showResult && (
          <div className="mt-8 bg-slate-800/50 border border-slate-700 rounded-2xl p-8 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold text-cyan-400">Result</h3>
              <button
                onClick={handleCopy}
                className="flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Copy size={18} />
                <span>Copy</span>
              </button>
            </div>

            <div className="bg-slate-900 rounded-lg p-6 mb-6">
              <p className="text-3xl font-mono text-green-400 break-all">{result}</p>
            </div>

            {explanation.length > 0 && (
              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-4">Step-by-Step Explanation</h4>
                <div className="space-y-2">
                  {explanation.map((step, index) => (
                    <div key={index} className="bg-slate-900/50 rounded-lg p-3">
                      <p className="text-gray-300 font-mono text-sm">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ConversionSimulator;
