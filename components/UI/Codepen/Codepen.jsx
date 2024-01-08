import React, { useEffect }  from 'react';
import { useScript } from "@uidotdev/usehooks";

export default function Codepen({url}) {
    const hash = url.split("/").reverse()[0];
    const CodePenScript = useScript(
        "https://static.codepen.io/assets/embed/ei.js"
    );

    useEffect(() => {
        if (CodePenScript === "ready" && typeof window !== `undefined`) {
            window.__CPEmbed()
        }
    }, [CodePenScript]);
    return <p className="codepen"
              data-height="400"
              data-default-tab="result"
              data-user="yasingencnet"
              data-slug-hash={hash}>

    </p>
}