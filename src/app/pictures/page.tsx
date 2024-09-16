import Picture from "../../components/picture";

export default function Page() {
  const images: string[] = [];
  return (
    <div className="mx-4 pt-8 text-md">
      <ul className="space-y-3">
        {images.map((image, i) => {
          return (
            <li
              key={i}
              className={`flex ${i % 2 == 0 ? "justify-start" : "justify-end"}`}
            >
              <Picture path={image}></Picture>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
