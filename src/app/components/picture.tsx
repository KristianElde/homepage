/* eslint-disable @next/next/no-img-element */
export default function Picture({ path }: { path: string }) {
  return (
    <div className="rounded-xl w-1/2">
      <img src={path} alt="" />
    </div>
  );
}
