import { AxiosError } from "axios";
import { UseMutationOptions, UseQueryOptions } from "@tanstack/react-query";

export type MutationOptions<Response, Args = void> = UseMutationOptions<Response, AxiosError<any>, Args, any>;
export type QueryOptions<Response> = UseQueryOptions<Response, AxiosError<any>, Response, any>;
