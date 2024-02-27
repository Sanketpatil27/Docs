import { useRef, useState } from "react";
import Card from "./card";


// cards are under this 
export default function Foreground() {
    const ref = useRef(null);
    const data = [
        {
            desc: "1000 Songs in your poket, hurry up, download it!!",
            fileSize: ".9mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
        },
        {
            desc: "1000 stolen Movies",
            fileSize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Share", tagColor: "sky" },
        },
        {
            desc: "buy me a coffee",
            fileSize: ".9mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
        },
    ];

    useState();
    return (
        <div ref={ref} className='fixed z-[3] top-0 w-full h-full flex gap-10 p-5 flex-wrap'>
            { data.map((item, index) => (
                <Card key={index} data={item} reference={ref} />
            ))}
        </div>
    )
}