import { Routes as RoutesWrapper, Route, Navigate } from "react-router-dom";
import { Apadrinhamento } from "../pages/Apadrinhamento";
import { AreaDoSaber } from "../pages/AreaDoSaber";
import { Contato } from "../pages/Contato";
import { Depoimentopage } from "../pages/Depoimentos";
import { Homepage } from "../pages/Homepage";
import { Projetos } from "../pages/Projetos";
import { QuemSomos } from "../pages/QuemSomos";

export function Routes() {
  return (
    <>
      <RoutesWrapper>
        <Route path="/home" element={<Homepage />} />
        <Route path="/quemsomos" element={<QuemSomos />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/areadosaber" element={<AreaDoSaber />} />
        <Route path="/depoimentos" element={<Depoimentopage />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/apadrinhamento" element={<Apadrinhamento />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </RoutesWrapper>
    </>
  );
}
