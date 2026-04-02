interface ImagePlaceholderProps {
  label: string;
  width?: string;
  height?: string;
  className?: string;
}

export default function ImagePlaceholder({
  label,
  height = "h-80",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`bg-gray-200 flex items-center justify-center rounded-lg ${height} ${className}`}
    >
      <span className="text-gray-500 text-sm text-center px-4 font-sans italic">
        {label}
      </span>
    </div>
  );
}
