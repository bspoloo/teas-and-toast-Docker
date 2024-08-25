
async function getData(url: string, endopint: string) {
    return await fetch(url + endopint)
        .then(response => response.json())
        .then(data => data)
}

export default getData;