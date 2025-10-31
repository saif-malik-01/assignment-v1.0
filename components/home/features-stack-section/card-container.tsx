import React from 'react';

import { Card, CardContent } from '@/components/ui/card';

interface CardContainerProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function CardContainer({ title, description, children }: CardContainerProps) {
  return (
    <Card className="flex h-full w-full flex-col justify-between py-8 md:flex-row md:px-8 md:py-12">
      <CardContent className="flex h-full flex-col justify-between gap-2 md:flex-row md:gap-12">
        <div className="flex flex-col justify-between md:w-1/2">
          <h2 className="text-primary mt-0 mb-4 text-center text-[1.5rem] leading-[110%] font-normal tracking-[-0.04rem] md:mb-16 md:text-start md:text-[2.5rem]">
            {title}
          </h2>
          <p className="text-primary mb-8 text-center indent-0 text-[1rem] leading-[150%] font-semibold tracking-[-0.06rem] whitespace-normal normal-case opacity-50 md:text-start md:text-[1.25rem]">
            {description}
          </p>
        </div>
        <div className="flex min-h-80 items-center rounded-4xl bg-gray-100 px-4 py-8 md:w-1/2">
          {children}
        </div>
      </CardContent>
    </Card>
  );
}
