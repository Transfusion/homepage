export default function KeywordPillbox({ keywords }: { keywords: (JSX.Element | string)[] }) {
  return <div className="inline-block flex-row flex-wrap -mx-1 py-2">
    {keywords.map(word => <>
      <div className="inline-block m-1 px-2 rounded-full border-2 border-[color:var(--colors-primary)]">
        {word}
      </div>&nbsp;
    </>)}
    {/* 
    <div className="inline-block m-1 px-2 rounded-full border-2 border-[color:var(--colors-primary)]"><strong>Redux</strong></div>&nbsp;
    <div className="inline-block m-1 px-2 rounded-full border-2 border-[color:var(--colors-primary)]">ASP.NET 4</div>&nbsp;
    <div className="inline-block m-1 px-2 rounded-full border-2 border-[color:var(--colors-primary)]">MSSQL</div>&nbsp;
    <div className="inline-block m-1 px-2 rounded-full border-2 border-[color:var(--colors-primary)]">20K+ downloads</div>&nbsp; */}
  </div>

}