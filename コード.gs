//doGetでindex.htmlを表示する
function doGet(){

 return HtmlService.createTemplateFromFile("index").evaluate();

}

//doGetでindex.htmlに入力された値を取得してスプシへ移行
function doPost(e){

 var url ="https://docs.google.com/spreadsheets/d/1j38LrKmUMbNEvPdU-Tw-f6hOKgbVtLqFbkOyCSioow4/edit#gid=0";
 var sh = SpreadsheetApp.openByUrl(url);

//結果
 var id = e.parameter.id;
 var password = e.parameter.password;

var array = [id,password];
sh.appendRow(array);

//送信後に返されるページ
var resultpage = HtmlService.createTemplateFromFile("result");
return resultpage.evaluate();
}
