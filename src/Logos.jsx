import { Html } from '@react-three/drei';

function Logos() {
  return (
    <Html fullscreen>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-6">
        <a href="https://www.linkedin.com/in/loganhochwald/" target="_blank" rel="noopener noreferrer">
          <img src="/InBug-White.png" alt="LinkedIn Logo" className="w-10 h-auto cursor-pointer" />
        </a>
        <a href="https://github.com/loganhochwald?tab=repositories" target="_blank" rel="noopener noreferrer">
          <img src="/github-mark-white.png" alt="GitHub Logo" className="w-10 h-auto cursor-pointer" />
        </a>
        <a href="https://medium.com/@loganhochwald" target="_blank" rel="noopener noreferrer">
          <img src="/Medium-Icon-White.png" alt="Medium Logo" className="w-10 h-auto cursor-pointer" />
        </a>
      </div>
    </Html>
  );
}

export default Logos;