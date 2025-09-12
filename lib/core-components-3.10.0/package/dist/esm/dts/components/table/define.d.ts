import { AugmentClassEvents } from '../../utils/types.js';
import { Table } from './table.js';
declare const SafTable: () => typeof Table;
export default SafTable;
export type SafTableInstance = AugmentClassEvents<Table>;
