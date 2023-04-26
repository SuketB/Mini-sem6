const { useState, useEffect } = require("react")


const useSentenceFinder = () => {

    const [sentenses, setSentences] = useState([])



    const findSentences = (report, keyword1) => {
        let sentencesArr = []


        let n = report.length;
        let m = keyword1.length;
        for (let j = 0; j < m; j++) {
            let keyword = keyword1[j];
            for (let i = 0; i < n; i++) {
                let x = false;
                let new_sentence = "";
                let word = "";

                while (report[i] != '.' && i < n) {
                    if (report[i] == ' ') {


                        new_sentence += word;
                        if (word == keyword) {
                            x = true;
                        }
                        word = "";
                        new_sentence += ' '
                    }
                    else if (report[i] == ',') {
                        new_sentence += word;
                        if (word == keyword) {
                            x = true;
                        }
                        word = ",";

                    }
                    else
                        word += report[i];
                    i++;
                }
                new_sentence += word;
                if (x) {
                    sentencesArr.push(new_sentence);
                }
            }
        }

        setSentences(sentencesArr)
    }




    return {
        findSentences, sentenses
    }
}

export default useSentenceFinder