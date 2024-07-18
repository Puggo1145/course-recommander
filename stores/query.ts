import { create } from "zustand";

type QueryStatus = "idle" | "search" | "error";

type QueryStore = {
    status: QueryStatus;
    changeStatus: (status: QueryStatus) => void;
    
    queryStr: string;
    setQueryStr: (query: string) => void;
}

export const useQuery = create<QueryStore>()((set) => ({
    status: "idle",
    changeStatus: (status) => set({ status: status }),

    queryStr: "",
    setQueryStr: (query) => set({ queryStr: query }),
}));