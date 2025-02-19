import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4 text-gray-800">
          Welcome home, <span className="text-indigo-600">Itay</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-md mx-auto">
          It&apos;s great to have you back. We hope you&apos;ll enjoy your stay.
        </p>
      </motion.div>
    </div>
  );
};

export default Index;