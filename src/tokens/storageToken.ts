import { InjectionToken } from "@angular/core";
import { StorageAbstractService } from "src/app/helpers/helpers";

export const STORAGE_TOKEN = new InjectionToken<StorageAbstractService>('storage');