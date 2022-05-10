import { Store } from "../../interfaces"

interface InitialStore {
    stores: Store[]
}

const initialState: InitialStore = {
    stores: []
}

export const storeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_STORES':
            return action.payload;
    
        default:
            return state;
    }
}