const { useState, useEffect } = require("react")


const useSentenceFinder = () => {

    const [sentenses, setSentences] = useState([])



    const findSentences = (report, keyword1) => {
        const lines = report.split('\n');
        const sentencesArr = [];

        const regex = new RegExp(`(^|[^a-zA-Z])${keyword1}([^a-zA-Z]|$)`, 'i');

        lines.forEach(line => {
            if (regex.test(line)) {
                sentencesArr.push(line);
            }
        });

        setSentences(sentencesArr);
    };






    return {
        findSentences, sentenses
    }
}

export default useSentenceFinder