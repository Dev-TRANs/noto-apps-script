function onSheetEdit() {
    const deployHook = PropertiesService.getScriptProperties().getProperty("VERCEL_DEPLOY_HOOK");
    UrlFetchApp.fetch(deployHook)
}