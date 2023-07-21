import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PerformanceDataInterface {
  id?: string;
  week: number;
  data: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface PerformanceDataGetQueryInterface extends GetQueryInterface {
  id?: string;
  data?: string;
  user_id?: string;
}
