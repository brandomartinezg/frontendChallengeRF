import { createAction } from "@reduxjs/toolkit";
import { Store } from "../../interfaces";



export const setStores = createAction<Store[] | undefined>('SET_STORES');