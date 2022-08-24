export function fetchWrapper (input: RequestInfo | URL, init?: RequestInit | undefined) {
    const abortController = new AbortController();
    const fetchInit: RequestInit = {...init, signal: abortController.signal};
    const send = () => {
        return fetch(input, fetchInit);
    }
    const abort = ()=>{
        abortController.abort()
    }
    return {abort, send}
}
