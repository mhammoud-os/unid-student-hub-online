
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Info } from "lucide-react";

const Ask = () => {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Question submitted:", question);
    setQuestion("");
  };

  return (
    <div className="min-h-screen bg-black text-white py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-center mb-8 text-gold">
          Ask Anonymously
        </h1>
        
        <div className="bg-gray-900 p-6 rounded-lg border border-gold/20 mb-8">
          <div className="flex items-start gap-3 mb-4 text-gray-300">
            <Info className="w-5 h-5 mt-1 text-gold" />
            <p>
              Feel free to ask any questions about university admissions, student life, or academic guidance. Your identity will remain anonymous.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question here..."
            className="min-h-[200px] bg-gray-900 border-gold/20 text-white placeholder:text-gray-400"
          />
          <Button
            type="submit"
            className="w-full bg-gold hover:bg-gold/90 text-black font-semibold py-6"
          >
            Submit Question
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Ask;
