import Set from "../Classes/Set";
export default function (sus) {
    return [...(new Set(...sus).toArray())];
}
