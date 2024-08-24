import Picture from "../components/picture";

export default function Page() {
  const images: string[] = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
  return (
    <div className="mx-4 pt-8 text-md">
      <ul>
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
