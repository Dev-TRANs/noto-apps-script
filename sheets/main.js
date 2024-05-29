function onSheetEdit() {
    const deployHook = PropertiesService.getScriptProperties().getProperty("CLOUDFLARE_DEPLOY_HOOK");
    UrlFetchApp.fetch(deployHook, { "method" : "POST" })
}
