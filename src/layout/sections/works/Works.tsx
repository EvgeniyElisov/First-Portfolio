import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu } from "./menu/TabMenu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from "../../../assets/images/proj-1.webp";
import timerImg from "../../../assets/images/proj-2.webp";
import { Container } from "../../../components/Container";

const worksItems = ["all", "landing page", "react", "spa"];

export const Works = () => {
  return (
    <StyledWorks>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu menuItems={worksItems} />
        <FlexWrapper justify={"space-between"} align={"flex-start"}>
          <Work
            title={"Social Network"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            }
            src={socialImg}
          />
          <Work
            title={"Timer"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"
            }
            src={timerImg}
          />
        </FlexWrapper>
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section``;
