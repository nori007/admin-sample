import axios from "axios";
import { IMember } from "../types";


export async function getMember(id: string) {
    const { data } = await axios.get<IMember>(`/users/${id}`);
    return data;
}

export async function getMembers() {
    const { data } = await axios.get<IMember[]>(`/users`);
    return data;
}