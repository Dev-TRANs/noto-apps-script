function onSubmitForm(e){
    const sheetId = PropertiesService.getScriptProperties().getProperty("SHEET_ID");
    const deployHook = PropertiesService.getScriptProperties().getProperty("VERCEL_DEPLOY_HOOK");
    const sheet = SpreadsheetApp.openById(sheetId).getSheetByName("images")
    const fileIds = e.response.getItemResponses()[0].getResponse()
    fileIds.forEach((fileId) => {
      const file = DriveApp.getFileById(fileId)
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      sheet.getRange(sheet.getLastRow() + 1, 1, 1, 2).setValues([[`https://lh3.googleusercontent.com/d/${fileId}`, `=HYPERLINK("${file.getUrl()}","開く")`]]);
    })
    UrlFetchApp.fetch(deployHook)
}