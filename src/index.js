export const arridx = (function arridx_wrapper(){

  function makeIdx(objArr, keyArr, idxType="arr"){
    let idx = Object.create(null)
    for(let i = 0; i < objArr.length; i++){
      let obj = objArr[i]
      let currIdxObj = idx
      for(let j = 0; j < keyArr.length; j++){
        let key = keyArr[j]
        let lastKey = (j === (keyArr.length - 1))

        if(lastKey && currIdxObj[obj[key]]){
          if(idxType === "obj") currIdxObj[obj[key]] = obj //may be an error condition
          else currIdxObj[obj[key]].push(obj)
        }
        else if(!lastKey && currIdxObj[obj[key]]){
          currIdxObj = currIdxObj[obj[key]]
        }
        else if(lastKey && !currIdxObj[obj[key]]){
          if(idxType === "obj") currIdxObj[obj[key]] = obj
          else currIdxObj[obj[key]] = [obj]
        }
        else{ //(!lastKey && !currIdxObj[obj[key]])
          currIdxObj[obj[key]] = Object.create(null)
          currIdxObj = currIdxObj[obj[key]]
        }
      }
    }
    return idx
  }

  function getIdx(idx, path_arr){
      for(let key_val of path_arr){
          if(!idx || !idx[key_val]) return null
          idx = idx[key_val]
      }
      return idx;
  }

  return {makeIdx, getIdx};
})();