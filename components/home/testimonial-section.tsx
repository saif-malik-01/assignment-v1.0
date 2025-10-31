import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section className="flex flex-col justify-center items-center p-10 md:p-20 space-y-8">
      <div className="flex items-center text-primary text-left border-2 border-[#f2f2f2] rounded-full mx-auto p-4 gap-2">
        <Image
          src="/jessica-park.webp"
          alt="User avatar"
          width={20}
          height={20}
          className="bg-[#ccc] rounded-2xl w-5 h-5 overflow-hidden"
        />
        <div className="text-sm text-primary">Jessica Park</div>
      </div>
      <blockquote className="text-primary text-center tracking-[-0.03em] border-l-0 text-[1.5rem] md:text-[3.25rem] leading-8 md:leading-15">
        “The first time I used Speak Tutor, I couldn&apos;t believe it
        wasn&apos;t a real person. It feels like it understands my motivations
        at a deep.”
      </blockquote>
    </section>
  );
}
