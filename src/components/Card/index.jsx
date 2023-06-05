import { CardContainer, Content, Heading } from "./styles";

export const Card = () => {
  return (
    <CardContainer>
      <Heading>
        <h2>@josefortes</h2>
        <time>01 de Janeiro de 3000</time>
      </Heading>
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales ut
        nunc non suscipit. Ut faucibus justo ac ligula feugiat faucibus. Duis
        nisi ligula, fringilla tincidunt sem sed, fermentum blandit urna.
        Suspendisse vitae erat eget augue elementum tincidunt ac at diam. Etiam
        sollicitudin interdum justo, at tincidunt dui ullamcorper quis. Aliquam
        erat volutpat. Nulla tempus diam nibh. Donec suscipit nec massa vitae
        tempor.
      </Content>
    </CardContainer>
  );
};
