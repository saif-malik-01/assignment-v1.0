import { Heart, List } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import CardContainer from './card-container';

export default function GoalCard() {
  return (
    <CardContainer
      title="Stay motivated and reach your goals"
      description=" Speak Tutor keeps you motivated and accountable to achieve your goals. Learning a language is better with someone by your side."
    >
      <Card>
        <CardContent className="flex flex-col gap-4 p-3 md:gap-6 md:p-4">
          <div className="grid grid-cols-2 gap-2 md:gap-3">
            <div className="flex flex-1 flex-col items-start justify-start rounded-xl bg-rose-400 p-2 py-3 text-white md:p-4">
              <Heart className="mb-4 h-4 w-4 opacity-90 md:h-8 md:w-8" />
              <p className="text-xs font-medium md:text-xl">
                You&apos;re interested in traveling, and exploring new cultures.
              </p>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start rounded-xl bg-blue-600 p-2 py-3 text-white md:p-4">
              <List className="mb-4 h-4 w-4 opacity-90 md:h-8 md:w-8" />
              <p className="text-xs font-medium md:text-xl">
                We&apos;ve created unique lessons and conversations based on those goals.
              </p>
            </div>
          </div>
          <Button size="xl" className="w-full bg-blue-600 text-white hover:bg-blue-700">
            Get Started
          </Button>
        </CardContent>
      </Card>
    </CardContainer>
  );
}
