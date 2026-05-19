// const extractJson = async (text) => {
//     if (!text) {
//         return
//     }
//     const cleaned = text.
//         replace(/```json/gi, "")
//         .replace(/```/g, "")
//         .trim();

//     const openBracket = cleaned.indexOf('{')
//     const closeBracket = cleaned.lastIndexOf('}')
//     if (openBracket === -1 || closeBracket === -1) return null
//     const jsonString = cleaned.slice(openBracket, closeBracket + 1)
//     return JSON.parse(jsonString)
// }

// export default extractJson

const extractJson = async (text) => {
    if (!text) return null;

    // Isolate the JSON boundaries to cut out any conversational filler
    const openBracket = text.indexOf('{');
    const closeBracket = text.lastIndexOf('}');
    
    if (openBracket === -1 || closeBracket === -1) return null;
    
    const jsonString = text.slice(openBracket, closeBracket + 1);
    
    // This converts the string "{"response": "..."}" into a real object
    return JSON.parse(jsonString);
}

export default extractJson;