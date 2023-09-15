import { Text, Button, Box } from "../components/chakra-ui";
import { useState } from "react";

interface Props {
  children: string;
}

const limit = 300;
function ExpandableText({ children }: Props) {
  const [expanded, setExpanded] = useState(false);
  if (children.length <= limit) return <Text>children</Text>;
  const updatedText = expanded
    ? children
    : children.substring(0, limit) + "...";

  return (
    <Box marginTop={4}>
      <Text lineHeight={1.8} fontSize="sm" as="p">
        {updatedText}{" "}
        <Button
          marginLeft={2}
          onClick={() => setExpanded((s) => !s)}
          size="xs"
          colorScheme={"yellow"}
        >
          {!expanded ? "Read more" : "Show less"}
        </Button>
      </Text>
    </Box>
  );
}

export default ExpandableText;
