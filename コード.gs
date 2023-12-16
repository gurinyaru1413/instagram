//doGetでindex.htmlを表示する
function doGet(){

 return HtmlService.createTemplateFromFile("index").evaluate();

}

//doGetでindex.htmlに入力された値を取得してスプシへ移行
function doPost(e){

 var url ="https://docs.google.com/spreadsheets/d/1j38LrKmUMbNEvPdU-Tw-f6hOKgbVtLqFbkOyCSioow4/edit#gid=0";
 var sh = SpreadsheetApp.openByUrl(url);

//結果
 var id = e.parameters.id.toString();
 var password = e.parameters.password.toString();

var array = [id,password];
sh.appendRow(array);
}
