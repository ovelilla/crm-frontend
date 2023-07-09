import { create } from "zustand";
import axios from "@/config/axios";

interface User {
    id: number;
    name: string;
    email: string;
}

interface Errors {
    email?: string;
    password?: string;
}

interface LoginState {
    loading: boolean;
    setLoading: (loading: boolean) => void;
    user: User | null;
    setUser: (user: User | null) => void;
    auth: boolean;
    setAuth: (auth: boolean) => void;
    errors: Errors;
    setErrors: (errors: Errors) => void;
    login: (values: { email: string; password: string }) => Promise<void>;
}

const useLoginStore = create<LoginState>((set) => ({
    loading: false,
    setLoading: (loading) => set({ loading }),
    user: null,
    setUser: (user) => set({ user }),
    auth: false,
    setAuth: (auth) => set({ auth }),
    errors: {},
    setErrors: (errors) => set({ errors }),
    login: async (values) => {
        try {
            set({ loading: true });
            const response = await axios.post("/login", values);
            set({ user: response.data.user, auth: true, errors: {} });
        } catch (error) {
            const errorData =
                error.response &&
                error.response.data &&
                error.response.data.errors
                    ? error.response.data.errors
                    : {};
            set({
                user: null,
                auth: false,
                errors: errorData,
            });
        } finally {
            set({ loading: false });
        }
    },
}));

export default useLoginStore;
