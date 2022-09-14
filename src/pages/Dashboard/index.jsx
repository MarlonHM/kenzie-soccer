import Button from "../../components/Button";
import Dev from "../../components/Footer";
import Input from "../../components/Input";
import { Top, Username } from "./style";
import { Buttons, Groups } from "./style";
import { Search } from "./style";

const Dashboard = () => {
  return (
    <div>
      <Top />
      <Username>
        <h3>É gol do User!</h3>
        <h2>Entre nos seus grupos e aposte no melhor time.</h2>
      </Username>
      <Search>
        <input type="text" placeholder="Pesquise um grupo" />
        <Buttons>
          <Button primary titleButton="Todos os grupos" />
          <Button secondary titleButton="Meus Grupos" />
          <Button tertiary titleButton="Novo Grupo" />
        </Buttons>
      </Search>
      <Groups></Groups>
      <Dev />
    </div>
  );
};

export default Dashboard;
