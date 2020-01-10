const csv = require("csv");
const obj = csv();

function MyCSV(
  train_no,
  train_name,
  islno,
  st_code,
  st_name,
  arrival_time,
  dept_time,
  distance,
  src_st_code,
  src_st_name,
  dest_st_code,
  dest_st_name
) {
  this.train_no = train_no;
  this.train_name = train_name;
  this.islno = islno;
  this.st_code = st_code;
  this.st_name = st_name;
  this.arrival_time = arrival_time;
  this.dept_time = dept_time;
  this.distance = distance;
  this.src_st_code = src_st_code;
  this.src_st_name = src_st_name;
  this.dest_st_code = dest_st_code;
  this.dest_st_name = dest_st_name;
}

let MyData = [];
let dist = [];
let totNum = [];
obj.from
  .path(
    "/home/abhishek/Desktop/note-app/train-Node/isl_wise_train_detail_03082015_v1.csv"
  )
  .to.array(function(data) {
    for (let index = 0; index < data.length; index++) {
      MyData.push(
        new MyCSV(
          data[index][0],
          data[index][1],
          data[index][2],
          data[index][3],
          data[index][4],
          data[index][5],
          data[index][6],
          data[index][7],
          data[index][8],
          data[index][9],
          data[index][10],
          data[index][11]
        )
      );
    }

    var max = 0;
    for (let i = 1; i < data.length; i++) {
      dist.push(Number(MyData[i].distance));
      totNum.push(MyData[i].train_no);
    }
    //find total number of train
    function getTotalNumberOfTrain(array) {
      let distinctTrainNo = [];
      // Loop through array values

      for (let value of array) {
        if (distinctTrainNo.indexOf(value) === -1) {
          distinctTrainNo.push(value);
          // console.log(uniqueArray)
        }
      }
      return distinctTrainNo;
    }

    console.log(getTotalNumberOfTrain(totNum).length + " :Total num of trains");

    //find maximum distance
    dist.map(d => {
      if (Number(max) < Number(d)) {
        max = d;
      }
    });

    //find minimum distance
    var min = 0;
    dist.map(d => {
      if (Number(min) > Number(d)) {
        min = d;
      }
    });

    console.log("Maximum distance is: " + max);
    console.log("Minimum distance is: " + min);
    let numArr = totNum.reduce(function(acc, curr) {
      if (typeof acc[curr] == "undefined") {
        acc[curr] = 1;
      } else {
        acc[curr] += 1;
      }

      return acc;
    }, {});

    //maximum stops
    let maxStop = 0;
    Object.keys(numArr).map(arr => {
      if (maxStop < numArr[arr]) {
        maxStop = numArr[arr];
      }
    });

    console.log(maxStop + "  :min STOP");

    //minimum stops
    let minStop = 0;
    Object.keys(numArr).map(arr => {
      if (minStop > numArr[arr]) {
        minStop = numArr[arr];
      }
    });

    console.log(minStop + "  :Max STOP");

    //groupby islno
    const groupBy = (array, key) => {
      return array.reduce((result, currentValue) => {
        (result[currentValue[key]] = result[currentValue[key]] || []).push(
          currentValue
        );
        return result;
      }, {});
    };

    const islnoGroup = groupBy(MyData, "islno");
     console.log(islnoGroup);
  });
