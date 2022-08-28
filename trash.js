class Word {
  getWord = () => {
    return document.querySelector(".di-title").innerText;
  };
}

class Definitions {
  getDefinitions = () => {
    let definitions = [];

    const elements = document.querySelectorAll(".sense-body");

    elements.forEach((elem) => {
      let temp = { header: "", translation: "", examples: [] };

      const header = elem.querySelector(".def");
      if (header) temp.header = header.innerText;

      const translation = elem.querySelector(".def-body .trans");
      if (translation) temp.translation = translation.innerText;

      const examples = elem.querySelectorAll(".examp");

      examples.forEach((example) => {
        let tempObj = {};

        const ex = example.querySelector(".eg");
        if (ex) tempObj.ex = ex.innerText;

        const trans = example.querySelector(".trans");
        if (trans) tempObj.trans = trans.innerText;

        temp["examples"].push(tempObj);
      });

      definitions.push(temp);
    });

    return definitions;
  };
}

function init() {
  let result = {
    word: "",
    definitions: [],
  };

  const word = new Word();
  result.word = word.getWord();

  const def = new Definitions();
  result.definitions = def.getDefinitions();

  console.log(result);
}

init();
