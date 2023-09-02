import { v4 as uuidv4 } from 'uuid';
import { Column } from '../types/column.types';

export function arrayEqual<T>(arr1: T[], arr2: T[]): boolean {
    // Sprawdzanie, czy obie tablice zawierają te same elementy
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    if (set1.size !== set2.size) {
        return false;
    }

    for (const item of set1) {
        if (!set2.has(item)) {
            return false;
        }
    }

    return true;
}

export function generateUUID(): string {
    return uuidv4();
  }


  export interface StorageAbstractService {
    getData(): Column[];
    saveData(columns: Column[]): void
  }