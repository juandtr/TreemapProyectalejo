import { utils, read, readFile } from "xlsx";
let selectedFile;
console.log(window.XLSX);
document.getElementById('input').addEventListener("change", (event) => {
    selectedFile = event.target.files[0];
})

let data=[{
    "name":"jayanth",
    "data":"scd",
    "abc":"sdef"
}]


document.getElementById('button').addEventListener("click", () => {
    utils.json_to_sheet(data, 'out.xlsx');
    if(selectedFile){
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(selectedFile);
        fileReader.onload = (event)=>{
         let data = event.target.result;
         let workbook = read(data,{type:"binary"});
         console.log(workbook);
         workbook.SheetNames.forEach(sheet => {
              let rowObject = utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
              console.log(rowObject);
              document.getElementById("jsondata").innerHTML = JSON.stringify(rowObject,undefined,4)
         });
        }
    }
});
function ExcelAJSON() {
  const excel = readFile(
    "C:\\Users\\Proprio\\Desktop\\Projet-react-Es3i\\react-treemap-es3i\\src\\components\\datos.xlsx"
  );
  var nombreHoja = excel.SheetNames; // regresa un array
  let datos = utils.sheet_to_json(excel.Sheets[nombreHoja[0]]);

  const jDatos = [];
  for (let i = 0; i < datos.length; i++) {
    const dato = datos[i];
    jDatos.push({
      ...dato,
      Fecha: new Date((dato.Fecha - (25567 + 2)) * 86400 * 1000)
    });
  }
  console.log(jDatos);
}
ExcelAJSON();




