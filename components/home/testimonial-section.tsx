import Image from 'next/image';

export default function TestimonialSection() {
  return (
    <section className="flex flex-col items-center justify-center space-y-8 p-10 md:p-20">
      <div className="text-primary mx-auto flex items-center gap-2 rounded-full border-2 border-[#f2f2f2] p-4 text-left">
        <Image
          src="/jessica-park.webp"
          alt="User avatar"
          width={20}
          height={20}
          className="h-5 w-5 overflow-hidden rounded-2xl bg-[#ccc]"
        />
        <div className="text-primary text-sm">Jessica Park</div>
      </div>
      <blockquote className="text-primary border-l-0 text-center text-[1.5rem] leading-8 tracking-[-0.03em] md:text-[3.25rem] md:leading-15">
        “The first time I used Speak Tutor, I couldn&apos;t believe it wasn&apos;t a real person. It
        feels like it understands my motivations at a deep.”
      </blockquote>
    </section>
  );
}
