import "~/styles/globals.css";

interface CardProps {
  title: string;
  description: string;
  tec: string;
}

export const Card = ({ title, description, tec }: CardProps) => {
  return (
    <div className="border-dark_grey hover:bg-hover flex min-h-[190px] flex-col rounded-lg border bg-black p-4 transition">
      <span className="flex items-center gap-2">
        <h3 className="text-lg font-medium text-white">{title}:</h3>
      </span>
      <p className="tracking-sm mt-4 flex w-[300px] flex-row text-sm text-white">
        {description}
      </p>
      <div className="badge-container mt-4 flex w-full justify-end gap-2">
        <div className="w-fit rounded-md bg-blue-600 p-[6px] text-sm font-medium text-black">
          {tec}
        </div>
      </div>
    </div>
  );
};
