/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/store";

import { sampleAPICall } from "../../../features/user/slice";

const UseHomeModel = () => {
  const dispatch = useAppDispatch();
  const { user, loading } = useAppSelector((state) => state.user);

  const handleFetchSampleUser = () => {
    dispatch(sampleAPICall({ user: 1 }));
  };

  useEffect(() => {
    handleFetchSampleUser();
  }, []);

  return {
    user,
    loading,
  };
};

export default UseHomeModel;
