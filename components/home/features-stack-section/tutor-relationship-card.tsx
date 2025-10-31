import { Volume2 } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import CardContainer from './card-container';

export default function TutorRelationshipCard() {
  return (
    <CardContainer
      title="Build a relationship with your tutor"
      description="Speak Tutor designs a personalized curriculum as unique as you are by getting to know you on a surprisingly deep level."
    >
      <Card className="bg-white">
        <CardContent className="flex flex-col gap-1 px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-blue-100 p-1.5">
                <Volume2 className="h-4 w-4 text-blue-600" />
              </div>
              <p className="text-sm font-semibold text-gray-800">Speak</p>
            </div>
            <p className="text-[10px] text-gray-400">now</p>
          </div>
          <p className="mt-1 text-xs leading-snug text-gray-700">
            Hey Audrey, your trip to Mexico is in 6 days! Let&apos;s practice some vocabulary for
            your trip!
          </p>
        </CardContent>
      </Card>
    </CardContainer>
  );
}
