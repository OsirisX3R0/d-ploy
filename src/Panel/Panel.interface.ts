import * as vscode from 'vscode'

export default interface PanelInterface {
    panel: vscode.WebviewPanel,
    viewType: string,
    title: string,
    showOptions: vscode.ViewColumn | {preserveFocus: boolean, viewColumn: vscode.ViewColumn},
    webViewHTML: string,
    options?: vscode.WebviewPanelOptions & vscode.WebviewOptions
}