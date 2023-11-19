import { DocumentSnapshot } from 'firebase/firestore';

export interface Message {
  id: string;
  data: DocumentSnapshot | undefined;
}