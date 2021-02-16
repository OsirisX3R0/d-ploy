import * as vscode from 'vscode'

export default interface iPanel {
    panel: vscode.WebviewPanel | undefined,
    viewType: string,
    title: string,
    showOptions: vscode.ViewColumn | {preserveFocus: boolean, viewColumn: vscode.ViewColumn},
    webViewHTML: string,
    options?: vscode.WebviewPanelOptions & vscode.WebviewOptions
}