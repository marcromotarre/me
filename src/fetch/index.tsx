export function request<TResponse>(
  url: string,
  config?: RequestInit
): Promise<TResponse> {
  return fetch(url, config)
    .then((response) => response.json())
    .then((data) => data);
}

export const api = {
  get: <TResponse,>(url: string) => request<TResponse>(url, {}),
  // Using `extends` to set a type constraint:
  post: <TBody extends BodyInit, TResponse>(url: string, body: TBody) =>
    request<TResponse>(url, { method: "POST", body }),
};
