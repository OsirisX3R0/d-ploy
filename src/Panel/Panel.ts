import * as vscode from 'vscode'
import PanelInterface from './Panel.interface'

export default class Panel implements PanelInterface {
    panel: vscode.WebviewPanel
    viewType: string
    title: string
    showOptions: vscode.ViewColumn | {preserveFocus: boolean, viewColumn: vscode.ViewColumn}
    webViewHTML: string
    options?: vscode.WebviewPanelOptions & vscode.WebviewOptions = {}

    constructor(
      viewType: string,
      title: string,
      showOptions: vscode.ViewColumn | {preserveFocus: boolean, viewColumn: vscode.ViewColumn},
      webViewHTML: string,
      options?: vscode.WebviewPanelOptions & vscode.WebviewOptions) {
      this.viewType = viewType;
      this.title = title;
      this.showOptions = showOptions;
      this.webViewHTML = webViewHTML
      this.panel = vscode.window.createWebviewPanel(this.viewType, this.title, this.showOptions, this.options);

      this.panel.webview.html = this.webViewHTML
    }
}