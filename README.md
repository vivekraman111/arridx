#  Example

```shell
$ npm install arridx 
```

```javascript
const {arridx} = require('arridx')

//ES2015 modules
import {arridx} from 'arridx'

let objArr1 = [{manufacturer: "Apple", model: "iPhone 11", storage: "64 GB"},
            {manufacturer: "Apple", model: "iPhone 11", storage: "128 GB"},
            {manufacturer: "Apple", model: "iPhone XR", storage: "64 GB"},
            {manufacturer: "Samsung", model: "Galaxy", storage: "256 GB"},]
let idx1Keys = ["manufacturer", "model"]
let idx1Type = "arr"
let idx1 = arridx.makeIdx(objArr1, idx1Keys, idx1Type)

console.log("\n\nidx1 (JSON):\n" + 
	JSON.stringify(idx1, null, 4))

```

idx1 (JSON):
```json
 {
"Apple": {
    "iPhone 11": [{"manufacturer": "Apple", "model": "iPhone 11", "storage": "64 GB"},
                {"manufacturer": "Apple", "model": "iPhone 11", "storage": "128 GB"}],
    "iPhone XR": [{"manufacturer": "Apple", "model": "iPhone XR", "storage": "64 GB"}]
  },
"Samsung": {
    "Galaxy": [{"manufacturer": "Samsung", "model": "Galaxy", "storage": "256 GB"}]
  }
}
```

```javascript
let queryParams1 = ["Apple", "iPhone 11"]
console.log("\n\nThese are the records for " + 
	idx1Keys.map((k, i) => k + ": " + queryParams1[i]).join(", ") + ":\n" + 
	JSON.stringify(arridx.getIdx(idx1, queryParams1), null, 4))
```

These are the records for manufacturer: Apple, model: iPhone 11:

```json
[
    {
        "manufacturer": "Apple",
        "model": "iPhone 11",
        "storage": "64 GB"
    },
    {
        "manufacturer": "Apple",
        "model": "iPhone 11",
        "storage": "128 GB"
    }
]
```

```javascript
//Example for idxType="obj"

let objArr2 = [
	{empno: "7369", ename: "SMITH", job: "CLERK", mgr: "7902", },
	{empno: "7499", ename: "ALLEN", job: "SALESMAN", mgr: "7698", },
	{empno: "7521", ename: "WARD", job: "SALESMAN", mgr: "7698", },
	{empno: "7566", ename: "JONES", job: "MANAGER", mgr: "7839", },
	{empno: "7698", ename: "BLAKE", job: "MANAGER", mgr: "7839", },
	{empno: "7782", ename: "CLARK", job: "MANAGER", mgr: "7839", },
	{empno: "7788", ename: "SCOTT", job: "ANALYST", mgr: "7566", },
	{empno: "7839", ename: "KING", job: "PRESIDENT", mgr: null, },
	{empno: "7844", ename: "TURNER", job: "SALESMAN", mgr: "7698", },
	{empno: "7876", ename: "ADAMS", job: "CLERK", mgr: "7788", },
	{empno: "7900", ename: "JAMES", job: "CLERK", mgr: "7698", },
	{empno: "7934", ename: "MILLER", job: "CLERK", mgr: "7782", },
	{empno: "7902", ename: "FORD", job: "ANALYST", mgr: "7566", },
	{empno: "7654", ename: "MARTIN", job: "SALESMAN", mgr: "7698", },
	]
let idx2Keys = ["empno"]
let idx2Type = "obj"
let idx2 = arridx.makeIdx(objArr2, idx2Keys, idx2Type)
console.log("\n\nidx2 (JSON):\n" + 
	JSON.stringify(idx2, null, 4))

```

idx2 (JSON):
```json

result (JSON):
{
    "7369": {
        "empno": "7369",
        "ename": "SMITH",
        "job": "CLERK",
        "mgr": "7902"
    },
    "7499": {
        "empno": "7499",
        "ename": "ALLEN",
        "job": "SALESMAN",
        "mgr": "7698"
    },
    "7521": {
        "empno": "7521",
        "ename": "WARD",
        "job": "SALESMAN",
        "mgr": "7698"
    },
    "7566": {
        "empno": "7566",
        "ename": "JONES",
        "job": "MANAGER",
        "mgr": "7839"
    },
    "7654": {
        "empno": "7654",
        "ename": "MARTIN",
        "job": "SALESMAN",
        "mgr": "7698"
    },
    "7698": {
        "empno": "7698",
        "ename": "BLAKE",
        "job": "MANAGER",
        "mgr": "7839"
    },
    "7782": {
        "empno": "7782",
        "ename": "CLARK",
        "job": "MANAGER",
        "mgr": "7839"
    },
    "7788": {
        "empno": "7788",
        "ename": "SCOTT",
        "job": "ANALYST",
        "mgr": "7566"
    },
    "7839": {
        "empno": "7839",
        "ename": "KING",
        "job": "PRESIDENT",
        "mgr": null
    },
    "7844": {
        "empno": "7844",
        "ename": "TURNER",
        "job": "SALESMAN",
        "mgr": "7698"
    },
    "7876": {
        "empno": "7876",
        "ename": "ADAMS",
        "job": "CLERK",
        "mgr": "7788"
    },
    "7900": {
        "empno": "7900",
        "ename": "JAMES",
        "job": "CLERK",
        "mgr": "7698"
    },
    "7902": {
        "empno": "7902",
        "ename": "FORD",
        "job": "ANALYST",
        "mgr": "7566"
    },
    "7934": {
        "empno": "7934",
        "ename": "MILLER",
        "job": "CLERK",
        "mgr": "7782"
    }
}

```

```javascript
let queryParams2 = ["7788"]
console.log("\n\nThese are the records for " + 
	idx2Keys.map((k, i) => k + ": " + queryParams2[i]).join(", ") + ":\n" + 
	JSON.stringify(arridx.getIdx(idx2, queryParams2), null, 4))
```

These are the records for empno: 7788:

```json
{
    "empno": "7788",
    "ename": "SCOTT",
    "job": "ANALYST",
    "mgr": "7566"
}
```