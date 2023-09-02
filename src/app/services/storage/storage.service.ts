import { ɵparseCookieValue } from '@angular/common';
import { Injectable, Inject } from '@angular/core';
import { Column } from 'src/app/types/column.types';
import { STORAGE_TOKEN } from 'src/tokens/storageToken';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  // AbstractStorageService - interfejs
  // LocalStorageService
  /*
  private readonly storageKey = 'columns';

  constructor(@Inject(STORAGE_TOKEN) private storage: Storage) { }

  getData(): Column[] {
    const columnsString = this.storage.getItem(this.storageKey); // osobny serwis StorageService => bo: 1.testy 2. open/close
    return (columnsString ? JSON.parse(columnsString) : []) as Column[]
  }

  saveData(columns: Column[]): void {
    this.storage.setItem(this.storageKey, JSON.stringify(columns));
  }
  */
}

