
export const JournalForm = () => {
   return `
    <form class="entryForm">
        <fieldset>
            <label for="entryDate">Date</label>
            <input type="date" name="entryDate" class="entry entryForm__date">
        </fieldset>
        <fieldset>
            <lable for="conceptsCovered">Concepts covered</lable>
            <input type="text" name="conceptsCovered" class="entry entryForm_concept"> 
        </fieldset>
        <fieldset>
            <lable for="journalEntry">Journal Entry</lable>
            <textarea type="textarea" name="journalEntry" class="entry entryForm_journal" rows="2" cols="20"></textarea> 
        </fieldset>
        <fieldset>
            <lable for="moodToday">Mood for the day</lable>
            <select type="dropdown" class="entry entryForm_mood" name="mood_list">
            <option name="mood" class="mood">Choose Mood</option>
            <option name="mood" class="mood">Sad</option> 
            <option name="mood" class="mood">Happy</option> 
            <option name="mood" class="mood">Ok</option>
            <option name="mood" class="mood">Frustrated</option> 
            <option name="mood" class="mood">Curious</option> 
            </select>
        </fieldset>
        <br>
        <button class="button" id="postEntry">Record Journal Entry</button>
    </form> 
    `
}
