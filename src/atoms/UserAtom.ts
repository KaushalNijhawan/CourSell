import {RecoilState, atom} from 'recoil';
export const userDetails : RecoilState<{username : string}> = atom({
    key: 'userAtom',
    default: {username :''},
});