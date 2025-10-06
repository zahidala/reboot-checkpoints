import axios from "axios";

export const useClient = () => {
    const client = axios.create({
        baseURL: "https://corsproxy.io/?https://learn.reboot01.com/api",
        timeout: 600000 * 10,
    });

    return client;
};