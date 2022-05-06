// Generated by https://quicktype.io

export interface LoginInterface {
    response: Response;
}

export interface Response {
    users:  User[];
    stores: Store[];
}

export interface Store {
    id:          number;
    name:        string;
    address:     string;
    description: string;
    products:    Product[];
}

export interface Product {
    id:   number;
    name: string;
}

export interface User {
    id:       number;
    name:     string;
    email:    string;
    password: string;
}
