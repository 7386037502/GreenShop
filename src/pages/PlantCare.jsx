import Breadcrumb from "../components/Breadcrumb";

export default function PlantCare() {
  const cards = [
    ["Watering Garden", "Water according to the plant's needs and keep soil lightly moist.", "💧"],
    ["Garden Care", "Give plants enough natural light and rotate them regularly.", "🌿"],
    ["Plant Renovation", "Repot when roots become crowded and refresh old soil.", "🪴"]
  ];
  return <><Breadcrumb items={["Plant Care"]}/><div className="container-shop"><div className="bg-green-50 p-8 sm:p-12"><p className="text-xs font-bold uppercase tracking-widest text-green-500">Plant care guide</p><h1 className="mt-3 text-4xl font-bold">Keep your plants happy.</h1><p className="mt-4 max-w-2xl text-sm leading-6 text-gray-500">Simple care routines for watering, light, feeding and repotting.</p></div><div className="mt-10 grid gap-6 md:grid-cols-3">{cards.map(c=><article key={c[0]} className="border border-gray-100 p-7 shadow-soft"><div className="text-4xl">{c[2]}</div><h2 className="mt-5 font-bold">{c[0]}</h2><p className="mt-2 text-sm leading-6 text-gray-500">{c[1]}</p></article>)}</div></div></>;
}