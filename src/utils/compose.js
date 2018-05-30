export const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
export const revrseCompose = (...fns) => compose.apply(compose, fns.reverse());