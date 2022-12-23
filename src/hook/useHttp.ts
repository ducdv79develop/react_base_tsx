import { createContext, useContext } from "react";
import { from, Observable, throwError } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { mergeMap, switchMap } from "rxjs/operators";
import { getAccessToken } from "../utils/sessionStorageHelper";
import { history } from "../history";
import { t } from "i18next";

const API_BASE_URL = process.env.REACT_APP_API_URL;

export interface Http {
  get: <T>(input: string, init?: RequestInit) => Observable<T>;
  put: <T>(input: string, init?: RequestInit) => Observable<T>;
  post: <T>(input: string, init?: RequestInit) => Observable<T>;
  delete: <T>(input: string, init?: RequestInit) => Observable<T>;
}

const project = (response: Response): Observable<any> => {
  if (response.status === 401) {
    sessionStorage.clear();
    history.push("/login");
    return throwError(() => new Error(t("message.server_error")));
  }

  if (response.status === 403) {
    history.push("/forbidden");
    return throwError(() => new Error(t("message.server_error")));
  }

  if (response.status !== 200) {
    history.push("/errors");
    return throwError(() => new Error(t("message.server_error")));
  }

  return from(response.json());
};

export const HttpContext = createContext<Http>({
  get: <T>(input: string, init?: RequestInit): Observable<T> => {
    const headers = new Headers(init?.headers);
    const token = getAccessToken();
    if (token && !headers.has("Authorization")) {
      headers.append("Authorization", `Bearer ${token}`);
    }

    return fromFetch(`${input.startsWith("http") ? "" : API_BASE_URL}${input}`, {
      method: "GET",
      headers: headers,
      body: init?.body,
    }).pipe(switchMap(project));
  },
  put: <T>(input: string, init?: RequestInit): Observable<T> => {
    const headers = new Headers(init?.headers);
    const token = getAccessToken();
    if (token && !headers.has("Authorization")) {
      headers.append("Authorization", `Bearer ${token}`);
    }

    if (!headers.has("Content-Type") && !(init?.body instanceof FormData)) {
      headers.set("Content-Type", "application/json");
    }

    return fromFetch(`${input.startsWith("http") ? "" : API_BASE_URL}${input}`, {
      method: "PUT",
      headers: headers,
      body: init?.body,
    }).pipe(mergeMap(project));
  },
  post: <T>(input: string, init?: RequestInit): Observable<T> => {
    const headers = new Headers(init?.headers);
    const token = getAccessToken();
    if (token && !headers.has("Authorization")) {
      headers.append("Authorization", `Bearer ${token}`);
    }

    if (!headers.has("Content-Type") && !(init?.body instanceof FormData)) {
      headers.set("Content-Type", "application/json");
    }

    return fromFetch(`${input.startsWith("http") ? "" : API_BASE_URL}${input}`, {
      method: "POST",
      headers: headers,
      body: init?.body,
    }).pipe(mergeMap(project));
  },
  delete: <T>(input: string, init?: RequestInit): Observable<T> => {
    const headers = new Headers(init?.headers);
    const token = getAccessToken();
    if (token && !headers.has("Authorization")) {
      headers.append("Authorization", `Bearer ${token}`);
    }

    if (!headers.has("Content-Type") && !(init?.body instanceof FormData)) {
      headers.set("Content-Type", "application/json");
    }

    return fromFetch(`${input.startsWith("http") ? "" : API_BASE_URL}${input}`, {
      method: "DELETE",
      headers: headers,
      body: init?.body,
    }).pipe(mergeMap(project));
  },
});

export const useHttp = (): Http => useContext(HttpContext);
