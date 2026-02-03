import type { JSX } from "react";

export interface Item {
    text: string;
}

function ItemListingElement(item: Item): JSX.Element {
    return (
        <div className="bg-gray-500 p-2 rounded-md my-1 mr-2">
            <p>{item.text}</p>
        </div>
    );
}

export function ItemListing(items: Item[]) {
    return (
        <div className="flex flex-row flex-wrap max-w-1/2 items-center">
            {items.map((item: Item) => {
                return <ItemListingElement {...item} key={item.text} />;
            })}
        </div>
    );
}
