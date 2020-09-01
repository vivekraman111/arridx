import {arridx} from '.'

var testData = [
	{
		name: "Small array Index 1",
		description: "Basic test of small array index",
		parameters: [
		[{manufacturer: "Apple", model: "iPhone 11", storage: "64 GB"},
		{manufacturer: "Apple", model: "iPhone 11", storage: "128 GB"},
		{manufacturer: "Apple", model: "iPhone XR", storage: "64 GB"},
		{manufacturer: "Samsung", model: "Galaxy", storage: "256 GB"},],
		["manufacturer", "model"], "arr"
		], 
		get result(){
			return ({
				"Apple": {
					"iPhone 11": [this.parameters[0][0], this.parameters[0][1]],
					"iPhone XR": [this.parameters[0][2]]
				},
				"Samsung": {
					"Galaxy": [this.parameters[0][3]]
				}
			})
		},
		testResult: true,
	},
	{
		name: "Small array Index 2",
		description: "Checks that test fails if index does not use references to array objects",
		parameters: [
		[{manufacturer: "Apple", model: "iPhone 11", storage: "64 GB"},
		{manufacturer: "Apple", model: "iPhone 11", storage: "128 GB"},
		{manufacturer: "Apple", model: "iPhone XR", storage: "64 GB"},
		{manufacturer: "Samsung", model: "Galaxy", storage: "256 GB"},],
		["manufacturer", "model"], "arr"
		], 
		get result(){
			return ({
				"Apple": {
					"iPhone 11": [{manufacturer: "Apple", model: "iPhone 11", storage: "64 GB"},
								  {manufacturer: "Apple", model: "iPhone 11", storage: "128 GB"},],
					"iPhone XR": [{manufacturer: "Apple", model: "iPhone XR", storage: "64 GB"}]
				},
				"Samsung": {
					"Galaxy": [{manufacturer: "Samsung", model: "Galaxy", storage: "256 GB"}]
				}
			})
		},
		testResult: false,
	},
	{
		name: "Obj Index",
		description: "Basic object index",
		parameters: [
		[{empno: "7369", ename: "SMITH", job: "CLERK", mgr: "7902", hiredate: "34133", sal: "800", comm: "0", deptno: "20", },
		{empno: "7499", ename: "ALLEN", job: "SALESMAN", mgr: "7698", hiredate: "36022", sal: "1600", comm: "300", deptno: "30", },
		{empno: "7521", ename: "WARD", job: "SALESMAN", mgr: "7698", hiredate: "35150", sal: "1250", comm: "500", deptno: "30", },
		{empno: "7566", ename: "JONES", job: "MANAGER", mgr: "7839", hiredate: "35003", sal: "2975", comm: null, deptno: "20", },
		{empno: "7698", ename: "BLAKE", job: "MANAGER", mgr: "7839", hiredate: "33766", sal: "2850", comm: null, deptno: "30", },
		{empno: "7782", ename: "CLARK", job: "MANAGER", mgr: "7839", hiredate: "34103", sal: "2450", comm: null, deptno: "10", },
		{empno: "7788", ename: "SCOTT", job: "ANALYST", mgr: "7566", hiredate: "35129", sal: "3000", comm: null, deptno: "20", },
		{empno: "7839", ename: "KING", job: "PRESIDENT", mgr: null, hiredate: "33033", sal: "5000", comm: "0", deptno: "10", },
		{empno: "7844", ename: "TURNER", job: "SALESMAN", mgr: "7698", hiredate: "34854", sal: "1500", comm: "0", deptno: "30", },
		{empno: "7876", ename: "ADAMS", job: "CLERK", mgr: "7788", hiredate: "36315", sal: "1100", comm: null, deptno: "20", },
		{empno: "7900", ename: "JAMES", job: "CLERK", mgr: "7698", hiredate: "36700", sal: "950", comm: null, deptno: "30", },
		{empno: "7934", ename: "MILLER", job: "CLERK", mgr: "7782", hiredate: "36546", sal: "1300", comm: null, deptno: "10", },
		{empno: "7902", ename: "FORD", job: "ANALYST", mgr: "7566", hiredate: "35769", sal: "3000", comm: null, deptno: "20", },
		{empno: "7654", ename: "MARTIN", job: "SALESMAN", mgr: "7698", hiredate: "36134", sal: "1250", comm: "1400", deptno: "30", },],
		["empno"], "obj"
		],
		get result(){
			return ({
				"7369": this.parameters[0][0],
				"7499": this.parameters[0][1],
				"7521": this.parameters[0][2],
				"7566": this.parameters[0][3],
				"7698": this.parameters[0][4],
				"7782": this.parameters[0][5],
				"7788": this.parameters[0][6],
				"7839": this.parameters[0][7],
				"7844": this.parameters[0][8],
				"7876": this.parameters[0][9],
				"7900": this.parameters[0][10],
				"7934": this.parameters[0][11],
				"7902": this.parameters[0][12],
				"7654": this.parameters[0][13],
			})
		},
		testResult: true,
	},
]

/* given an objArr and a queryObj returns matching entries */
function filterGet(objArr, queryObj){
  let queryKeys = Object.keys(queryObj)
  //let res = data.filter(obj => queryKeys.every(key => obj[key] === queryObj[key]))
  let res = []
  for(let i = 0; i < objArr.length; i++){
    let obj = objArr[i]
    let match = true
    for(var j = 0; j < queryKeys.length; j++){
        let key = queryKeys[j]
        match = match && (obj[key] === queryObj[key])
    }
    if(match) res.push(obj)
  }
  return res
}

/* Given an objArr and a set of keys, returns unique sets of corresponding vals */
function getUniqueVals(objArr, keyArr){
  let uniqueValsArr = []
  for(let i = 0; i < objArr.length; i++){
    let obj = objArr[i]
    let nextValArr = []
    for(let j = 0; j < keyArr.length; j++){
      let key = keyArr[j]
      nextValArr.push(obj[key])
    }
    
    if(uniqueValsArr.every(valArr => !valArr.every((val, pos) => val === nextValArr[pos]))){
      uniqueValsArr.push(nextValArr)
    }
  } 
  return uniqueValsArr
}

/* uses objArr as base and compares with idx using the getIdx fn */
function testGetIdx(idx, objArr, keyArr){
	let uniqueValsArr = getUniqueVals(objArr, keyArr)
    return (uniqueValsArr.every(keys => {
  	  let queryObj = keyArr.reduce((obj, k, i) => {
        obj[k] = keys[i]
        return obj
      }, Object.create(null))
      let getIdxResult = arridx.getIdx(idx, keys)
      if(!Array.isArray(getIdxResult)) getIdxResult = [getIdxResult]
	  return keys.every(key => objArrsMatch(getIdxResult, filterGet(objArr, queryObj)))
    }))
}

/* compares two object arrays to see if they point at the same object in memory */
function objArrsMatch(objArr1, objArr2){
  if(objArr1.length !== objArr2.length) return false
  let objArr2Matched = Array(objArr2.length).fill(false) 
  for(let obj1 of objArr1){
    let objFound = false
    for(let j = 0; j < objArr2.length; j++){
      let obj2 = objArr2[j]
      if(Object.is(obj1, obj2) && !objArr2Matched[j]){
        objArr2Matched[j] = true
        objFound = true
        break
      }
    }
    if(!objFound) return false
  }
  return true
}

/* compares an index with either another index or an object array */
function idxMatches(idx, idxOrObjArr, keyArr){
    if(keyArr.length === 0){
      if(!Array.isArray(idx)) idx = [idx]
	  if(!Array.isArray(idxOrObjArr)) idxOrObjArr = [idxOrObjArr]
      return objArrsMatch(idx, idxOrObjArr)
    }

    let isArray = Array.isArray(idxOrObjArr)
    let idxKeys = Object.keys(idx).sort()
    let idx2Keys
    if(!isArray){
      idx2Keys = Object.keys(idxOrObjArr).sort()
      if(idxKeys.length !== idx2Keys.length || !idxKeys.every((e, i) => idx2Keys[i] === e)) return false
    }
    for(let keyValue of idxKeys){
        let match
        match = idxMatches(idx[keyValue], isArray ? idxOrObjArr.filter(obj => obj[keyArr[0]] === keyValue)
                                                  : idxOrObjArr[keyValue],
                                                  keyArr.slice(1))
        if(!match) return false
    }
    return true
}

testData.forEach((testCase, i) => {
	let idx = arridx.makeIdx(...testCase.parameters)
	test("Test case " + (i+1) + ": Name: " + testCase["name"] + " - use built index as base and compare with obj array", () => (
		expect(
			idxMatches(idx, testCase.parameters[0], testCase.parameters[1])
			).toBe(true)
		)
	)

	test("Test case " + (i+1) + ": Name: " + testCase["name"] + " - use obj array as base and compare with built index using getIdx function", () => (
		expect(
			testGetIdx(idx, testCase.parameters[0], testCase.parameters[1])
			).toBe(true)
		)
	)

	if(!testCase.result) return

	test("Test case " + (i+1) + ": Name: " + testCase["name"] + " - use built index as base and compare with index in test data", () => (
		expect(
			idxMatches(idx, testCase.result, testCase.parameters[1])
			).toBe(testCase.testResult)
		)
	)
})