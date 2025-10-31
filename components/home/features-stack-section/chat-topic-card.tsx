import { User, Bot, Image as ImageIcon } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import CardContainer from '@/components/home/features-stack-section/card-container';

export default function ChatTopicCard() {
  return (
    <CardContainer
      title="Talk about anything, anytime, anywhere"
      description="Speak Tutor is your on-the-go conversational partner. Practice speaking on any topic, anytime, no matter how niche."
    >
      <Card>
        <CardContent className="space-y-2 p-0 md:space-y-4">
          <p className="text-primary border-b border-gray-100 pb-3 text-center text-xs font-semibold md:text-sm">
            Create your own
          </p>
          <div className="flex flex-col gap-4 px-4 md:px-8">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
              <User className="text-primary h-5 w-5 md:h-8 md:w-8" />
              <p className="md:text-md text-primary text-xs font-semibold">Tourist</p>
            </div>
            <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
              <Bot className="text-primary h-5 w-5 md:h-8 md:w-8" />
              <p className="md:text-md text-primary text-xs font-semibold">New friend</p>
            </div>
            <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
              <ImageIcon className="text-primary h-8 w-8 md:h-10 md:w-10" />
              <p className="md:text-md text-primary text-xs font-semibold">
                Talking about the best places to grab dinner in San Francisco.
              </p>
            </div>
            <Button size="xl" className="mt-2 w-full bg-blue-600 text-white hover:bg-blue-700">
              Start chatting
            </Button>
          </div>
        </CardContent>
      </Card>
    </CardContainer>
  );
}
