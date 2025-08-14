//this means  that we are importing the ExcelJS class
import ExcelJS from 'exceljs';

//now we need to create object of this
const workbook = new ExcelJS.Workbook();

async function WriteToExcel(FilePath,searchValue,newValue,specificIndex){
    await workbook.xlsx.readFile(FilePath)
    const worksheet = workbook.getWorksheet('Sheet1'); // Assuming 'Sheet1' is the name of your sheet
    const output = await ReadExcel(worksheet,searchValue)
    //Writing to excel
    const cell = worksheet.getCell(output.row, output.col + specificIndex.col);
    cell.value = newValue;
    await workbook.xlsx.writeFile(FilePath);
    console.log(`Updated cell at Row ${output.row}, Column ${output.col} with value '${newValue}'`);
};

async function ReadExcel(worksheet,searchValue) {
    let output ={row:-1,col:-1};
    worksheet.eachRow( (row, rowNumber) => {
        //Reading from excel
        row.eachCell((cell, colNumber) => {
        //console.log(`Row ${rowNumber}, Column ${colNumber}: ${cell.value}`);
        if(cell.value === searchValue) {
            console.log(`Found '${searchValue}' at Row ${rowNumber}, Column ${colNumber}`);
            output.row = rowNumber;
            output.col = colNumber;
        }

        });
    });
    return output;
}
WriteToExcel("D:\\Test Automation\\Playwright_JS\\ExcelJsUtil\\ExcelDemo.xlsx","Apple","Jackfruit",{row: 0, col: 2});