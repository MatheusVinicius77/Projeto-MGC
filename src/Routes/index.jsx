import { Routes as RoutesWrapper, Route, Navigate } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import { QuemSomos } from "../pages/QuemSomos";

export function Routes() {
  return (
    <>
      <RoutesWrapper>
        <Route path="/home" element={<Homepage />} />
        <Route path="/quemsomos" element={<QuemSomos />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </RoutesWrapper>
    </>
  );
}
