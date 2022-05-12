import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../interfaces";
import { setStores } from "../redux/actions/storeActions";
import { StoreInterface } from "../redux/types/storeInterface";

export const useLogin = (stores:Store[]) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const storesInStore = useSelector<StoreInterface, Store[]>(state => state.storeReducer);
    useEffect(() => {
        if(stores)
        {
            dispatch(setStores(stores));
            router.replace('/list');
        }
    }, [stores, dispatch, router]);

    useEffect(() => {
        if(!stores && !storesInStore)
            router.replace('/')
    }, [stores, storesInStore, router])
    return {
        storesInStore
    }
}
