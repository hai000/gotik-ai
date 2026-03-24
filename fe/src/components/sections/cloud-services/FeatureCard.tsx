import { ReactNode } from "react";

type FeatureCardProps = {
  title: ReactNode;
  description: ReactNode;
  icon: ReactNode;
  motion?: Record<string, unknown>;
  cardClassName?: string;
  iconWrapperClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

function FeatureCard({
  title,
  description,
  icon,
  motion,
  cardClassName = "bg-white p-8 rounded-3xl border border-sky-blue/10 shadow-sm hover:shadow-xl transition-all duration-300 group",
  iconWrapperClassName = "w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-sky-blue mb-6 group-hover:bg-sky-blue group-hover:text-white transition-colors",
  titleClassName = "text-xl font-bold text-navy-blue mb-4",
  descriptionClassName = "text-neutral-gray leading-relaxed",
}: FeatureCardProps) {
  return (
    <div
      {...motion}
      className={`min-w-0 ${cardClassName}`}
    >
      <div className={iconWrapperClassName}>
        {icon}
      </div>
      <h3 className={`break-words [overflow-wrap:anywhere] ${titleClassName}`}>
        {title}
      </h3>
      <p className={`break-words [overflow-wrap:anywhere] ${descriptionClassName}`}>
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;
