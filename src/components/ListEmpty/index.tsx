import { Typography } from "@components/Typography";
import { Container } from "./styles";

type ListEmptyProps = {
  message: string;
};

export function ListEmpty({ message }: ListEmptyProps) {
  return (
    <Container>
      <Typography
        title={message}
        style={{ textAlign: "center" }}
        size="text_md"
      />
    </Container>
  );
}
