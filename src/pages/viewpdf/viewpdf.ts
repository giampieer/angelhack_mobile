import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {DocumentViewer, DocumentViewerOptions} from "@ionic-native/document-viewer";
import {FileTransfer} from "@ionic-native/file-transfer";
import { File } from '@ionic-native/file';


@IonicPage()
@Component({
  selector: 'page-viewpdf',
  templateUrl: 'viewpdf.html',
})
export class ViewpdfPage {

  constructor(public navCtrl: NavController, private document: DocumentViewer, private file: File, private transfer: FileTransfer, private platform: Platform) { }

  openLocalPdf() {
    const options: DocumentViewerOptions = {
      title: 'My PDF'
    }
    this.document.viewDocument('https://devdactic.com/html/5-simple-hacks-LBT.pdf', 'application/pdf', options);
  }

  downloadAndOpenPdf() {
    let path = null;
    if (this.platform.is('ios')) {
      path = this.file.documentsDirectory;
    } else if (this.platform.is('android')) {
      path = this.file.documentsDirectory;
    }

    const transfer = this.transfer.create();
    transfer.download('https://devdactic.com/html/5-simple-hacks-LBT.pdf', path + 'myfile.pdf').then(entry => {
      let url = entry.toURL();
      this.document.viewDocument(url, 'application/pdf', {});
    });
  }
}
