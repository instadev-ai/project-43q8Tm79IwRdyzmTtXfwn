import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pt-16 bg-gradient-to-br from-purple-50 to-indigo-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4 text-gray-800">
          Welcome home, <span className="text-indigo-600">Itay</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-md mx-auto mb-8">
          Let&apos;s get you started with these onboarding tasks.
        </p>
      </motion.div>
    </div>
  );
};

export default Index;