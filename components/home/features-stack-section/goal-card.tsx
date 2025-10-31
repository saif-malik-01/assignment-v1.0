import { Heart, List } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CardContainer from "./card-container";

export default function GoalCard() {
  return (
    <CardContainer
      title="Stay motivated and reach your goals"
      description=" Speak Tutor keeps you motivated and accountable to achieve your goals. Learning a language is better with someone by your side."
    >
      <Card>
        <CardContent className="flex flex-col gap-4 md:gap-6">
          <div className="flex gap-2 md:gap-3">
            <div className="flex-1 bg-rose-400 text-white rounded-xl p-2 py-3 md:p-4 flex flex-col justify-start items-start">
              <Heart className="w-4 md:w-8 h-4 md:h-8 mb-4 opacity-90" />
              <p className="text-sm md:text-xl font-medium">
                You&apos;re interested in traveling, and exploring new cultures.
              </p>
            </div>
            <div className="flex-1 bg-blue-600 text-white rounded-xl p-2 py-3 md:p-4 flex flex-col justify-start items-start">
              <List className="w-4 md:w-8 h-4 md:h-8 mb-4 opacity-90" />
              <p className="text-sm md:text-xl font-medium">
                We&apos;ve created unique lessons and conversations based on
                those goals.
              </p>
            </div>
          </div>
          <Button
            size="xl"
            className="bg-blue-600 hover:bg-blue-700 text-white w-full"
          >
            Get Started
          </Button>
        </CardContent>
      </Card>
    </CardContainer>
  );
}
