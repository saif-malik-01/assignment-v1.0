import React from "react";

import { Card, CardContent } from "@/components/ui/card";

interface CardContainerProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function CardContainer({
  title,
  description,
  children,
}: CardContainerProps) {
  return (
    <Card className="md:px-8 py-8 md:py-12 flex flex-col md:flex-row justify-between w-full h-full">
      <CardContent className="h-full flex flex-col md:flex-row justify-between gap-2 md:gap-12">
        <div className="md:w-1/2 flex flex-col justify-between">
          <h2 className="text-center md:text-start text-primary tracking-[-0.04rem] mt-0 mb-4 md:mb-16 text-[1.5rem] md:text-[2.5rem] font-normal leading-[110%]">
            {title}
          </h2>
          <p className="text-center md:text-start text-primary opacity-50 tracking-[-0.06rem] text-[1rem] md:text-[1.25rem] leading-[150%] font-semibold indent-0 normal-case whitespace-normal mb-8">
            {description}
          </p>
        </div>
        <div className="md:w-1/2 min-h-[400px] px-4 py-8 bg-gray-100 rounded-4xl flex items-center">
          {children}
        </div>
      </CardContent>
    </Card>
  );
}
