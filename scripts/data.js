/*
 *   Data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

const data = {
    "entries": [
        {
            id: 1,
            date: "07/24/2025",
            concept: "HTML & CSS",
            entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
            mood: "Ok"
        },
        {
            id: 2,
            date: "06/23/2021",
            concept: "Review",
            entry: "I went back to review previous chapters and was surprised at how much I learned in such a short amount of time!",
            mood: "Happy"
        },
        {
            id: 3,
            date: "06/09/2021",
            concept: "For Loops",
            entry:  "Joe taught us all about for...of loops. My brain hurts!",
            mood: "Curious"
        }
    ]
}

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getJournalEntries = () => {
    const copyOfData = data.entries.map(entry => ({...entry}))
    return copyOfData
}
