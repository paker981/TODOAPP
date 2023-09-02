import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Observable, share, shareReplay, tap } from 'rxjs';
import { Column } from 'src/app/types/column.types';
import { StorageService } from '../storage/storage.service';
import { STORAGE_TOKEN } from 'src/tokens/storageToken';
import { StorageAbstractService } from 'src/app/helpers/helpers';

@Injectable({
  providedIn: 'root'
})

export class DataProviderService {
  
  private readonly _columns$ = new BehaviorSubject<Column[]>(this.storageService.getData());
  readonly columns$ = this._columns$.asObservable().pipe(
    tap(columns => this.storageService.saveData(columns)),
    shareReplay(),
  );

  constructor(@Inject(STORAGE_TOKEN) private storageService: StorageAbstractService) {
    // this._columns$.subscribe(console.log)// 
    // this._columns$.subscribe((v) => {console.log(v)})// 
    // this._columns$.next(this.storageService.getData());
  }

  getData(): Column[]{
    return this._columns$.getValue()
  }

  saveData(columns: Column[]): void {
    this._columns$.next(columns);
  }
}

