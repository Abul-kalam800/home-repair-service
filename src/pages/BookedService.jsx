import React, { Suspense, use } from "react";
import MybookingService from "../componets/MybookingService";
import { bookingPromiesBymail } from "../shared/bookingApiPromies";
import { AuthContex } from "../Contex/AuthContex";
import useBookinPromiesApi from "../api/useBookinPromiesApi";
import Loading from "../componets/Loading";

const BookedService = () => {
  const { user } = use(AuthContex);
  const { bookingPromiesBymail } = useBookinPromiesApi();
  return (
    <div>
      <title>Bookservices</title>
      <Suspense fallback={<Loading></Loading>}>
        <MybookingService
          bookingPromiesBymail={bookingPromiesBymail(user.email)}
        ></MybookingService>
      </Suspense>
    </div>
  );
};

export default BookedService;
