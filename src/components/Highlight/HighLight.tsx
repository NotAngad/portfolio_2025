const Highlight = ({
  text,
  highlights,
}: {
  text: string;
  highlights: string[];
}) => {
  const pattern = new RegExp(`(${highlights.join("|")})`, "gi");
  const parts = text.split(pattern);

  return (
    <>
      {parts.map((part, index) =>
        highlights.some((h) => part.toLowerCase() === h.toLowerCase()) ? (
          <span key={index} className="text-green-400">
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </>
  );
};

export default Highlight;
