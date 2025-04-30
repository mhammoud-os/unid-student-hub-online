
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Info, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Ask = () => {
  const [question, setQuestion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!question.trim()) {
      toast({
        title: "Empty question",
        description: "Please enter your question before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace this URL with your Discord webhook URL when setting up
      const webhookUrl = "YOUR_DISCORD_WEBHOOK_URL";
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // Discord webhook format
          content: "New anonymous question received:",
          embeds: [
            {
              title: "Anonymous Question",
              description: question,
              color: 16766720, // Gold color in decimal
              timestamp: new Date().toISOString(),
            },
          ],
        }),
      });

      if (response.ok) {
        toast({
          title: "Question submitted!",
          description: "Your anonymous question has been sent successfully.",
        });
        setQuestion("");
      } else {
        throw new Error("Failed to send message to Discord");
      }
    } catch (error) {
      console.error("Error submitting question:", error);
      toast({
        title: "Submission error",
        description: "Unable to submit your question. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
            <div>
              <p className="mb-2">
                Feel free to ask any questions about university admissions, student life, or academic guidance. Your identity will remain anonymous.
              </p>
              <p>
                You can also reach us directly at{" "}
                <a 
                  href="mailto:unidadmissions@gmail.com" 
                  className="text-gold hover:underline transition-colors"
                >
                  unidadmissions@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question here..."
            className="min-h-[200px] bg-gray-900 border-gold/20 text-white placeholder:text-gray-400"
            disabled={isSubmitting}
          />
          <Button
            type="submit"
            className="w-full bg-gold hover:bg-gold/90 text-black font-semibold py-6"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Question"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Ask;
