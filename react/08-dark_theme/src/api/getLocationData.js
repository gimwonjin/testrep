import { getXmlToJson } from "../utils/getXmlToJson";

const SERVICE_KEY =
  "G1CKTsY%2B7T6rg4oYnq0LDB4m2C5hi8qFLYY63YXjyYSbXaeQ7K%2FcuNkz8Bq6guHkoHM640uj%2FU0gav6uLI%2BUZg%3D%3D";

function getFormattedDate() {
  const today = new Date();
  const isoString = today.toISOString();
  const formattedDate = isoString.split("T")[0].split("-").join("");
  console.log(formattedDate);
  return formattedDate;
}

async function getSunsetRiseData() {
  var xhr = new XMLHttpRequest();
  var url =
    "http://apis.data.go.kr/B090041/openapi/service/RiseSetInfoService/getAreaRiseSetInfo"; /*URL*/
  var queryParams =
    "?" + encodeURIComponent("serviceKey") + "=" + SERVICE_KEY; /*Service Key*/
  queryParams +=
    "&" +
    encodeURIComponent("locdate") +
    "=" +
    encodeURIComponent(getFormattedDate); /**/
  queryParams +=
    "&" +
    encodeURIComponent("location") +
    "=" +
    encodeURIComponent("대전"); /**/
    const result = await fetch(url + queryParams);
    console.log(result);
    const textResult = await result.text();
    console.log(textResult);
    const xmlString = new DOMParser().parseFromString(textResult, 'text/xml')
    const jsonReuslt = getXmlToJson(xmlString);
    console.log(jsonReuslt);
//   xhr.open("GET", url + queryParams);
//   xhr.onreadystatechange = function () {
//     if (this.readyState == 4) {
//       console.log(
//         "Status: " +
//           this.status +
//           "nHeaders: " +
//           JSON.stringify(this.getAllResponseHeaders()) +
//           "nBody: " +
//           this.responseText
//       );
//     }
//   };

//   xhr.send("");
return jsonReuslt.response.body.items.items;
}

export { getSunsetRiseData };
