import { ReactNode } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  title: ReactNode;
  items: FaqItem[];
  headerMotionProps?: Record<string, unknown>;
  itemMotion?: (index: number) => Record<string, unknown>;
  sectionClassName?: string;
  containerClassName?: string;
  headerClassName?: string;
  titleClassName?: string;
  listClassName?: string;
  itemClassName?: string;
  questionClassName?: string;
  answerClassName?: string;
};

export default function FAQSection({
  title,
  items,
  headerMotionProps,
  itemMotion,
  sectionClassName = "py-24 bg-white",
  containerClassName = "max-w-4xl mx-auto px-6 lg:px-8",
  headerClassName = "text-center mb-16",
  titleClassName = "font-display text-4xl lg:text-5xl text-navy-blue mb-6",
  listClassName = "space-y-6",
  itemClassName = "bg-slate-50 rounded-2xl p-8 border border-sky-blue/10",
  questionClassName = "font-display text-xl text-navy-blue mb-4",
  answerClassName = "text-neutral-gray leading-relaxed"
}: FAQSectionProps) {
  return (
    <section className={sectionClassName} id="faq">
      <div className={containerClassName}>
        <div className={headerClassName} {...(headerMotionProps ?? {})}>
          <h2 className={titleClassName}>{title}</h2>
        </div>

        <div className={listClassName}>
          {items.map((item, index) => (
            <div key={index} {...(itemMotion ? itemMotion(index) : {})} className={itemClassName}>
              <h3 className={questionClassName}>{item.question}</h3>
              <p className={answerClassName}>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
