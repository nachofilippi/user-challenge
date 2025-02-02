import { Table } from '../table/table.model';

export enum Size {
  SM = 'sm',
  LG = 'lg',
}

export interface ModalType extends Table {
  data: string[];
}
