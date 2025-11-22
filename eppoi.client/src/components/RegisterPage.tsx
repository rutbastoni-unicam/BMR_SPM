import { useState } from 'react';
import { UserPlus, ArrowLeft } from 'lucide-react';
import logoImage from 'figma:asset/958defa264c22f47e7a42e2e88ba5be34b61d176.png';

interface RegisterPageProps {
  onRegister: (name: string) => void;
  onNavigateToLogin: () => void;
  onNavigateToWelcome: () => void;
}

export default function RegisterPage({ onRegister, onNavigateToLogin, onNavigateToWelcome }: RegisterPageProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && password && acceptTerms) {
      const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
      onRegister(capitalizedName);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#004d99]">
      {/* Header */}
      <div className="bg-[#0066cc] px-3 sm:px-4 py-4 sm:py-5 md:py-6 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <img src={logoImage} alt="Eppoi" className="h-5 sm:h-6 md:h-7 ml-1 sm:ml-2" />
          <button
            onClick={onNavigateToWelcome}
            className="flex items-center gap-1.5 sm:gap-2 bg-white text-[#0066cc] hover:bg-[#bfdfff] px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            <span className="text-[13px] sm:text-[14px] md:text-[16px] font-['Titillium_Web:SemiBold',sans-serif]">Indietro</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-3 sm:px-4 py-6 sm:py-8 md:py-12">
        <div className="w-full sm:max-w-md">
          <div className="bg-white rounded-lg shadow-lg p-5 sm:p-6 md:p-8">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="bg-[#0066cc] p-3 sm:p-4 rounded-full">
                <UserPlus className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
            </div>

            <h2 className="text-[#004d99] text-[24px] sm:text-[28px] md:text-[32px] font-['Titillium_Web:Bold',sans-serif] text-center mb-2">
              Registrazione
            </h2>
            <p className="text-[#004080] text-[13px] sm:text-[14px] md:text-[16px] font-['Titillium_Web:Regular',sans-serif] text-center mb-5 sm:mb-6 md:mb-8">
              Crea il tuo account per iniziare
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4 md:space-y-5">
              {/* Name Field */}
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-[#004080] text-[15px] sm:text-[16px] md:text-[18px] font-['Titillium_Web:SemiBold',sans-serif] mb-2"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-[#0066cc] focus:outline-none text-[15px] sm:text-[16px] font-['Titillium_Web:Regular',sans-serif]"
                  placeholder="inserisci il tuo nome"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-[#004080] text-[15px] sm:text-[16px] md:text-[18px] font-['Titillium_Web:SemiBold',sans-serif] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-[#0066cc] focus:outline-none text-[15px] sm:text-[16px] font-['Titillium_Web:Regular',sans-serif]"
                  placeholder="inserisci la tua email"
                  required
                />
              </div>

              {/* Password Field */}
              <div>
                <label 
                  htmlFor="password" 
                  className="block text-[#004080] text-[15px] sm:text-[16px] md:text-[18px] font-['Titillium_Web:SemiBold',sans-serif] mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-[#0066cc] focus:outline-none text-[15px] sm:text-[16px] font-['Titillium_Web:Regular',sans-serif]"
                  placeholder="crea una password"
                  required
                />
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="w-4 h-4 text-[#0066cc] border-gray-300 rounded focus:ring-[#0066cc] mt-1"
                  required
                />
                <label 
                  htmlFor="terms" 
                  className="ml-2 text-[#004080] text-[12px] sm:text-[13px] md:text-[14px] font-['Titillium_Web:Regular',sans-serif]"
                >
                  Accetto i{' '}
                  <a href="#" className="text-[#0066cc] hover:underline">
                    termini e condizioni
                  </a>
                  {' '}e la{' '}
                  <a href="#" className="text-[#0066cc] hover:underline">
                    privacy policy
                  </a>
                </label>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                className="w-full bg-[#0066cc] hover:bg-[#004d99] text-white py-3 sm:py-3.5 md:py-4 px-6 rounded-lg text-[17px] sm:text-[18px] md:text-[20px] font-['Titillium_Web:SemiBold',sans-serif] transition-colors"
              >
                Registrati
              </button>

              {/* Divider */}
              <div className="relative my-3.5 sm:my-4 md:my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-4 text-gray-500 text-[13px] sm:text-[14px] font-['Titillium_Web:Regular',sans-serif]">
                    Hai già un account?
                  </span>
                </div>
              </div>

              {/* Login Button */}
              <button
                type="button"
                onClick={onNavigateToLogin}
                className="w-full bg-white border-2 border-[#0066cc] text-[#0066cc] hover:bg-[#f0f7ff] py-3 sm:py-3.5 md:py-4 px-6 rounded-lg text-[17px] sm:text-[18px] md:text-[20px] font-['Titillium_Web:SemiBold',sans-serif] transition-colors"
              >
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#004080] px-3 sm:px-4 py-3 sm:py-4 text-center">
        <p className="text-[#bfdfff] text-[11px] sm:text-[12px] md:text-[14px] font-['Titillium_Web:Regular',sans-serif]">
          © 2025 Eppoi - Powered by Italian Design System
        </p>
      </div>
    </div>
  );
}