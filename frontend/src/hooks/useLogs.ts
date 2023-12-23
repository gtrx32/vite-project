import { useState, useEffect } from 'react';
import { axiosClient } from '../api/client';

export type LogType = {
  id: number;
  userEmail: string;
  action: string;
  date: string;
  created_at: string;
};

export const useLogs = () => {
  const [data, setData] = useState<LogType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      axiosClient.get('/logs').then(response => {
        setData(response.data);
      });
    };

    fetchData();
  }, []);

  return data;
};
