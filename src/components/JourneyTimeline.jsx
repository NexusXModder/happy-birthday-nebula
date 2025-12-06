"use client";
export default function JourneyTimeline({ items=[] }){
  if(!items || items.length===0) return null;
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h3 className="text-xl font-semibold mb-4 text-center">Our Journey</h3>
      <div className="flex flex-col gap-6">
        {items.map((it,idx)=> (
          <div key={idx} className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white">{idx+1}</div>
            <div>
              <div className="font-semibold">{it.title}</div>
              <div className="text-sm opacity-80">{it.date}</div>
              <div className="mt-1">{it.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
