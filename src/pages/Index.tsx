import { useEffect, useRef } from "react";
import gsap from "gsap";

const Index = () => {
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.from(containerRef.current, {
      duration: 1,
      opacity: 0,
      y: 30
    })
    .from(headingRef.current, {
      duration: 0.8,
      opacity: 0,
      y: 20,
      delay: 0.2
    })
    .from(textRef.current, {
      duration: 0.8,
      opacity: 0,
      y: 20,
      delay: -0.4
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50">
      <div ref={containerRef} className="text-center">
        <h1 
          ref={headingRef}
          className="text-5xl font-bold mb-4 text-gray-800"
        >
          Welcome home, <span className="text-indigo-600">Itay</span>
        </h1>
        <p 
          ref={textRef}
          className="text-xl text-gray-600 max-w-md mx-auto"
        >
          It&apos;s great to have you back. We hope you&apos;ll enjoy your stay.
        </p>
      </div>
    </div>
  );
};

export default Index;