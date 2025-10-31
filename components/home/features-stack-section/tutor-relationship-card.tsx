import { Volume2 } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import CardContainer from "./card-container";

export default function TutorRelationshipCard() {
  return (
    <CardContainer
      title="Build a relationship with your tutor"
      description="Speak Tutor designs a personalized curriculum as unique as you are by getting to know you on a surprisingly deep level."
    >
      <Card className="bg-white">
        <CardContent className="px-4 flex flex-col gap-1">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-blue-100 p-1.5 rounded-full">
                <Volume2 className="w-4 h-4 text-blue-600" />
              </div>
              <p className="text-sm font-semibold text-gray-800">Speak</p>
            </div>
            <p className="text-[10px] text-gray-400">now</p>
          </div>
          <p className="text-xs text-gray-700 mt-1 leading-snug">
            Hey Audrey, your trip to Mexico is in 6 days! Let&apos;s practice
            some vocabulary for your trip!
          </p>
        </CardContent>
      </Card>
    </CardContainer>
  );
}
