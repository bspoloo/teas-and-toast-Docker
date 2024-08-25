import { split } from "postcss/lib/list";

function convertName(name: string): string  {
    let names = name.split(' / ');
    return names.join('_');
}

export default convertName;