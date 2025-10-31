import { User, Bot, Image as ImageIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CardContainer from "@/components/home/features-stack-section/card-container";

export default function ChatTopicCard() {
  return (
    <CardContainer
      title="Talk about anything, anytime, anywhere"
      description="Speak Tutor is your on-the-go conversational partner. Practice speaking on any topic, anytime, no matter how niche."
    >
      <Card>
        <CardContent className="space-y-2 md:space-y-4 p-0">
          <p className="text-xs md:text-sm text-primary text-center font-semibold border-b border-gray-100 pb-3">
            Create your own
          </p>
          <div className="flex flex-col gap-4 px-4 md:px-8">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
              <User className="w-5 md:w-8 h-5 md:h-8 text-primary" />
              <p className="text-xs md:text-md text-primary font-semibold">Tourist</p>
            </div>
            <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
              <Bot className="w-5 md:w-8 h-5 md:h-8 text-primary" />
              <p className="text-xs md:text-md text-primary font-semibold">New friend</p>
            </div>
            <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
              <ImageIcon className="w-8 md:w-10 h-8 md:h-10 text-primary" />
              <p className="text-xs md:text-md text-primary font-semibold">
                Talking about the best places to grab dinner in San Francisco.
              </p>
            </div>
            <Button
              size="xl"
              className="bg-blue-600 hover:bg-blue-700 text-white w-full mt-2"
            >
              Start chatting
            </Button>
          </div>
        </CardContent>
      </Card>
    </CardContainer>
  );
}
