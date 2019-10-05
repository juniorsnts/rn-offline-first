export const fecthRepository = {
    get(repository) {
        return fetch(`https://api.github.com/repos/${repository}`).then(response => response.json())
    }
}