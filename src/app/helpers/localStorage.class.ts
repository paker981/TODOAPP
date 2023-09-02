import { Inject } from "@angular/core";
import { Column } from "../types/column.types";
import { StorageAbstractService } from "./helpers";

export class LocalStorageService implements StorageAbstractService {

private readonly storageKey = 'columns';

constructor() { }

getData(): Column[] {
  const columnsString = localStorage.getItem(this.storageKey); // osobny serwis StorageService => bo: 1.testy 2. open/close
  return (columnsString ? JSON.parse(columnsString) : []) as Column[]
}

saveData(data: Column[]): void {
  localStorage.setItem(this.storageKey, JSON.stringify(data));
}
}
