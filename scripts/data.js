/*
 *   Data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

const data = {
    entries: []
}


export const getEntries = () => {
    return fetch("http://localhost:8088/entries") //Fetch from the API
    .then(response => response.json()) //Parse as JSON
    .then((entries) => {data.entries = entries
    })
}
export const getJournalEntries = () => {
    const copyOfData = data.entries.map(entry => ({...entry}))
    return copyOfData
}
