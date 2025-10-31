"use client";

import {
  motion,
  useScroll,
  useTransform,
  type Transition,
} from "framer-motion";
import { useRef } from "react";

import GoalCard from "./goal-card";
import TutorRelationshipCard from "./tutor-relationship-card";
import ChatTopicCard from "./chat-topic-card";

export default function FeaturesStack() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const spring: Transition = {
    type: "spring",
    stiffness: 120,
    damping: 20,
  };

  const card1Y = useTransform(scrollYProgress, [0, 0.25], ["0%", "-120%"]);
  const card1Scale = useTransform(scrollYProgress, [0, 0.25], [1, 0.95]);

  const card2Scale = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5],
    [0.9, 1, 0.95]
  );
  const card2Y = useTransform(scrollYProgress, [0.25, 0.5], ["0%", "-120%"]);

  const card3Scale = useTransform(
    scrollYProgress,
    [0.25, 0.5, 0.75],
    [0.85, 0.9, 1]
  );
  const card3Y = useTransform(
    scrollYProgress,
    [0.5, 0.65, 0.75],
    ["0%", "0%", "0%"]
  );

  return (
    <section ref={ref} className="relative h-[400vh] w-full">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        <div className="relative w-[90vw] h-[75vh] md:h-[90vh] min-w-[300px]">
          <motion.div
            style={{ y: card3Y, scale: card3Scale }}
            transition={spring}
            className={`absolute inset-0 z-0`}
          >
            <TutorRelationshipCard />
          </motion.div>
          <motion.div
            style={{ y: card2Y, scale: card2Scale }}
            transition={spring}
            className={`absolute inset-0 z-10`}
          >
            <ChatTopicCard />
          </motion.div>
          <motion.div
            style={{ y: card1Y, scale: card1Scale }}
            transition={spring}
            className={`absolute inset-0 z-20`}
          >
            <GoalCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
