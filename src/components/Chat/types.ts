import { DocumentSnapshot } from 'firebase/firestore';

export interface message {
  id: string;
  data: DocumentSnapshot | undefined;
}