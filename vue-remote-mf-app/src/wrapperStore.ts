import { reactive } from 'vue';

export interface IStore {
    rootCounter: number;
}


export default function createStore(params: IStore) {
    return reactive({
        ...params
    });
}