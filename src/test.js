const str = "hi hitl weo wegpjw woejf iiw eefef ih poos sPoo"

const checkAnagrams = str => {
  const obj = {};
  const results = {}

  str.split(' ').forEach( w => {
    const word = w.toLowerCase().split('').sort().join('');
    if (results[word]) results[word].push(w);
    else if (obj[word]){
      results[word] = [obj[word], w];
    } else {
      obj[word] = w;
    }
  })

  const resultArr = []
  for (let k in results){
    resultArr.push(results[k]);
  }
  return resultArr;
}

console.log(checkAnagrams(str))