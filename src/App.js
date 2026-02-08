import { useState } from "react";
import "./App.css";
import confetti from "canvas-confetti";

// Valentine's Day Application

const questions = [
  { text: "És do tipo que gosta de provocar só para ver a reação?" },
  { text: "Vais tentar clicar no 'não', só para ver se consegues?" },
  { text: "Ok… mas estás a divertir-te com isto, não estás?" },
  { text: "Admites que estás a sorrir agora?" },
  { text: "Se eu estivesse aí agora, aceitavas um abraço?" },
  { text: "Diz a verdade… gostas da ideia de 'nós'?" },
  { text: "Sem pensar muito… gostas de mim?" },
  { text: "Andas tentando clicar no 'não', né?" },
  { text: "Então… queres namorar comigo?" }
];

const backgroundColors = [
  "linear-gradient(135deg, #ff006e, #ff4d8c)",
  "linear-gradient(135deg, #8338ec, #5608d4)",
  "linear-gradient(135deg, #3a86ff, #1f60d4)",
  "linear-gradient(135deg, #fb5607, #ff006e)",
  "linear-gradient(135deg, #ffbe0b, #ff8c00)",
  "linear-gradient(135deg, #06ffa5, #00d98e)",
  "linear-gradient(135deg, #ff9aa2, #ff758f)",
  "linear-gradient(135deg, #ff006e, #8338ec)",
  "linear-gradient(135deg, #ff4d8c, #3a86ff)"
];

const getBackgroundColor = (index) => backgroundColors[index % backgroundColors.length];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noButtonVisible, setNoButtonVisible] = useState(true);

  const handleYesClick = () => {
    if (currentQuestion === questions.length - 1) {
      // Última pergunta - efeito de confetti e corações
      launchConfetti();
      launchHearts();
      
      // Redirecionar para WhatsApp após animação
      setTimeout(() => {
        const phoneNumber = "351964262184";
        const message = "Sim, gosto de ti 😊 e sim, quero namorar contigo ❤️";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.location.href = whatsappUrl;
      }, 2000);
    } else {
      // Próxima pergunta
      setCurrentQuestion(currentQuestion + 1);
      setNoButtonPosition({ x: 0, y: 0 });
      setNoButtonVisible(true);
    }
  };

  const handleNoHover = () => {
    if (currentQuestion === questions.length - 1) {
      // Última pergunta - botão desaparece
      setNoButtonVisible(false);
      return;
    }

    // Calcular intensidade do movimento baseado na pergunta
    let moveIntensity = 0;
    if (currentQuestion === 0) {
      moveIntensity = 20; // Movimento muito pequeno
    } else if (currentQuestion === 1) {
      moveIntensity = 50; // Começa a fugir
    } else if (currentQuestion <= 4) {
      moveIntensity = 100; // Foge mais
    } else if (currentQuestion <= 6) {
      moveIntensity = 200; // Quase impossível
    }

    // Gerar posição aleatória
    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 100;
    const randomX = Math.random() * moveIntensity * (Math.random() > 0.5 ? 1 : -1);
    const randomY = Math.random() * moveIntensity * (Math.random() > 0.5 ? 1 : -1);

    setNoButtonPosition({
      x: Math.max(-maxX / 2, Math.min(maxX / 2, randomX)),
      y: Math.max(-maxY / 2, Math.min(maxY / 2, randomY))
    });
  };

  const launchConfetti = () => {
    const duration = 3000;
    const end = Date.now() + duration;

    const colors = ['#ff006e', '#fb5607', '#ffbe0b', '#8338ec', '#3a86ff'];

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  const launchHearts = () => {
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 2,
        startVelocity: 0,
        ticks: 200,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2
        },
        colors: ['#ff006e', '#ff4d8c', '#ff758f'],
        shapes: ['circle'],
        gravity: 0.5,
        scalar: 2,
        drift: 0
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  return (
    <div 
      className="valentine-container"
      style={{
        background: getBackgroundColor(currentQuestion),
        transition: 'background 0.8s ease-in-out'
      }}
    >
      <div className="hearts-background">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="floating-heart" style={{ left: `${i * 10}%`, animationDelay: `${i * 0.5}s` }}>❤️</div>
        ))}
      </div>

      <div className="question-card">
        <div className="decorative-image">
          <svg width="80" height="80" viewBox="0 0 100 100" className="animated-hearts">
            <defs>
              <style>{`
                @keyframes heartbeat {
                  0%, 100% { transform: scale(1); }
                  25% { transform: scale(1.3); }
                  50% { transform: scale(1.15); }
                }
                .heart { animation: heartbeat 1.2s ease-in-out infinite; transform-origin: center; }
                .heart:nth-child(1) { animation-delay: 0s; }
                .heart:nth-child(2) { animation-delay: 0.2s; }
                .heart:nth-child(3) { animation-delay: 0.4s; }
              `}</style>
            </defs>
            <g className="heart">
              <path d="M50 85 C20 65, 5 50, 5 35 C5 20, 15 10, 25 10 C35 10, 45 18, 50 28 C55 18, 65 10, 75 10 C85 10, 95 20, 95 35 C95 50, 80 65, 50 85 Z" 
                    fill="#ff006e" opacity="0.9"/>
            </g>
            <g className="heart" style={{transform: 'translate(-15px, -15px)'}}>
              <path d="M50 85 C20 65, 5 50, 5 35 C5 20, 15 10, 25 10 C35 10, 45 18, 50 28 C55 18, 65 10, 75 10 C85 10, 95 20, 95 35 C95 50, 80 65, 50 85 Z" 
                    fill="#ff4d8c" opacity="0.7"/>
            </g>
            <g className="heart" style={{transform: 'translate(15px, -15px)'}}>
              <path d="M50 85 C20 65, 5 50, 5 35 C5 20, 15 10, 25 10 C35 10, 45 18, 50 28 C55 18, 65 10, 75 10 C85 10, 95 20, 95 35 C95 50, 80 65, 50 85 Z" 
                    fill="#ff758f" opacity="0.7"/>
            </g>
          </svg>
        </div>
        
        <div className="question-number">
          Pergunta {currentQuestion + 1} de {questions.length}
        </div>
        
        <h1 className="question-text">
          {questions[currentQuestion].text}
        </h1>

        <div className="buttons-container">
          <button
            className="yes-button"
            onClick={handleYesClick}
          >
            Sim
          </button>

          {noButtonVisible && (
            <button
              className="no-button"
              onMouseEnter={handleNoHover}
              onTouchStart={handleNoHover}
              onClick={handleNoHover}
              style={{
                transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                transition: currentQuestion === 0 ? 'transform 0.1s ease' : 'transform 0.05s ease'
              }}
            >
              Não
            </button>
          )}
        </div>

        <div className="progress-dots">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentQuestion ? 'active' : ''} ${index < currentQuestion ? 'completed' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
