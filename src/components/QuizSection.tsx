import { useState } from 'react';
import { ArrowLeft, CheckCircle, XCircle, RotateCcw, Trophy } from 'lucide-react';

interface QuizSectionProps {
  onNavigate: (page: 'home' | 'converter' | 'learn' | 'about' | 'quiz') => void;
}

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const quizQuestions: Question[] = [
  {
    id: 1,
    question: 'What is the binary representation of decimal 25?',
    options: ['10101', '11001', '10011', '11010'],
    correctAnswer: 1,
    explanation: '25 = 16 + 8 + 1 = 2^4 + 2^3 + 2^0 = 11001 in binary',
  },
  {
    id: 2,
    question: 'Which number system uses base 8?',
    options: ['Binary', 'Octal', 'Decimal', 'Hexadecimal'],
    correctAnswer: 1,
    explanation: 'Octal is a base-8 number system using digits 0-7',
  },
  {
    id: 3,
    question: 'What is the hexadecimal representation of decimal 255?',
    options: ['EE', 'FF', '100', 'F0'],
    correctAnswer: 1,
    explanation: '255 = 15×16 + 15 = F×16 + F = FF in hexadecimal',
  },
  {
    id: 4,
    question: 'In Grey Code, how many bits change between consecutive numbers?',
    options: ['0 bits', '1 bit', '2 bits', 'All bits'],
    correctAnswer: 1,
    explanation: 'Grey Code is designed so only one bit changes between consecutive values',
  },
  {
    id: 5,
    question: 'How many bits are in IEEE 754 single precision format?',
    options: ['16 bits', '32 bits', '64 bits', '128 bits'],
    correctAnswer: 1,
    explanation: 'Single precision uses 32 bits: 1 sign + 8 exponent + 23 mantissa',
  },
  {
    id: 6,
    question: 'What is the decimal value of hexadecimal 1A?',
    options: ['16', '26', '10', '20'],
    correctAnswer: 1,
    explanation: '1A = 1×16 + 10 = 16 + 10 = 26 in decimal',
  },
  {
    id: 7,
    question: 'In IEEE 754, what does the sign bit indicate?',
    options: ['Exponent sign', 'Number sign', 'Precision', 'Format type'],
    correctAnswer: 1,
    explanation: 'The sign bit indicates whether the number is positive (0) or negative (1)',
  },
  {
    id: 8,
    question: 'What is the octal representation of binary 101110?',
    options: ['46', '56', '66', '36'],
    correctAnswer: 1,
    explanation: 'Group from right: 101 110 = 5 6 = 56 in octal',
  },
  {
    id: 9,
    question: 'Which is NOT a valid hexadecimal digit?',
    options: ['A', 'F', 'G', 'E'],
    correctAnswer: 2,
    explanation: 'Hexadecimal uses 0-9 and A-F. G is not a valid hex digit',
  },
  {
    id: 10,
    question: 'What is the Grey Code for binary 0101?',
    options: ['0101', '0111', '0110', '0100'],
    correctAnswer: 1,
    explanation: 'Apply XOR: 0, 0⊕1=1, 1⊕0=1, 0⊕1=1 = 0111',
  },
  {
    id: 11,
    question: 'How many bits are in the mantissa of IEEE 754 double precision?',
    options: ['23 bits', '52 bits', '11 bits', '64 bits'],
    correctAnswer: 1,
    explanation: 'Double precision uses 52 bits for the mantissa (significand)',
  },
  {
    id: 12,
    question: 'What is binary 1111 in decimal?',
    options: ['14', '15', '16', '17'],
    correctAnswer: 1,
    explanation: '1111 = 8 + 4 + 2 + 1 = 15 in decimal',
  },
];

function QuizSection({ onNavigate }: QuizSectionProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(
    new Array(quizQuestions.length).fill(false)
  );
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    setShowResult(true);
    const isCorrect = selectedAnswer === quizQuestions[currentQuestion].correctAnswer;

    if (isCorrect && !answeredQuestions[currentQuestion]) {
      setScore(score + 1);
    }

    const newAnsweredQuestions = [...answeredQuestions];
    newAnsweredQuestions[currentQuestion] = true;
    setAnsweredQuestions(newAnsweredQuestions);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions(new Array(quizQuestions.length).fill(false));
    setQuizCompleted(false);
  };

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  if (quizCompleted) {
    const percentage = (score / quizQuestions.length) * 100;
    let grade = '';
    let gradeColor = '';

    if (percentage >= 90) {
      grade = 'Excellent!';
      gradeColor = 'text-green-400';
    } else if (percentage >= 70) {
      grade = 'Good Job!';
      gradeColor = 'text-blue-400';
    } else if (percentage >= 50) {
      grade = 'Keep Practicing!';
      gradeColor = 'text-yellow-400';
    } else {
      grade = 'Need More Practice';
      gradeColor = 'text-red-400';
    }

    return (
      <div className="min-h-screen py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/30 rounded-2xl p-8 text-center">
            <div className="bg-cyan-500/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trophy className="text-cyan-400" size={48} />
            </div>

            <h2 className="text-4xl font-bold mb-4 text-cyan-400">Quiz Completed!</h2>
            <p className={`text-6xl font-bold mb-6 ${gradeColor}`}>{grade}</p>

            <div className="bg-slate-900/50 rounded-xl p-8 mb-6">
              <p className="text-5xl font-bold text-white mb-2">
                {score} / {quizQuestions.length}
              </p>
              <p className="text-gray-400">Correct Answers</p>
              <div className="mt-4">
                <p className="text-3xl font-bold text-cyan-400">{percentage.toFixed(0)}%</p>
                <p className="text-gray-400">Score</p>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={handleRestartQuiz}
                className="flex items-center space-x-2 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg transition-colors"
              >
                <RotateCcw size={20} />
                <span>Retry Quiz</span>
              </button>
              <button
                onClick={() => onNavigate('home')}
                className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg transition-colors"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </button>

        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Quiz & Practice
          </h1>
          <p className="text-gray-400">Test your knowledge of computer architecture concepts</p>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </span>
            <span className="text-cyan-400 font-semibold">
              Score: {score} / {quizQuestions.length}
            </span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-8 text-white">{question.question}</h2>

          <div className="space-y-4 mb-8">
            {question.options.map((option, index) => {
              let bgColor = 'bg-slate-900/50 border-slate-700 hover:border-cyan-500/50';
              let textColor = 'text-gray-300';

              if (showResult) {
                if (index === question.correctAnswer) {
                  bgColor = 'bg-green-500/20 border-green-500';
                  textColor = 'text-green-400';
                } else if (index === selectedAnswer) {
                  bgColor = 'bg-red-500/20 border-red-500';
                  textColor = 'text-red-400';
                }
              } else if (selectedAnswer === index) {
                bgColor = 'bg-cyan-500/20 border-cyan-500';
                textColor = 'text-cyan-400';
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${bgColor} ${textColor} ${
                    !showResult && 'hover:scale-102'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center mr-4 font-semibold">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1">{option}</span>
                    {showResult && index === question.correctAnswer && (
                      <CheckCircle className="text-green-400" size={24} />
                    )}
                    {showResult && index === selectedAnswer && index !== question.correctAnswer && (
                      <XCircle className="text-red-400" size={24} />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {showResult && (
            <div className="bg-slate-900/50 border border-cyan-500/30 rounded-xl p-6 mb-6 animate-fade-in">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Explanation:</h3>
              <p className="text-gray-300">{question.explanation}</p>
            </div>
          )}

          <div className="flex gap-4">
            {!showResult ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  selectedAnswer !== null
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white'
                    : 'bg-slate-700 text-gray-500 cursor-not-allowed'
                }`}
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300"
              >
                {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizSection;
