/* eslint-disable @next/next/no-img-element */
export default function Picture({ path }: { path: string }) {
  return (
    <div className="mx-8 rounded-xl w-1/2">
      <img className="rounded-2xl" src={path} alt="" />
    </div>
  );
}
