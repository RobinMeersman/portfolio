import type { JSX } from "react";

export interface Item {
    text: string;
    [key: string]: any;
}

function ItemListingElement(props: { item: Item; scale?: number }): JSX.Element {
    const scale = props.scale ?? 1.0;

    return (
        <div className="bg-gray-500 p-2 rounded-md my-1 mr-2" style={{ scale: scale }}>
            <p>{props.item.text}</p>
        </div>
    );
}

export function ItemListing(props: { items: Item[]; scale?: number }) {
    return (
        <div className="flex flex-row flex-wrap items-center">
            {props.items.map((item: Item) => {
                return <ItemListingElement item={item} scale={props.scale} key={item.text} />;
            })}
        </div>
    );
}
