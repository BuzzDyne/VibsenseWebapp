export function beautifyDate(dateSecs) {
  
  dateSecs = dateSecs * 1000;

  let dateObj = new Date(dateSecs)

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  let year = dateObj.getFullYear();
  let month = dateObj.getMonth();
  let day = dateObj.getDate();

  let hour = dateObj.getHours();
  let min = dateObj.getMinutes();


  if (day < 10) {
    day = '0' + day;
  }
  

  if (hour < 10) {
    hour = '0' + hour;
  }

  if (min < 10) {
    min = '0' + min;
  }
  // 17 Sep 2020, 13:54
  let res = day+' '+monthNames[month]+' '+year+', '+hour+':'+min
  // console.log( res );

  debugger

  return res
}