import {atom} from "recoil";
type course = {
    _id  : string;
    title : string;
    price : string;
    description: string;
    imageLink : string;
    published : boolean;
}
export const courseAtom = atom<course[]>({
    key:'courseAtom',
    default : []
});