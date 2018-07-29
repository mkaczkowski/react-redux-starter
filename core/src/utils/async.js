//@flow
export const delay = duration => new Promise((res, rej) => setTimeout(res, duration, true));
