import { Button, Flex, Stack, StackProps, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { TeamName } from "../CompanyName";

const stackProps: StackProps = {
  gap: "4",
  w: { base: "100%", lg: "50vw", xl: "50vw" },
  h: "full",
  justifyContent: "center",
  textAlign: { base: "center", lg: "left" },
};

export const Main: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Stack {...stackProps}>
      <Text color="white.0" as="h1" textStyle="main">
        {t("main.firstTitle")} <br /> <TeamName /> {t("main.secondTitle")}
      </Text>
      <Text color="white.50">{t("main.body")} </Text>
      <Flex
        gap={{ base: "2", xl: "4" }}
        flexDir={{ base: "column", xl: "row" }}
      >
        <Button size="xl">{t("main.createTeamsButton")}</Button>
        <Button marginInlineStart="0" size="xl" variant="outlineSecondary">
          {t("main.previousGamesButton")}
        </Button>
      </Flex>
    </Stack>
  );
};
