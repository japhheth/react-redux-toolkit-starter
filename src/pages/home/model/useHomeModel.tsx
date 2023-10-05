/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/store";

import { sampleAPICall } from "../../../features/user/slice";

const UseHomeModel = () => {
  const dispatch = useAppDispatch();
  const { user, loading } = useAppSelector((state) => state.user);
  const [filters, setFilters] = useState<number>(1);

  const handleFetchSampleUser = () => {
    dispatch(sampleAPICall({ user: filters }));
  };

  useEffect(() => {
    handleFetchSampleUser();
  }, [filters]);

  return {
    user,
    loading,
    setFilters,
  };
};

export default UseHomeModel;
