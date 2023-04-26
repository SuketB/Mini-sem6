const { useState, useEffect } = require("react")


const useSentenceFinder = () => {

    const [sentenses, setSentences] = useState([])



    const findSentences = (report, keyword1) => {
        const lines = report.split('\n');
        const sentencesArr = [];

        lines.forEach(line => {
            if (line.includes(keyword1)) {
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