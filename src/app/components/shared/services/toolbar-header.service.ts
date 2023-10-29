import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from '../interfaces/header-data';

@Injectable({
  providedIn: 'root'
})
export class ToolbarHeaderService {

  private _headerData = new BehaviorSubject<HeaderData>({
    title: '',
    icon: ''
  })

  constructor() { }

  get headerData(): HeaderData {
    return this._headerData.value
  }

  set headerData(headerData : HeaderData) {
    this._headerData.next(headerData)
  }
}
