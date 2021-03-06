import { MatchResult } from './match-result.model';

export interface TeamListModel {
  id: number;
  name: string;
  yearOfFoundation: number;
  coach: string;
  matches: number;
  victories: number;
  lastMatch: MatchResult;
}
