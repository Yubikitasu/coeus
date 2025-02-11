import { LatexRenderer } from "@/components/LatexRenderer";

export default function tSTL(data: string) {
  if (data.includes("$")) {
    const content = data;
    const regex = /\$\$(.*?)\$\$|\$(.*?)\$|\\\[(.*?)\\\]|([^$\\]+)/g;
    const matches = [...content.matchAll(regex)].map((match) => {
      return {
        type: match[1] || match[2] || match[3] ? "latex" : "text",
        content: match[1] || match[2] || match[3] || match[4],
      };
    });
    return (
      <div key={data}>
        {matches.map((match, index) => {
          if (match.type === "latex") {
            return (
              <LatexRenderer
                key={index}
                latex={match.content}
                id={data + index}
              />
            );
          } else {
            return <span key={index}>{match.content}</span>;
          }
        })}
      </div>
    );
  } else {
    return (
      <div key={data}>
        <p>{data}</p>
      </div>
    );
  }
}
